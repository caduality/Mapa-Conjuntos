import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bus,
  ChevronDown,
  ChevronUp,
  Clock,
  Footprints,
  Info,
  MapPin,
} from 'lucide-react';
import {
  formatNumber,
  HOUSING_COMPLEXES,
  HousingComplex,
  RouteResult,
} from '../data/habitacionais';
import {
  BUS_PROFILES_BY_ID,
  BusDestinationLeg,
  ComplexBusProfile,
  formatMinutesLabel,
} from '../data/busRoutes';
import { RouteCompareMode } from './InteractiveMap';

interface BusAnalysisPanelProps {
  selectedComplexId: string | null;
  routeCompareMode: RouteCompareMode;
  onSelectComplex: (id: string | null) => void;
  onReturnBroadView: () => void;
  routesPracaById: Record<string, RouteResult>;
  routesShoppingById: Record<string, RouteResult>;
  onSelectStopHighlight?: (coords: [number, number] | null) => void;
}

function LegStopAccordion({
  title,
  leg,
  accentColor,
  onSelectStopHighlight,
}: {
  title: string;
  leg: BusDestinationLeg;
  accentColor: string;
  onSelectStopHighlight?: (coords: [number, number] | null) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-stone-200/80 pt-2.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 cursor-pointer"
      >
        <span>
          {open ? 'Ocultar' : 'Ver'} todas as {leg.stops.length} paradas até {title}
        </span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 shrink-0" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 shrink-0" />
        )}
      </button>

      {open && (
        <div className="mt-2 space-y-1.5">
          <p className="text-[11px] text-stone-500 leading-snug">
            Sequência considerada a partir do ponto de embarque referência do residencial. As coordenadas dos pontos são aproximadas.
          </p>
          <ol className="max-h-56 overflow-y-auto pr-1 space-y-1 text-[11.5px] text-stone-700 border border-stone-200 rounded-lg p-2 bg-stone-50/70">
          {leg.stops.map((stop, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === leg.stops.length - 1;
            return (
              <li key={`${stop.n}-${stop.name}`}>
                <button
                  type="button"
                  onClick={() => onSelectStopHighlight?.(stop.coords)}
                  className="w-full text-left flex items-baseline gap-2 px-1.5 py-1 rounded hover:bg-white transition-colors cursor-pointer"
                  title="Centralizar parada no mapa"
                >
                  <span
                    className="font-mono-tabular text-[10.5px] font-semibold w-5 shrink-0 text-right"
                    style={{
                      color: isFirst || isLast ? accentColor : '#78716c',
                    }}
                  >
                    {idx + 1}.
                  </span>
                  <span
                    className={`flex-1 ${
                      isFirst || isLast ? 'font-semibold text-stone-900' : ''
                    }`}
                  >
                    {stop.name}
                  </span>
                  {isFirst && (
                    <span className="text-[10px] font-medium text-stone-500 shrink-0">
                      Embarque
                    </span>
                  )}
                  {isLast && (
                    <span
                      className="text-[10px] font-semibold shrink-0"
                      style={{ color: accentColor }}
                    >
                      Desembarque
                    </span>
                  )}
                </button>
              </li>
            );
          })}
          </ol>
        </div>
      )}
    </div>
  );
}

