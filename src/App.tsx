import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, Bus, Car, ChevronUp, Footprints, HelpCircle, Navigation } from 'lucide-react';
import {
  estimateFallbackRoute,
  fetchStreetRoute,
  formatBRL,
  formatNumber,
  getComplexTotals,
  HOUSING_COMPLEXES,
  REFERENCE_HUBS,
  RouteResult,
} from './data/habitacionais';
import { BUS_PROFILES_BY_ID, formatMinutesLabel } from './data/busRoutes';
import { InteractiveMap, RouteCompareMode } from './components/InteractiveMap';
import { HousingSpreadsheet } from './components/HousingSpreadsheet';
import { BusAnalysisPanel } from './components/BusAnalysisPanel';

type TravelMode = 'car' | 'walk';
type ViewTabMode = 'broad' | 'street' | 'bus';

function formatDuration(minutes: number): string {
  if (minutes < 60) return `~${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `~${h}h` : `~${h}h${String(m).padStart(2, '0')}`;
}

function getRouteDuration(route: RouteResult, mode: TravelMode): number {
  if (mode === 'walk') return route.durationWalkMin;
  return route.durationCarMin;
}

const TRAVEL_MODES: { id: TravelMode; label: string; longLabel: string }[] = [
  { id: 'car', label: 'Carro', longLabel: 'de carro (tempo médio)' },
  { id: 'walk', label: 'A pé', longLabel: 'a pé (tempo médio)' },
];

export default function App() {
  const [selectedComplexId, setSelectedComplexId] = useState<string | null>(null);
  const [routeCompareMode, setRouteCompareMode] = useState<RouteCompareMode>('praca-padre-cicero');
  const [viewMode, setViewMode] = useState<ViewTabMode>('broad');
  const [broadViewResetKey, setBroadViewResetKey] = useState(0);
  const [travelMode, setTravelMode] = useState<TravelMode>('car');
  const [routesPracaById, setRoutesPracaById] = useState<Record<string, RouteResult>>({});
  const [routesShoppingById, setRoutesShoppingById] = useState<Record<string, RouteResult>>({});
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [highlightedStopCoords, setHighlightedStopCoords] = useState<[number, number] | null>(null);

  const isBroadViewTab = viewMode === 'broad';
  const isBusTab = viewMode === 'bus';

  const pracaHub = REFERENCE_HUBS[0];
  const shoppingHub = REFERENCE_HUBS[1];

  const handleSelectComplex = useCallback((id: string | null) => {
    setSelectedComplexId(id);
    setHighlightedStopCoords(null);
  }, []);

  const handleSelectHubMode = useCallback((mode: RouteCompareMode) => {
    setRouteCompareMode(mode);
    setHighlightedStopCoords(null);
    setViewMode((prev) => (prev === 'broad' ? 'street' : prev));
  }, []);

  const handleSelectBroadView = useCallback(() => {
    setSelectedComplexId(null);
    setHighlightedStopCoords(null);
    setViewMode('broad');
    setBroadViewResetKey((k) => k + 1);
  }, []);

  const handleSelectBusTab = useCallback(() => {
    setHighlightedStopCoords(null);
    if (viewMode === 'broad') {
      setRouteCompareMode('both');
    }
    setViewMode('bus');
  }, [viewMode]);

  const handleSelectStreetTab = useCallback(() => {
    setHighlightedStopCoords(null);
    setViewMode('street');
  }, []);

  const selectedComplex = useMemo(
    () =>
      selectedComplexId
        ? HOUSING_COMPLEXES.find((c) => c.id === selectedComplexId) ?? null
        : null,
    [selectedComplexId]
  );

  // Fetch real OSRM street routes for all 7 complexes to Praça Padre Cícero and Cariri Shopping
  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const initPraca: Record<string, RouteResult> = {};
    const initShopping: Record<string, RouteResult> = {};
    HOUSING_COMPLEXES.forEach((c) => {
      initPraca[c.id] = estimateFallbackRoute(c.coords, pracaHub.coords);
      initShopping[c.id] = estimateFallbackRoute(c.coords, shoppingHub.coords);
    });
    setRoutesPracaById(initPraca);
    setRoutesShoppingById(initShopping);

    async function loadAllRoutes() {
      setIsRouteLoading(true);
      const results = await Promise.all(
        HOUSING_COMPLEXES.map(async (c) => {
          const [rPraca, rShopping] = await Promise.all([
            fetchStreetRoute(c.coords, pracaHub.coords, controller.signal),
            fetchStreetRoute(c.coords, shoppingHub.coords, controller.signal),
          ]);
          return { id: c.id, rPraca, rShopping };
        })
      );
      if (cancelled) return;

      const nextPraca: Record<string, RouteResult> = {};
      const nextShopping: Record<string, RouteResult> = {};
      results.forEach((r) => {
        nextPraca[r.id] = r.rPraca;
        nextShopping[r.id] = r.rShopping;
      });
      setRoutesPracaById(nextPraca);
      setRoutesShoppingById(nextShopping);
      setIsRouteLoading(false);
    }

    loadAllRoutes();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [pracaHub, shoppingHub]);

  const routePraca = selectedComplex ? routesPracaById[selectedComplex.id] ?? null : null;
  const routeShopping = selectedComplex ? routesShoppingById[selectedComplex.id] ?? null : null;
  const selectedTotals = selectedComplex ? getComplexTotals(selectedComplex) : null;

  const sortedComplexes = useMemo(() => {
    return [...HOUSING_COMPLEXES].sort((a, b) => {
      const getD = (id: string) =>
        routeCompareMode === 'cariri-shopping'
          ? routesShoppingById[id]?.distanceKm ?? 0
          : routesPracaById[id]?.distanceKm ?? 0;
      return getD(b.id) - getD(a.id);
    });
  }, [routeCompareMode, routesPracaById, routesShoppingById]);

  const activeTravelInfo = TRAVEL_MODES.find((t) => t.id === travelMode) ?? TRAVEL_MODES[0];

  const broadSummary = useMemo(() => {
    const totals = HOUSING_COMPLEXES.reduce(
      (acc, c) => {
        const t = getComplexTotals(c);
        return { units: acc.units + t.units, value: acc.value + t.value };
      },
      { units: 0, value: 0 }
    );
    const pracaDists = HOUSING_COMPLEXES.map((c) => routesPracaById[c.id]?.distanceKm ?? 0).filter(
      (d) => d > 0
    );
    const shoppingDists = HOUSING_COMPLEXES.map(
      (c) => routesShoppingById[c.id]?.distanceKm ?? 0
    ).filter((d) => d > 0);

    return {
      units: totals.units,
      value: totals.value,
      pracaMinKm: pracaDists.length ? Math.min(...pracaDists) : 0,
      pracaMaxKm: pracaDists.length ? Math.max(...pracaDists) : 0,
      shoppingMinKm: shoppingDists.length ? Math.min(...shoppingDists) : 0,
      shoppingMaxKm: shoppingDists.length ? Math.max(...shoppingDists) : 0,
    };
  }, [routesPracaById, routesShoppingById]);

  return (
    <div className="bg-white text-stone-900 py-3 px-2 sm:px-4">
      <div className="w-full max-w-[760px] mx-auto space-y-3.5">
        {/* Clean Graphic Header — Explicitly states distance + quantity + values */}
        <header className="flex items-start justify-between gap-3">
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-snug [text-wrap:balance]">
              Distância, rotas de ônibus, quantidade de casas e valores dos conjuntos habitacionais de Juazeiro do Norte
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Consulte o trajeto pelas ruas e as linhas de ônibus (paradas, horários e tempo estimado) até a Praça Padre Cícero ou o Cariri Shopping e veja as moradias de cada conjunto por etapa
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowGuide((v) => !v)}
            aria-expanded={showGuide}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium border rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              showGuide
                ? 'bg-stone-900 border-stone-900 text-white'
                : 'text-stone-600 bg-stone-100/80 hover:bg-stone-200 border-stone-200'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Como usar
          </button>
        </header>

        {/* Discreet Collapsible Usage Guide */}
        {showGuide && (
          <section
            aria-label="Como usar o mapa e a planilha"
            className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2.5 text-xs text-stone-700"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-stone-900 text-xs sm:text-sm">
                Como mexer no mapa e na planilha
              </span>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-stone-600 hover:text-stone-900 bg-white border border-stone-200 rounded-md transition-colors cursor-pointer"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                Minimizar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 leading-relaxed">
              <div className="bg-white border border-stone-200/80 rounded-lg p-2.5 space-y-1.5">
                <p className="font-semibold text-stone-900">Visão ampla x Distância por localidade</p>
                <ul className="space-y-1 text-stone-600 list-disc pl-4">
                  <li>
                    <strong>Visão ampla (botão no topo):</strong> modo de panorama geral. Passe o mouse sobre um ícone ou sobre o nome dele no mapa para ver casas, valor e distância geral, e <em>clique no ícone para mais detalhes</em> — o mapa dá zoom e exibe as etapas diretamente no mapa, sem marcar rotas.
                  </li>
                  <li>
                    <strong>Veja a distância por localidade:</strong> escolha <em>Ambos</em>, <em>Cariri Shopping</em> ou <em>Praça Pe. Cícero</em> e alterne entre <em>Carro</em> ou <em>A pé</em> para traçar os trajetos detalhados e conferir o tempo médio.
                  </li>
                  <li>
                    <strong>Aba Ônibus (rotas e paradas):</strong> veja a linha da ViaMetro de cada residencial considerando apenas o ponto de partida/embarque referência (as paradas no mapa têm posição aproximada), a caminhada inicial, a quantidade de paradas e o tempo estimado até o Shopping ou Praça.
                  </li>
                  <li>
                    <strong>Voltar para o geral:</strong> clique em <em>Visão ampla</em> no topo ou no botão de retorno nos detalhes para limpar o zoom e voltar ao panorama geral.
                  </li>
                  <li>
                    <strong>Distância na linha do trajeto:</strong> com uma rota aberta, passe o mouse sobre a linha colorida ou sobre qualquer parada para ver os detalhes.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-stone-200/80 rounded-lg p-2.5 space-y-1.5">
                <p className="font-semibold text-stone-900">Camadas do mapa e planilha</p>
                <ul className="space-y-1 text-stone-600 list-disc pl-4">
                  <li>
                    <strong>Visualização do mapa:</strong> alterne entre <em>Ruas</em> e <em>Satélite</em> e ative ou oculte os <em>Anéis 2·5·8 km</em> (no modo detalhado) e os <em>Rótulos</em>.
                  </li>
                  <li>
                    <strong>Abrir etapas na planilha:</strong> clique em <em>ver etapas</em> (ou na setinha ao lado do nome) para ver os números separados de cada fase (ex.: I, II, III).
                  </li>
                  <li>
                    <strong>Sincronizar com o mapa:</strong> clique em qualquer linha da tabela para abrir aquele residencial no mapa.
                  </li>
                  <li>
                    <strong>Buscar, ordenar e baixar:</strong> filtre pelo nome, clique nas colunas (<em>Casas</em>, <em>Valor contratado</em>, <em>Média / casa</em>) para ordenar ou clique em <em>Baixar CSV</em>.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Top Mode Controls: Broad View / Street Distance / Bus Routes */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={handleSelectBroadView}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isBroadViewTab
                  ? 'bg-stone-900 border-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Visão ampla (geral)
            </button>

            <button
              type="button"
              onClick={handleSelectStreetTab}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'street'
                  ? 'bg-stone-900 border-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              Trajeto por rua (Carro / A pé)
            </button>

            <button
              type="button"
              onClick={handleSelectBusTab}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isBusTab
                  ? 'bg-[#0369A1] border-[#0369A1] text-white shadow-xs'
                  : 'bg-stone-100 border-stone-200 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Bus className="w-3.5 h-3.5" />
              Ônibus (rotas e paradas)
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-stone-600">
                {isBusTab ? 'Destino da rota de ônibus:' : 'Veja a distância por localidade:'}
              </span>
              <div className="inline-flex flex-wrap items-center gap-0.5 p-0.5 bg-stone-100 border border-stone-200 rounded-lg">
                {[
                  { id: 'both', label: 'Ambos' },
                  { id: 'cariri-shopping', label: 'Cariri Shopping' },
                  { id: 'praca-padre-cicero', label: 'Praça Pe. Cícero' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelectHubMode(opt.id as RouteCompareMode)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      !isBroadViewTab && routeCompareMode === opt.id
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {!isBusTab ? (
              <div
                className={`flex items-center gap-1.5 transition-opacity ${
                  isBroadViewTab ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <span className="text-xs font-medium text-stone-500">Tempo médio:</span>
                <div className="inline-flex items-center gap-0.5 p-0.5 bg-stone-100 border border-stone-200 rounded-lg">
                  {TRAVEL_MODES.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setTravelMode(m.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        travelMode === m.id
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {m.id === 'car' && <Car className="w-3 h-3" />}
                      {m.id === 'walk' && <Footprints className="w-3 h-3" />}
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <span className="text-xs text-stone-500 font-mono-tabular">
                ViaMetro Cariri · R$ 3,00 (R$ 1,50 meia)
              </span>
            )}
          </div>
        </div>

        {/* Full-Column Map */}
        <InteractiveMap
          complexes={HOUSING_COMPLEXES}
          hubs={REFERENCE_HUBS}
          selectedComplexId={selectedComplexId}
          routeCompareMode={routeCompareMode}
          onSelectComplex={handleSelectComplex}
          onSelectHubMode={handleSelectHubMode}
          onReturnBroadView={handleSelectBroadView}
          routeToPraca={routePraca}
          routeToShopping={routeShopping}
          routesPracaById={routesPracaById}
          routesShoppingById={routesShoppingById}
          travelMode={travelMode}
          isRouteLoading={isRouteLoading}
          isBroadView={isBroadViewTab}
          isBusMode={isBusTab}
          highlightedStopCoords={highlightedStopCoords}
          broadViewResetKey={broadViewResetKey}
        />

        {/* Selected Complex Details (Localidade / Ônibus) OR Static Broad Overview */}
        {isBusTab ? (
          <BusAnalysisPanel
            selectedComplexId={selectedComplexId}
            routeCompareMode={routeCompareMode}
            onSelectComplex={handleSelectComplex}
            onReturnBroadView={handleSelectBroadView}
            routesPracaById={routesPracaById}
            routesShoppingById={routesShoppingById}
            onSelectStopHighlight={setHighlightedStopCoords}
          />
        ) : !isBroadViewTab && selectedComplex && selectedTotals && routePraca && routeShopping ? (
          <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/70 space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-stone-900">
                  {selectedComplex.name}
                </h2>
                <p className="text-xs text-stone-500">
                  {selectedComplex.neighborhood} · {selectedComplex.statusLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={handleSelectBroadView}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Voltar para visão ampla
              </button>
            </div>

            {/* Stage-by-stage breakdown + Total right below the complex title */}
            <div className="bg-white border border-stone-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50 text-[10.5px] uppercase tracking-wider text-stone-500">
                    <th className="py-2 px-3 font-semibold">Etapa</th>
                    <th className="py-2 px-3 font-semibold text-right whitespace-nowrap">
                      Quantidade de casas
                    </th>
                    <th className="py-2 px-3 font-semibold text-right whitespace-nowrap">
                      Valor contratado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {selectedComplex.stages.map((st) => (
                    <tr key={st.id}>
                      <td className="py-2 px-3 text-stone-700 font-medium">
                        {st.name}
                      </td>
                      <td className="py-2 px-3 text-right font-mono-tabular font-semibold text-stone-900 whitespace-nowrap">
                        {formatNumber(st.units)}
                      </td>
                      <td className="py-2 px-3 text-right font-mono-tabular text-stone-900 whitespace-nowrap">
                        {formatBRL(st.value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-stone-200 bg-stone-100/80 font-semibold text-stone-900">
                    <td className="py-2 px-3">
                      {selectedComplex.stages.length > 1
                        ? 'Total do conjunto'
                        : 'Total do residencial'}
                    </td>
                    <td className="py-2 px-3 text-right font-mono-tabular whitespace-nowrap">
                      {formatNumber(selectedTotals.units)}
                    </td>
                    <td className="py-2 px-3 text-right font-mono-tabular whitespace-nowrap">
                      {formatBRL(selectedTotals.value)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Individual Distance Cards */}
            <div
              className={`grid gap-2.5 ${
                routeCompareMode === 'both' ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {(routeCompareMode === 'both' || routeCompareMode === 'praca-padre-cicero') && (
                <div className="bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#0369A1] block">
                      Até a Praça Padre Cícero
                    </span>
                    <span className="text-xs text-stone-500">
                      {activeTravelInfo.longLabel}
                    </span>
                  </div>
                  <div className="text-right font-mono-tabular shrink-0">
                    <span className="text-lg font-bold text-[#0369A1] block leading-tight">
                      {routePraca.distanceKm.toFixed(1).replace('.', ',')} km
                    </span>
                    <span className="text-xs font-semibold text-[#0369A1]">
                      {formatDuration(getRouteDuration(routePraca, travelMode))}
                    </span>
                  </div>
                </div>
              )}

              {(routeCompareMode === 'both' || routeCompareMode === 'cariri-shopping') && (
                <div className="bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[#0369A1] block">
                      Até o Cariri Shopping
                    </span>
                    <span className="text-xs text-stone-500">
                      {activeTravelInfo.longLabel}
                    </span>
                  </div>
                  <div className="text-right font-mono-tabular shrink-0">
                    <span className="text-lg font-bold text-[#0369A1] block leading-tight">
                      {routeShopping.distanceKm.toFixed(1).replace('.', ',')} km
                    </span>
                    <span className="text-xs font-semibold text-[#0369A1]">
                      {formatDuration(getRouteDuration(routeShopping, travelMode))}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : isBroadViewTab ? (
          <div className="border border-stone-200 rounded-xl p-3.5 bg-stone-50/70 space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
                  Quantidade geral
                </span>
                <span className="font-mono-tabular text-base sm:text-lg font-bold text-stone-900 block mt-0.5">
                  {formatNumber(broadSummary.units)} casas
                </span>
                <span className="text-[11px] text-stone-500">
                  em {HOUSING_COMPLEXES.length} conjuntos mapeados
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
                  Valor contratado geral
                </span>
                <span className="font-mono-tabular text-base sm:text-lg font-bold text-stone-900 block mt-0.5">
                  {formatBRL(broadSummary.value)}
                </span>
                <span className="text-[11px] text-stone-500">
                  soma dos 7 conjuntos urbanos
                </span>
              </div>

              <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
                <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
                  Distância geral (por rua)
                </span>
                <span className="font-mono-tabular text-xs font-semibold text-[#0369A1] block mt-1">
                  Praça: {broadSummary.pracaMinKm.toFixed(1).replace('.', ',')} a{' '}
                  {broadSummary.pracaMaxKm.toFixed(1).replace('.', ',')} km
                </span>
                <span className="font-mono-tabular text-xs font-semibold text-[#0369A1] block mt-0.5">
                  Shopping: {broadSummary.shoppingMinKm.toFixed(1).replace('.', ',')} a{' '}
                  {broadSummary.shoppingMaxKm.toFixed(1).replace('.', ',')} km
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-600">
              Passe o mouse sobre qualquer marcador no mapa para ver casas, valor e distância geral, ou clique para ver mais detalhes.
            </p>
          </div>
        ) : (
          <div className="border border-stone-200 rounded-xl px-3.5 py-2.5 bg-stone-50/70 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600">
            <span>
              Clique em qualquer conjunto no mapa ou abaixo para ver as etapas e as distâncias detalhadas ({activeTravelInfo.label.toLowerCase()}).
            </span>
            <button
              type="button"
              onClick={handleSelectBroadView}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar para visão ampla
            </button>
          </div>
        )}

        {/* Quick Clickable Complex List */}
        <div className="flex flex-wrap gap-1.5">
          {sortedComplexes.map((c) => {
            const isSelected = c.id === selectedComplexId;
            const totals = getComplexTotals(c);
            const r =
              routeCompareMode === 'cariri-shopping'
                ? routesShoppingById[c.id]
                : routesPracaById[c.id];
            const dist = r?.distanceKm ?? 0;
            const mins = r ? getRouteDuration(r, travelMode) : 0;
            const busProf = BUS_PROFILES_BY_ID[c.id];
            const busLeg =
              routeCompareMode === 'cariri-shopping'
                ? busProf?.toShopping
                : busProf?.toPraca;

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => handleSelectComplex(isSelected ? null : c.id)}
                className={`px-2.5 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 border-stone-900 text-white font-semibold'
                    : 'bg-white border-stone-200 text-stone-700 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                {c.shortName}{' '}
                <span className={`font-mono-tabular ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {isBusTab && busProf
                    ? busProf.hasRegularBus && busLeg
                      ? `· ${busProf.lineCode} (${busLeg.stopsCount} par. / ${formatMinutesLabel(busLeg.busDurationMin)})`
                      : '· Sem linha regular'
                    : isBroadViewTab
                      ? `· ${formatNumber(totals.units)} casas`
                      : `· ${dist.toFixed(1).replace('.', ',')} km (${formatDuration(mins)})`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dedicated Interactive Spreadsheet Below */}
        <HousingSpreadsheet
          selectedComplexId={selectedComplexId}
          onSelectComplex={handleSelectComplex}
        />

        {/* Source Footer */}
        <footer className="pt-0.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-400">
          <span>
            Fonte: Mapeamento próprio (Datawrapper iZ4lY), planilha MCMV, ViaMetro Cariri (7001, 7001.1, 7005, 7006) e OpenStreetMap
          </span>
          <span>Juazeiro do Norte, CE</span>
        </footer>
      </div>
    </div>
  );
}