function DestinationBusCard({
  label,
  accentColor,
  leg,
  carRoute,
  profile,
  onSelectStopHighlight,
}: {
  label: string;
  accentColor: string;
  leg: BusDestinationLeg;
  carRoute: RouteResult | undefined;
  profile: ComplexBusProfile;
  onSelectStopHighlight?: (coords: [number, number] | null) => void;
}) {
  const carKm = carRoute?.distanceKm ?? 0;
  const extraKm = carKm > 0 ? leg.distanceKm - carKm : 0;

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-3.5 space-y-3">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <span
            className="text-[11px] font-semibold uppercase tracking-wide block"
            style={{ color: accentColor }}
          >
            {label}
          </span>
          <span className="text-xs text-stone-500">
            Desembarque estimado: <strong className="text-stone-700 font-medium">{leg.alightingStop}</strong>
          </span>
        </div>

        <div className="text-right font-mono-tabular shrink-0">
          <span
            className="text-lg font-bold block leading-tight"
            style={{ color: accentColor }}
          >
            {leg.distanceKm.toFixed(1).replace('.', ',')} km
          </span>
          <span className="text-[11px] text-stone-500">
            {leg.stopsCount} paradas no trajeto
          </span>
        </div>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-3 gap-2 text-xs bg-stone-50 border border-stone-200/80 rounded-lg p-2.5">
        <div>
          <span className="text-[10.5px] text-stone-500 block">No ônibus</span>
          <strong className="font-mono-tabular text-sm text-stone-900">
            {formatMinutesLabel(leg.busDurationMin)}
          </strong>
        </div>
        <div>
          <span className="text-[10.5px] text-stone-500 block">A pé + ônibus</span>
          <strong className="font-mono-tabular text-sm text-stone-900">
            {formatMinutesLabel(leg.totalDoorToDoorMin)}
          </strong>
        </div>
        <div>
          <span className="text-[10.5px] text-stone-500 block">Com espera média</span>
          <strong className="font-mono-tabular text-sm text-stone-900">
            {profile.schedule
              ? formatMinutesLabel(leg.totalDoorToDoorMin + profile.schedule.avgWaitMin)
              : '—'}
          </strong>
        </div>
      </div>

      {carKm > 0 && Math.abs(extraKm) >= 0.4 && (
        <p className="text-[11.5px] text-stone-600">
          O ônibus percorre{' '}
          <strong className="font-mono-tabular text-stone-900">
            {extraKm > 0 ? `+${extraKm.toFixed(1).replace('.', ',')}` : extraKm.toFixed(1).replace('.', ',')} km
          </strong>{' '}
          em relação ao caminho direto de carro ({carKm.toFixed(1).replace('.', ',')} km) por conta dos retornos e voltas nos bairros.
        </p>
      )}

      {/* Didactic step-by-step corridor sequence */}
      <div className="space-y-1">
        <span className="text-[10.5px] font-semibold uppercase tracking-wide text-stone-500 block">
          Caminho passo a passo
        </span>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11.5px] text-stone-700 leading-snug">
          {leg.corridors.map((step, i) => (
            <span key={`${step}-${i}`} className="inline-flex items-center gap-1.5">
              <span className={i === 0 || i === leg.corridors.length - 1 ? 'font-semibold text-stone-900' : ''}>
                {step}
              </span>
              {i < leg.corridors.length - 1 && (
                <ArrowRight className="w-3 h-3 text-stone-400 shrink-0" />
              )}
            </span>
          ))}
        </div>
      </div>

      {leg.returnNote && (
        <p className="text-[11.5px] text-stone-500 leading-relaxed">
          {leg.returnNote}
        </p>
      )}

      <LegStopAccordion
        title={label.replace('Até o ', '').replace('Até a ', '')}
        leg={leg}
        accentColor={accentColor}
        onSelectStopHighlight={onSelectStopHighlight}
      />
    </div>
  );
}

export function BusAnalysisPanel({
  selectedComplexId,
  routeCompareMode,
  onSelectComplex,
  onReturnBroadView,
  routesPracaById,
  routesShoppingById,
  onSelectStopHighlight,
}: BusAnalysisPanelProps) {
  const [showSchedules, setShowSchedules] = useState(false);

  const selectedComplex: HousingComplex | null = selectedComplexId
    ? HOUSING_COMPLEXES.find((c) => c.id === selectedComplexId) ?? null
    : null;
  const profile: ComplexBusProfile | null = selectedComplex
    ? BUS_PROFILES_BY_ID[selectedComplex.id] ?? null
    : null;

  const showShopping =
    routeCompareMode === 'both' || routeCompareMode === 'cariri-shopping';
  const showPraca =
    routeCompareMode === 'both' || routeCompareMode === 'praca-padre-cicero';

  // Overview table when no complex is selected
  if (!selectedComplex || !profile) {
    return (
      <section className="border border-stone-200 rounded-xl bg-stone-50/70 p-3.5 space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-stone-900">
              Cobertura, paradas e tempo de ônibus por conjunto
            </h2>
            <p className="text-xs text-stone-600 mt-0.5">
              Estimativa a partir do ponto de partida/embarque referência em cada residencial nas linhas da ViaMetro (7001, 7001.1, 7005 e 7006). Clique em um conjunto para ver o trajeto aproximado no mapa.
            </p>
          </div>
          <button
            type="button"
            onClick={onReturnBroadView}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Visão ampla
          </button>
        </div>

        {/* 3 Summary Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
            <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
              Linhas regulares no recorte
            </span>
            <span className="font-mono-tabular text-sm sm:text-base font-bold text-stone-900 block mt-0.5">
              4 rotas ViaMetro
            </span>
            <span className="text-[11px] text-stone-500">
              7001, 7001.1, 7005 e 7006 · R$ 3,00 (R$ 1,50 meia)
            </span>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
            <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
              Tempo em trânsito (ônibus)
            </span>
            <span className="font-mono-tabular text-sm sm:text-base font-bold text-[#0369A1] block mt-0.5">
              13 a 62 min
            </span>
            <span className="text-[11px] text-stone-500">
              de 13 a 53 paradas até Praça ou Shopping
            </span>
          </div>

          <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5">
            <span className="text-[11px] font-medium uppercase tracking-wide text-stone-500 block">
              Sem cobertura regular
            </span>
            <span className="font-mono-tabular text-sm sm:text-base font-bold text-[#C71E1D] block mt-0.5">
              Leandro Bezerra (900 casas)
            </span>
            <span className="text-[11px] text-stone-500">
              ponto regular mais próximo a 3,66 km a pé
            </span>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-stone-200 rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-[10.5px] uppercase tracking-wider text-stone-500">
                <th className="py-2 px-3 font-semibold">Conjunto</th>
                <th className="py-2 px-2.5 font-semibold whitespace-nowrap">Linha e acesso</th>
                {showShopping && (
                  <th className="py-2 px-2.5 font-semibold text-right whitespace-nowrap">
                    Até Cariri Shopping
                  </th>
                )}
                {showPraca && (
                  <th className="py-2 px-2.5 font-semibold text-right whitespace-nowrap">
                    Até Praça Pe. Cícero
                  </th>
                )}
                <th className="py-2 px-3 font-semibold text-right whitespace-nowrap">
                  Saídas / dia útil
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {HOUSING_COMPLEXES.map((c) => {
                const p = BUS_PROFILES_BY_ID[c.id];
                if (!p) return null;
                return (
                  <tr
                    key={c.id}
                    onClick={() => onSelectComplex(c.id)}
                    className="hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <td className="py-2.5 px-3">
                      <span className="font-semibold text-stone-900 block">
                        {c.shortName}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        {c.neighborhood} · {c.statusLabel}
                      </span>
                    </td>
                    <td className="py-2.5 px-2.5">
                      {p.hasRegularBus ? (
                        <div>
                          <span className="font-mono-tabular font-semibold text-stone-900 block">
                            Linha {p.lineCode}
                          </span>
                          <span className="text-[11px] text-stone-500 font-mono-tabular">
                            {p.walkMeters} m (~{p.walkMin} min a pé)
                          </span>
                        </div>
                      ) : (
                        <div>
                          <span className="font-semibold text-[#C71E1D] block">
                            Sem linha regular
                          </span>
                          <span className="text-[11px] text-stone-500 font-mono-tabular">
                            {(p.walkMeters / 1000).toFixed(2).replace('.', ',')} km até ponto
                          </span>
                        </div>
                      )}
                    </td>

                    {showShopping && (
                      <td className="py-2.5 px-2.5 text-right font-mono-tabular whitespace-nowrap">
                        {p.toShopping ? (
                          <div>
                            <span className="font-semibold text-[#0369A1] block">
                              {p.toShopping.distanceKm.toFixed(1).replace('.', ',')} km ·{' '}
                              {formatMinutesLabel(p.toShopping.busDurationMin)}
                            </span>
                            <span className="text-[11px] text-stone-500">
                              {p.toShopping.stopsCount} paradas
                            </span>
                          </div>
                        ) : (
                          <span className="text-stone-400">Sem linha</span>
                        )}
                      </td>
                    )}

                    {showPraca && (
                      <td className="py-2.5 px-2.5 text-right font-mono-tabular whitespace-nowrap">
                        {p.toPraca ? (
                          <div>
                            <span className="font-semibold text-[#C71E1D] block">
                              {p.toPraca.distanceKm.toFixed(1).replace('.', ',')} km ·{' '}
                              {formatMinutesLabel(p.toPraca.busDurationMin)}
                            </span>
                            <span className="text-[11px] text-stone-500">
                              {p.toPraca.stopsCount} paradas
                            </span>
                          </div>
                        ) : (
                          <span className="text-stone-400">Sem linha</span>
                        )}
                      </td>
                    )}

                    <td className="py-2.5 px-3 text-right font-mono-tabular whitespace-nowrap">
                      {p.schedule ? (
                        <div>
                          <span className="font-semibold text-stone-900 block">
                            {p.schedule.weekdayTrips} viagens
                          </span>
                          <span className="text-[11px] text-stone-500">
                            média {p.schedule.avgGapMin} min
                          </span>
                        </div>
                      ) : (
                        <span className="text-[#C71E1D] font-medium">0 (só topic)</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg px-3 py-2.5 flex items-start gap-2 text-[11.5px] text-stone-600 leading-relaxed">
          <Info className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-stone-800 font-semibold">Limites dos dados:</strong> a localização das paradas é aproximada (não indica posição exata na calçada) e todos os cálculos consideram <strong className="text-stone-800 font-semibold">apenas o ponto de partida/embarque referência de cada residencial</strong> até o Shopping ou a Praça, somando a rota viária (OSRM) ao tempo médio por parada (~27 s).
          </p>
        </div>
      </section>
    );
  }

  // Detailed view for selected complex in Bus mode
  const routePraca = routesPracaById[selectedComplex.id];
  const routeShopping = routesShoppingById[selectedComplex.id];

  return (
    <section className="border border-stone-200 rounded-xl bg-stone-50/70 p-3.5 space-y-3">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-stone-500">
            <span className="font-semibold text-stone-900">
              {profile.hasRegularBus ? `Linha ${profile.lineCode}` : 'Sem ônibus regular'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{profile.lineName}</span>
            {profile.hasRegularBus && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-mono-tabular">
                  Tarifa R$ {profile.fareFullBRL.toFixed(2).replace('.', ',')} (meia R${' '}
                  {profile.fareHalfBRL.toFixed(2).replace('.', ',')})
                </span>
              </>
            )}
          </div>
          <h2 className="text-sm sm:text-base font-bold text-stone-900 mt-0.5">
            {selectedComplex.name}
          </h2>
          <p className="text-xs text-stone-500">
            {selectedComplex.neighborhood} · {selectedComplex.statusLabel} ·{' '}
            {formatNumber(
              selectedComplex.stages.reduce((acc, s) => acc + s.units, 0)
            )}{' '}
            casas
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => onSelectComplex(null)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Todos os 7 conjuntos
          </button>
        </div>
      </div>

      {/* 3-Step Journey Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="bg-white border border-stone-200 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
            <Footprints className="w-3.5 h-3.5 text-stone-700" />
            1. Caminhada até o ponto
          </div>
          <div className="font-mono-tabular text-base font-bold text-stone-900">
            {profile.walkMeters >= 1000
              ? `${(profile.walkMeters / 1000).toFixed(2).replace('.', ',')} km`
              : `${profile.walkMeters} m`}{' '}
            <span className="text-xs font-semibold text-stone-600">
              (~{profile.walkMin} min a pé)
            </span>
          </div>
          <p className="text-[11px] text-stone-500 leading-snug">
            Ponto de embarque referência (aprox.): <strong className="text-stone-700 font-medium">{profile.boardingStop}</strong>
          </p>
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
            <Clock className="w-3.5 h-3.5 text-stone-700" />
            2. Frequência e espera
          </div>
          {profile.schedule ? (
            <>
              <div className="font-mono-tabular text-base font-bold text-stone-900">
                {profile.schedule.weekdayTrips} saídas/dia útil
              </div>
              <p className="text-[11px] text-stone-500 leading-snug font-mono-tabular">
                Intervalo {profile.schedule.minGapMin}–{profile.schedule.maxGapMin} min (espera média ~
                {profile.schedule.avgWaitMin} min). Sábado: {profile.schedule.saturdayTrips}{' '}
                {profile.schedule.saturdayTrips === 1 ? 'viagem' : 'viagens'} · Domingo:{' '}
                {profile.schedule.sundayTrips}{' '}
                {profile.schedule.sundayTrips === 1 ? 'viagem' : 'viagens'}.
              </p>
            </>
          ) : (
            <>
              <div className="text-base font-bold text-[#C71E1D]">
                0 viagens regulares
              </div>
              <p className="text-[11px] text-stone-500 leading-snug">
                Vila Três Marias não integra as rotas regulares da ViaMetro.
              </p>
            </>
          )}
        </div>

        <div className="bg-white border border-stone-200 rounded-lg p-3 space-y-1">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-stone-500">
            {profile.hasRegularBus ? (
              <Bus className="w-3.5 h-3.5 text-stone-700" />
            ) : (
              <MapPin className="w-3.5 h-3.5 text-[#C71E1D]" />
            )}
            3. Cobertura e custo
          </div>
          {profile.hasRegularBus ? (
            <>
              <div className="font-mono-tabular text-base font-bold text-stone-900">
                R$ 3,00 <span className="text-xs font-normal text-stone-500">/ passagem</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-snug">
                2 passagens/dia (26 dias/mês) ={' '}
                <strong className="font-mono-tabular text-stone-700">
                  R$ {(profile.fareFullBRL * 2 * 26).toFixed(2).replace('.', ',')}/mês
                </strong>{' '}
                por pessoa (inteira, sem descontos).
              </p>
            </>
          ) : (
            <>
              <div className="text-base font-bold text-stone-900">
                Transporte complementar
              </div>
              <p className="text-[11px] text-stone-500 leading-snug">
                Depende de topic/van sem integração no cartão eletrônico, ou caminhada de 2,69 km em linha reta.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Destination Cards (Shopping / Praca) or Unserved Gap Explanation */}
      {profile.hasRegularBus ? (
        <div
          className={`grid gap-2.5 ${
            routeCompareMode === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {showShopping && profile.toShopping && (
            <DestinationBusCard
              label="Até o Cariri Shopping"
              accentColor="#0369A1"
              leg={profile.toShopping}
              carRoute={routeShopping}
              profile={profile}
              onSelectStopHighlight={onSelectStopHighlight}
            />
          )}

          {showPraca && profile.toPraca && (
            <DestinationBusCard
              label="Até a Praça Padre Cícero"
              accentColor="#C71E1D"
              leg={profile.toPraca}
              carRoute={routePraca}
              profile={profile}
              onSelectStopHighlight={onSelectStopHighlight}
            />
          )}
        </div>
      ) : (
        <div className="bg-white border border-stone-200 rounded-xl p-3.5 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#C71E1D]">
              Vazio de cobertura na Vila Três Marias
            </span>
            <span className="font-mono-tabular text-xs font-semibold text-stone-700">
              {profile.walkStraightMeters} m em linha reta · {(profile.walkMeters / 1000).toFixed(2).replace('.', ',')} km pelas ruas
            </span>
          </div>
          <p className="text-xs text-stone-700 leading-relaxed">
            A linha traçada no mapa mostra o deslocamento a pé até a parada regular mais próxima ({profile.boardingStop}), onde passam as linhas 7001 e 7001.1. Da saída do residencial até Cariri Shopping ou Praça Pe. Cícero, de carro o trajeto leva ~11 a 17 min (3,9 a 7,5 km), mas não há ônibus regular entrando no bairro.
          </p>
        </div>
      )}

      {/* Practical Summary & Official Departures */}
      <div className="bg-white border border-stone-200 rounded-xl p-3.5 space-y-2.5 text-xs text-stone-700">
        <div className="space-y-1">
          <span className="text-[11px] font-semibold uppercase tracking-wide text-stone-500 block">
            Leitura prática da rota
          </span>
          <p className="leading-relaxed text-stone-800">{profile.practicalSummary}</p>
          {profile.alternativeNote && (
            <p className="leading-relaxed text-stone-600">{profile.alternativeNote}</p>
          )}
        </div>

        {profile.schedule && (
          <div className="border-t border-stone-200/80 pt-2.5">
            <button
              type="button"
              onClick={() => setShowSchedules((v) => !v)}
              aria-expanded={showSchedules}
              className="flex items-center justify-between w-full text-xs font-semibold text-stone-700 hover:text-stone-900 cursor-pointer"
            >
              <span>
                {showSchedules ? 'Ocultar' : 'Ver'} todos os {profile.schedule.weekdayTrips} horários de saída em dias úteis ({profile.schedule.firstDeparture}–{profile.schedule.lastDeparture})
              </span>
              {showSchedules ? (
                <ChevronUp className="w-3.5 h-3.5 shrink-0" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              )}
            </button>

            {showSchedules && (
              <div className="mt-2 flex flex-wrap gap-1.5 font-mono-tabular text-[11px] text-stone-800">
                {profile.schedule.departuresWeekday.map((t, idx) => (
                  <span
                    key={`${t}-${idx}`}
                    className="px-2 py-0.5 bg-stone-100 border border-stone-200 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
        <div className="border-t border-stone-200/80 pt-2.5 flex items-start gap-2 text-[11px] text-stone-500 leading-relaxed">
          <Info className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
          <p>
            Aviso metodológico: as coordenadas das paradas são aproximadas e os cálculos acima consideram apenas o ponto de partida/embarque referência neste residencial até o ponto de desembarque próximo ao destino, podendo variar conforme a quadra de saída ou outros pontos do bairro.
          </p>
        </div>
      </div>
    </section>
  );
}
