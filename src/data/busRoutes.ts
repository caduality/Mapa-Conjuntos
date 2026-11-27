export interface BusStopPoint {
  n: number;
  name: string;
  coords: [number, number];
}

export interface BusDestinationLeg {
  stopsCount: number;
  distanceKm: number;
  busDurationMin: number;
  totalDoorToDoorMin: number;
  alightingStop: string;
  corridors: string[];
  stops: BusStopPoint[];
  geometry: [number, number][];
  returnNote?: string;
}

export interface BusScheduleSummary {
  weekdayTrips: number;
  saturdayTrips: number;
  sundayTrips: number;
  firstDeparture: string;
  lastDeparture: string;
  minGapMin: number;
  maxGapMin: number;
  avgGapMin: number;
  avgWaitMin: number;
  departuresWeekday: string[];
}

export interface ComplexBusProfile {
  complexId: string;
  hasRegularBus: boolean;
  lineCode: string;
  lineName: string;
  fareFullBRL: number;
  fareHalfBRL: number;
  boardingStop: string;
  boardingCoords: [number, number];
  walkMeters: number;
  walkStraightMeters: number;
  walkMin: number;
  walkGeometry: [number, number][];
  schedule: BusScheduleSummary | null;
  toShopping: BusDestinationLeg | null;
  toPraca: BusDestinationLeg | null;
  practicalSummary: string;
  alternativeNote?: string;
}

// Dados cruzados a partir dos itinerários oficiais (PDFs 7001, 7001.1, 7005 e 7006),
// pontos georreferenciados e tabelas de horários da ViaMetro Cariri + malha viária OSM/OSRM.
export const COMPLEX_BUS_PROFILES: ComplexBusProfile[] = [
  {
    "complexId": "padre-cicero",
    "hasRegularBus": true,
    "lineCode": "7001.1",
    "lineName": "Centro / Novo Juazeiro — Via Conj. Padre Cícero",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "ESCOLA CONJUNTO PE CICERO 01",
    "boardingCoords": [
      -7.253453,
      -39.258067
    ],
    "walkMeters": 180,
    "walkStraightMeters": 160,
    "walkMin": 2,
    "walkGeometry": [
      [
        -7.25289,
        -39.2594
      ],
      [
        -7.25362,
        -39.25816
      ],
      [
        -7.25346,
        -39.25806
      ]
    ],
    "schedule": {
      "weekdayTrips": 12,
      "saturdayTrips": 8,
      "sundayTrips": 7,
      "firstDeparture": "05:55",
      "lastDeparture": "19:05",
      "minGapMin": 50,
      "maxGapMin": 110,
      "avgGapMin": 72,
      "avgWaitMin": 36,
      "departuresWeekday": [
        "05:55",
        "06:45",
        "08:35",
        "09:30",
        "10:40",
        "11:45",
        "12:40",
        "13:40",
        "15:30",
        "16:40",
        "17:40",
        "19:05"
      ]
    },
    "toShopping": {
      "stopsCount": 35,
      "distanceKm": 12.18,
      "busDurationMin": 46,
      "totalDoorToDoorMin": 48,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Conj. Padre Cícero",
        "Rua Severino do Carmo",
        "Rua Onofre A. Landim",
        "Av. Castelo Branco",
        "Rodoviária",
        "Hospital Regional",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "ESCOLA CONJUNTO PE CICERO 01",
          "coords": [
            -7.253453,
            -39.258067
          ]
        },
        {
          "n": 2,
          "name": "AO LADO ESCOLA CONJUNTO PE CICERO 02",
          "coords": [
            -7.254536,
            -39.25661
          ]
        },
        {
          "n": 3,
          "name": "R AURELIANO PEREIRA DA SILVA 169",
          "coords": [
            -7.253775,
            -39.255929
          ]
        },
        {
          "n": 4,
          "name": "R AURELIANO PEREIRA DA SILVA 419",
          "coords": [
            -7.252661,
            -39.257865
          ]
        },
        {
          "n": 5,
          "name": "R AURELIANO PEREIRA DA SILVA 655",
          "coords": [
            -7.251338,
            -39.260159
          ]
        },
        {
          "n": 6,
          "name": "R SEVERINO DO CARMO 05",
          "coords": [
            -7.249464,
            -39.259751
          ]
        },
        {
          "n": 7,
          "name": "R SEVERINO DO CARMO 04",
          "coords": [
            -7.248717,
            -39.261017
          ]
        },
        {
          "n": 8,
          "name": "R SEVERINO DO CARMO 03",
          "coords": [
            -7.247781,
            -39.262648
          ]
        },
        {
          "n": 9,
          "name": "R SEVERINO DO CARMO 02",
          "coords": [
            -7.246583,
            -39.264681
          ]
        },
        {
          "n": 10,
          "name": "R SEVERINO DO CARMO 01",
          "coords": [
            -7.245751,
            -39.266118
          ]
        },
        {
          "n": 11,
          "name": "CT DO GUARANI",
          "coords": [
            -7.244708,
            -39.267132
          ]
        },
        {
          "n": 12,
          "name": "LOTEAMENTO OASSIS 01",
          "coords": [
            -7.242417,
            -39.266424
          ]
        },
        {
          "n": 13,
          "name": "Rua Onofre Antônio Landim,1004",
          "coords": [
            -7.240405,
            -39.269063
          ]
        },
        {
          "n": 14,
          "name": "Rua Onofre Antônio Landim,856",
          "coords": [
            -7.237936,
            -39.273221
          ]
        },
        {
          "n": 15,
          "name": "Rua José Antônio Severino,176",
          "coords": [
            -7.234423,
            -39.276861
          ]
        },
        {
          "n": 16,
          "name": "Rua Fausto Pessoa dos Santos, 38",
          "coords": [
            -7.232997,
            -39.278955
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 19,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 20,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 21,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 22,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 23,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 24,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 25,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 26,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 27,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 28,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 29,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 30,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 31,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 32,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 33,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 34,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 35,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 36,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.25346,
          -39.25806
        ],
        [
          -7.25451,
          -39.2566
        ],
        [
          -7.25544,
          -39.25499
        ],
        [
          -7.25505,
          -39.25477
        ],
        [
          -7.25486,
          -39.25467
        ],
        [
          -7.25459,
          -39.25452
        ],
        [
          -7.25371,
          -39.25605
        ],
        [
          -7.25265,
          -39.25786
        ],
        [
          -7.2513,
          -39.26014
        ],
        [
          -7.25126,
          -39.26031
        ],
        [
          -7.24965,
          -39.25937
        ],
        [
          -7.24961,
          -39.25944
        ],
        [
          -7.24957,
          -39.2595
        ],
        [
          -7.24943,
          -39.25973
        ],
        [
          -7.24889,
          -39.26068
        ],
        [
          -7.24818,
          -39.26185
        ],
        [
          -7.24774,
          -39.26262
        ],
        [
          -7.24721,
          -39.2635
        ],
        [
          -7.24655,
          -39.26467
        ],
        [
          -7.24572,
          -39.2661
        ],
        [
          -7.24536,
          -39.2667
        ],
        [
          -7.24504,
          -39.26727
        ],
        [
          -7.24376,
          -39.26686
        ],
        [
          -7.24312,
          -39.26668
        ],
        [
          -7.2424,
          -39.26647
        ],
        [
          -7.24196,
          -39.26634
        ],
        [
          -7.24131,
          -39.26742
        ],
        [
          -7.24075,
          -39.26841
        ],
        [
          -7.24047,
          -39.2689
        ],
        [
          -7.24012,
          -39.26945
        ],
        [
          -7.23946,
          -39.2706
        ],
        [
          -7.23877,
          -39.27177
        ],
        [
          -7.23809,
          -39.27293
        ],
        [
          -7.23773,
          -39.27356
        ],
        [
          -7.2371,
          -39.27468
        ],
        [
          -7.23672,
          -39.27528
        ],
        [
          -7.23667,
          -39.27527
        ],
        [
          -7.23623,
          -39.27512
        ],
        [
          -7.23552,
          -39.27489
        ],
        [
          -7.23441,
          -39.27685
        ],
        [
          -7.233,
          -39.27896
        ],
        [
          -7.23165,
          -39.27897
        ],
        [
          -7.23111,
          -39.27898
        ],
        [
          -7.23112,
          -39.28071
        ],
        [
          -7.23112,
          -39.28077
        ],
        [
          -7.23112,
          -39.28167
        ],
        [
          -7.23122,
          -39.28258
        ],
        [
          -7.23121,
          -39.28168
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23114,
          -39.28325
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23109,
          -39.28391
        ],
        [
          -7.23098,
          -39.28472
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23081,
          -39.286
        ],
        [
          -7.22984,
          -39.28566
        ],
        [
          -7.23027,
          -39.28551
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23077,
          -39.28643
        ],
        [
          -7.2307,
          -39.28705
        ],
        [
          -7.23053,
          -39.28837
        ],
        [
          -7.23049,
          -39.28878
        ],
        [
          -7.23043,
          -39.28929
        ],
        [
          -7.23029,
          -39.29017
        ],
        [
          -7.2302,
          -39.29086
        ],
        [
          -7.23011,
          -39.29156
        ],
        [
          -7.23005,
          -39.29203
        ],
        [
          -7.23003,
          -39.29215
        ],
        [
          -7.22994,
          -39.29292
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22979,
          -39.29419
        ],
        [
          -7.2299,
          -39.2938
        ],
        [
          -7.22996,
          -39.29336
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22974,
          -39.29459
        ],
        [
          -7.22969,
          -39.29497
        ],
        [
          -7.22962,
          -39.29563
        ],
        [
          -7.22958,
          -39.29654
        ],
        [
          -7.22957,
          -39.2969
        ],
        [
          -7.22957,
          -39.29714
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29728
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22953,
          -39.29741
        ],
        [
          -7.22943,
          -39.29767
        ],
        [
          -7.22921,
          -39.29833
        ],
        [
          -7.22907,
          -39.29872
        ],
        [
          -7.2289,
          -39.29917
        ],
        [
          -7.22881,
          -39.29942
        ],
        [
          -7.22836,
          -39.30064
        ],
        [
          -7.22792,
          -39.30188
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.22763,
          -39.30266
        ],
        [
          -7.2274,
          -39.30329
        ],
        [
          -7.22715,
          -39.30401
        ],
        [
          -7.22701,
          -39.30441
        ],
        [
          -7.22668,
          -39.30533
        ],
        [
          -7.22647,
          -39.3059
        ],
        [
          -7.22633,
          -39.30628
        ],
        [
          -7.22627,
          -39.30646
        ],
        [
          -7.22617,
          -39.30676
        ],
        [
          -7.22603,
          -39.30715
        ],
        [
          -7.22568,
          -39.30814
        ],
        [
          -7.22521,
          -39.30969
        ],
        [
          -7.22492,
          -39.31062
        ],
        [
          -7.22471,
          -39.31128
        ],
        [
          -7.22457,
          -39.31167
        ],
        [
          -7.22422,
          -39.31289
        ],
        [
          -7.22379,
          -39.31428
        ],
        [
          -7.22358,
          -39.31491
        ],
        [
          -7.22314,
          -39.31617
        ],
        [
          -7.22311,
          -39.31639
        ],
        [
          -7.22309,
          -39.31718
        ],
        [
          -7.2231,
          -39.31787
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22309,
          -39.31896
        ],
        [
          -7.22308,
          -39.31989
        ],
        [
          -7.22309,
          -39.32102
        ],
        [
          -7.22303,
          -39.32129
        ],
        [
          -7.22299,
          -39.32134
        ],
        [
          -7.22299,
          -39.32141
        ],
        [
          -7.22303,
          -39.32146
        ],
        [
          -7.22308,
          -39.32149
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22344,
          -39.32138
        ],
        [
          -7.22481,
          -39.32157
        ],
        [
          -7.22576,
          -39.32171
        ],
        [
          -7.22623,
          -39.32167
        ],
        [
          -7.22617,
          -39.32208
        ],
        [
          -7.22568,
          -39.32216
        ],
        [
          -7.22563,
          -39.32219
        ],
        [
          -7.22559,
          -39.32229
        ],
        [
          -7.22564,
          -39.32266
        ],
        [
          -7.22572,
          -39.32308
        ],
        [
          -7.22584,
          -39.3237
        ],
        [
          -7.22605,
          -39.32405
        ],
        [
          -7.22695,
          -39.32539
        ],
        [
          -7.22719,
          -39.32578
        ],
        [
          -7.22726,
          -39.32588
        ],
        [
          -7.22702,
          -39.32609
        ],
        [
          -7.22654,
          -39.32626
        ],
        [
          -7.22627,
          -39.32634
        ],
        [
          -7.22558,
          -39.32642
        ],
        [
          -7.22493,
          -39.32638
        ],
        [
          -7.22465,
          -39.32632
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22294,
          -39.32589
        ],
        [
          -7.22235,
          -39.32572
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "Na volta do Cariri Shopping para o conjunto, o trajeto segue pela Av. Castelo Branco e faz 27 paradas."
    },
    "toPraca": {
      "stopsCount": 43,
      "distanceKm": 15.18,
      "busDurationMin": 55,
      "totalDoorToDoorMin": 57,
      "alightingStop": "R S Pedro, 281",
      "corridors": [
        "Conj. Padre Cícero",
        "Av. Castelo Branco",
        "Rodoviária",
        "Hospital Regional",
        "Cariri Shopping",
        "Rua das Flores",
        "Rua São Pedro (Praça Pe. Cícero)"
      ],
      "stops": [
        {
          "n": 1,
          "name": "ESCOLA CONJUNTO PE CICERO 01",
          "coords": [
            -7.253453,
            -39.258067
          ]
        },
        {
          "n": 2,
          "name": "AO LADO ESCOLA CONJUNTO PE CICERO 02",
          "coords": [
            -7.254536,
            -39.25661
          ]
        },
        {
          "n": 3,
          "name": "R AURELIANO PEREIRA DA SILVA 169",
          "coords": [
            -7.253775,
            -39.255929
          ]
        },
        {
          "n": 4,
          "name": "R AURELIANO PEREIRA DA SILVA 419",
          "coords": [
            -7.252661,
            -39.257865
          ]
        },
        {
          "n": 5,
          "name": "R AURELIANO PEREIRA DA SILVA 655",
          "coords": [
            -7.251338,
            -39.260159
          ]
        },
        {
          "n": 6,
          "name": "R SEVERINO DO CARMO 05",
          "coords": [
            -7.249464,
            -39.259751
          ]
        },
        {
          "n": 7,
          "name": "R SEVERINO DO CARMO 04",
          "coords": [
            -7.248717,
            -39.261017
          ]
        },
        {
          "n": 8,
          "name": "R SEVERINO DO CARMO 03",
          "coords": [
            -7.247781,
            -39.262648
          ]
        },
        {
          "n": 9,
          "name": "R SEVERINO DO CARMO 02",
          "coords": [
            -7.246583,
            -39.264681
          ]
        },
        {
          "n": 10,
          "name": "R SEVERINO DO CARMO 01",
          "coords": [
            -7.245751,
            -39.266118
          ]
        },
        {
          "n": 11,
          "name": "CT DO GUARANI",
          "coords": [
            -7.244708,
            -39.267132
          ]
        },
        {
          "n": 12,
          "name": "LOTEAMENTO OASSIS 01",
          "coords": [
            -7.242417,
            -39.266424
          ]
        },
        {
          "n": 13,
          "name": "Rua Onofre Antônio Landim,1004",
          "coords": [
            -7.240405,
            -39.269063
          ]
        },
        {
          "n": 14,
          "name": "Rua Onofre Antônio Landim,856",
          "coords": [
            -7.237936,
            -39.273221
          ]
        },
        {
          "n": 15,
          "name": "Rua José Antônio Severino,176",
          "coords": [
            -7.234423,
            -39.276861
          ]
        },
        {
          "n": 16,
          "name": "Rua Fausto Pessoa dos Santos, 38",
          "coords": [
            -7.232997,
            -39.278955
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 19,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 20,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 21,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 22,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 23,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 24,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 25,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 26,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 27,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 28,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 29,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 30,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 31,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 32,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 33,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 34,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 35,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 36,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        },
        {
          "n": 37,
          "name": "Av Castelo B. - Quartel da PM",
          "coords": [
            -7.223212,
            -39.320559
          ]
        },
        {
          "n": 38,
          "name": "R DAS FLORES Pousada Tereza",
          "coords": [
            -7.222415,
            -39.318749
          ]
        },
        {
          "n": 39,
          "name": "R S Pedro,  230",
          "coords": [
            -7.219254,
            -39.318899
          ]
        },
        {
          "n": 40,
          "name": "R S Pedro, 1941",
          "coords": [
            -7.216083,
            -39.318337
          ]
        },
        {
          "n": 41,
          "name": "R S Pedro, 1429",
          "coords": [
            -7.211614,
            -39.317633
          ]
        },
        {
          "n": 42,
          "name": "R S Pedro, 1107",
          "coords": [
            -7.208832,
            -39.317743
          ]
        },
        {
          "n": 43,
          "name": "R S Pedro,  651",
          "coords": [
            -7.204876,
            -39.317933
          ]
        },
        {
          "n": 44,
          "name": "R S Pedro, 281",
          "coords": [
            -7.201795,
            -39.317102
          ]
        }
      ],
      "geometry": [
        [
          -7.25346,
          -39.25806
        ],
        [
          -7.25451,
          -39.2566
        ],
        [
          -7.25525,
          -39.25488
        ],
        [
          -7.25486,
          -39.25467
        ],
        [
          -7.25459,
          -39.25452
        ],
        [
          -7.25278,
          -39.25765
        ],
        [
          -7.25185,
          -39.25921
        ],
        [
          -7.25128,
          -39.26017
        ],
        [
          -7.25024,
          -39.25976
        ],
        [
          -7.24961,
          -39.25944
        ],
        [
          -7.24944,
          -39.25972
        ],
        [
          -7.24895,
          -39.26057
        ],
        [
          -7.24818,
          -39.26185
        ],
        [
          -7.24774,
          -39.26262
        ],
        [
          -7.24721,
          -39.2635
        ],
        [
          -7.24608,
          -39.26549
        ],
        [
          -7.24536,
          -39.2667
        ],
        [
          -7.24504,
          -39.26727
        ],
        [
          -7.24376,
          -39.26686
        ],
        [
          -7.2426,
          -39.26654
        ],
        [
          -7.24214,
          -39.2664
        ],
        [
          -7.2416,
          -39.26695
        ],
        [
          -7.24075,
          -39.26841
        ],
        [
          -7.24038,
          -39.26904
        ],
        [
          -7.23979,
          -39.27002
        ],
        [
          -7.23877,
          -39.27177
        ],
        [
          -7.23809,
          -39.27293
        ],
        [
          -7.23773,
          -39.27356
        ],
        [
          -7.2371,
          -39.27468
        ],
        [
          -7.23667,
          -39.27527
        ],
        [
          -7.23623,
          -39.27512
        ],
        [
          -7.23552,
          -39.27489
        ],
        [
          -7.23321,
          -39.27896
        ],
        [
          -7.23255,
          -39.27897
        ],
        [
          -7.23116,
          -39.27898
        ],
        [
          -7.23112,
          -39.28071
        ],
        [
          -7.23112,
          -39.28125
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23121,
          -39.28229
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23114,
          -39.28325
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23098,
          -39.28472
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23081,
          -39.286
        ],
        [
          -7.22987,
          -39.28547
        ],
        [
          -7.23045,
          -39.28553
        ],
        [
          -7.23082,
          -39.286
        ],
        [
          -7.2307,
          -39.28705
        ],
        [
          -7.23051,
          -39.2886
        ],
        [
          -7.23044,
          -39.28919
        ],
        [
          -7.23038,
          -39.28959
        ],
        [
          -7.2302,
          -39.29086
        ],
        [
          -7.23011,
          -39.29156
        ],
        [
          -7.23005,
          -39.29203
        ],
        [
          -7.22994,
          -39.29292
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22979,
          -39.29419
        ],
        [
          -7.22991,
          -39.29372
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22979,
          -39.29419
        ],
        [
          -7.22969,
          -39.29497
        ],
        [
          -7.22961,
          -39.29579
        ],
        [
          -7.22958,
          -39.29671
        ],
        [
          -7.22958,
          -39.29707
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29728
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22943,
          -39.29767
        ],
        [
          -7.22921,
          -39.29833
        ],
        [
          -7.22907,
          -39.29872
        ],
        [
          -7.2289,
          -39.29917
        ],
        [
          -7.22861,
          -39.30001
        ],
        [
          -7.22815,
          -39.30125
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.22761,
          -39.30271
        ],
        [
          -7.22726,
          -39.3037
        ],
        [
          -7.22705,
          -39.3043
        ],
        [
          -7.22668,
          -39.30533
        ],
        [
          -7.22647,
          -39.3059
        ],
        [
          -7.22633,
          -39.30628
        ],
        [
          -7.2262,
          -39.30667
        ],
        [
          -7.22603,
          -39.30715
        ],
        [
          -7.22568,
          -39.30814
        ],
        [
          -7.22521,
          -39.30969
        ],
        [
          -7.2248,
          -39.311
        ],
        [
          -7.22457,
          -39.31167
        ],
        [
          -7.22422,
          -39.31289
        ],
        [
          -7.22366,
          -39.31468
        ],
        [
          -7.22336,
          -39.31556
        ],
        [
          -7.22312,
          -39.31629
        ],
        [
          -7.22309,
          -39.31685
        ],
        [
          -7.2231,
          -39.31787
        ],
        [
          -7.22309,
          -39.31891
        ],
        [
          -7.22309,
          -39.31937
        ],
        [
          -7.22309,
          -39.32102
        ],
        [
          -7.22303,
          -39.32129
        ],
        [
          -7.22299,
          -39.32134
        ],
        [
          -7.22301,
          -39.32144
        ],
        [
          -7.22308,
          -39.32149
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22375,
          -39.32142
        ],
        [
          -7.22509,
          -39.32162
        ],
        [
          -7.22605,
          -39.32168
        ],
        [
          -7.22628,
          -39.32207
        ],
        [
          -7.22568,
          -39.32216
        ],
        [
          -7.2256,
          -39.32223
        ],
        [
          -7.22561,
          -39.32243
        ],
        [
          -7.22572,
          -39.32308
        ],
        [
          -7.22584,
          -39.3237
        ],
        [
          -7.22605,
          -39.32405
        ],
        [
          -7.22698,
          -39.32544
        ],
        [
          -7.22726,
          -39.32588
        ],
        [
          -7.22702,
          -39.32609
        ],
        [
          -7.22654,
          -39.32626
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22528,
          -39.32641
        ],
        [
          -7.22467,
          -39.32632
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22305,
          -39.32313
        ],
        [
          -7.22318,
          -39.32263
        ],
        [
          -7.22321,
          -39.32212
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22321,
          -39.32135
        ],
        [
          -7.22318,
          -39.32129
        ],
        [
          -7.2232,
          -39.31987
        ],
        [
          -7.22319,
          -39.31889
        ],
        [
          -7.22254,
          -39.31879
        ],
        [
          -7.22187,
          -39.31867
        ],
        [
          -7.22179,
          -39.31917
        ],
        [
          -7.22158,
          -39.3192
        ],
        [
          -7.22138,
          -39.31922
        ],
        [
          -7.22041,
          -39.3191
        ],
        [
          -7.21998,
          -39.31906
        ],
        [
          -7.21925,
          -39.31894
        ],
        [
          -7.21824,
          -39.31874
        ],
        [
          -7.21659,
          -39.31843
        ],
        [
          -7.21608,
          -39.31834
        ],
        [
          -7.21405,
          -39.31796
        ],
        [
          -7.21161,
          -39.31764
        ],
        [
          -7.20977,
          -39.3177
        ],
        [
          -7.20883,
          -39.31775
        ],
        [
          -7.20795,
          -39.31777
        ],
        [
          -7.20624,
          -39.31787
        ],
        [
          -7.20488,
          -39.31795
        ],
        [
          -7.20403,
          -39.31801
        ],
        [
          -7.20224,
          -39.3173
        ],
        [
          -7.20178,
          -39.31713
        ]
      ],
      "returnNote": "O retorno sai do Terminal São Miguel (Centro), passa pelo Shopping e volta ao conjunto pelo mesmo corredor."
    },
    "practicalSummary": "É a linha com menor frequência entre os conjuntos atendidos: apenas 12 saídas por dia útil do conjunto (05h55 às 19h05), com vãos de até 1h50 entre viagens. Como contorna a Rodoviária, o Hospital Regional e o Shopping antes de entrar no Centro, a viagem até a Praça Pe. Cícero soma 43 paradas e cerca de 55–60 min no ônibus — compatível com o relato de moradores (40 min a quase 1h).",
    "alternativeNote": "Horários de pico como 05h55 e 06h45 concentram a maior demanda; depois das 06h45, o ônibus seguinte só sai às 08h35."
  },
  {
    "complexId": "nossa-senhora-das-dores",
    "hasRegularBus": true,
    "lineCode": "7001",
    "lineName": "Centro / Novo Juazeiro — Via Conj. Betolândia",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "R Principal 01 Conj NS Das Dores",
    "boardingCoords": [
      -7.224494,
      -39.27987
    ],
    "walkMeters": 180,
    "walkStraightMeters": 170,
    "walkMin": 2,
    "walkGeometry": [
      [
        -7.223,
        -39.28004
      ],
      [
        -7.22406,
        -39.27983
      ],
      [
        -7.2245,
        -39.27976
      ],
      [
        -7.2245,
        -39.27987
      ]
    ],
    "schedule": {
      "weekdayTrips": 22,
      "saturdayTrips": 13,
      "sundayTrips": 8,
      "firstDeparture": "05:20",
      "lastDeparture": "21:40",
      "minGapMin": 25,
      "maxGapMin": 75,
      "avgGapMin": 47,
      "avgWaitMin": 24,
      "departuresWeekday": [
        "05:20",
        "05:50",
        "06:15",
        "06:40",
        "07:20",
        "07:55",
        "08:30",
        "09:05",
        "10:00",
        "11:15",
        "12:20",
        "13:10",
        "14:20",
        "15:00",
        "16:05",
        "17:10",
        "18:00",
        "18:30",
        "19:30",
        "20:25",
        "21:05",
        "21:40"
      ]
    },
    "toShopping": {
      "stopsCount": 24,
      "distanceKm": 9.13,
      "busDurationMin": 30,
      "totalDoorToDoorMin": 32,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Conj. N. Sra. das Dores",
        "Av. Manoel Coelho de Alencar",
        "Av. Castelo Branco",
        "Rodoviária",
        "Hospital Regional",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Principal 01 Conj NS Das Dores",
          "coords": [
            -7.224494,
            -39.27987
          ]
        },
        {
          "n": 2,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 3,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 4,
          "name": "R Principal 04 - PAC VOLTA",
          "coords": [
            -7.224388,
            -39.280426
          ]
        },
        {
          "n": 5,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 6,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 7,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 8,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 9,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 10,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 11,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 12,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 13,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 14,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 15,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 16,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 19,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 20,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 21,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 22,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 23,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 24,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 25,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.2245,
          -39.27987
        ],
        [
          -7.22452,
          -39.27949
        ],
        [
          -7.22455,
          -39.27904
        ],
        [
          -7.22462,
          -39.27824
        ],
        [
          -7.22462,
          -39.27811
        ],
        [
          -7.22463,
          -39.27804
        ],
        [
          -7.22466,
          -39.27764
        ],
        [
          -7.22615,
          -39.27788
        ],
        [
          -7.22597,
          -39.27839
        ],
        [
          -7.22588,
          -39.27839
        ],
        [
          -7.22555,
          -39.27843
        ],
        [
          -7.22459,
          -39.27857
        ],
        [
          -7.22452,
          -39.27949
        ],
        [
          -7.22449,
          -39.27997
        ],
        [
          -7.22445,
          -39.28041
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22441,
          -39.28099
        ],
        [
          -7.22522,
          -39.28105
        ],
        [
          -7.22595,
          -39.281
        ],
        [
          -7.22721,
          -39.28081
        ],
        [
          -7.22597,
          -39.28088
        ],
        [
          -7.22595,
          -39.281
        ],
        [
          -7.22798,
          -39.28086
        ],
        [
          -7.22951,
          -39.28082
        ],
        [
          -7.23112,
          -39.28077
        ],
        [
          -7.23112,
          -39.28125
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23121,
          -39.28229
        ],
        [
          -7.23121,
          -39.28168
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23114,
          -39.28297
        ],
        [
          -7.23112,
          -39.28346
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23101,
          -39.28442
        ],
        [
          -7.23092,
          -39.2852
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23081,
          -39.286
        ],
        [
          -7.22982,
          -39.28588
        ],
        [
          -7.22987,
          -39.28547
        ],
        [
          -7.23045,
          -39.28553
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23077,
          -39.28643
        ],
        [
          -7.2307,
          -39.28705
        ],
        [
          -7.23053,
          -39.28837
        ],
        [
          -7.23051,
          -39.2886
        ],
        [
          -7.23044,
          -39.28919
        ],
        [
          -7.23038,
          -39.28959
        ],
        [
          -7.23029,
          -39.29017
        ],
        [
          -7.2302,
          -39.29086
        ],
        [
          -7.23014,
          -39.29125
        ],
        [
          -7.23007,
          -39.29193
        ],
        [
          -7.23005,
          -39.29203
        ],
        [
          -7.22999,
          -39.29255
        ],
        [
          -7.22992,
          -39.29313
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22979,
          -39.29419
        ],
        [
          -7.22986,
          -39.2942
        ],
        [
          -7.22991,
          -39.29372
        ],
        [
          -7.22996,
          -39.29336
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22974,
          -39.29459
        ],
        [
          -7.22969,
          -39.29497
        ],
        [
          -7.22962,
          -39.29563
        ],
        [
          -7.22961,
          -39.29579
        ],
        [
          -7.22958,
          -39.29671
        ],
        [
          -7.22958,
          -39.29707
        ],
        [
          -7.22957,
          -39.29714
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29725
        ],
        [
          -7.22954,
          -39.29731
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22947,
          -39.29755
        ],
        [
          -7.22932,
          -39.29798
        ],
        [
          -7.22921,
          -39.29833
        ],
        [
          -7.22907,
          -39.29872
        ],
        [
          -7.22904,
          -39.29881
        ],
        [
          -7.22884,
          -39.29934
        ],
        [
          -7.22881,
          -39.29942
        ],
        [
          -7.22836,
          -39.30064
        ],
        [
          -7.22792,
          -39.30188
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.22763,
          -39.30266
        ],
        [
          -7.22761,
          -39.30271
        ],
        [
          -7.22726,
          -39.3037
        ],
        [
          -7.22715,
          -39.30401
        ],
        [
          -7.22701,
          -39.30441
        ],
        [
          -7.22668,
          -39.30533
        ],
        [
          -7.22653,
          -39.30573
        ],
        [
          -7.2264,
          -39.30611
        ],
        [
          -7.22633,
          -39.30628
        ],
        [
          -7.2262,
          -39.30667
        ],
        [
          -7.22605,
          -39.30708
        ],
        [
          -7.22603,
          -39.30715
        ],
        [
          -7.22568,
          -39.30814
        ],
        [
          -7.22546,
          -39.30889
        ],
        [
          -7.22501,
          -39.31035
        ],
        [
          -7.22492,
          -39.31062
        ],
        [
          -7.22471,
          -39.31128
        ],
        [
          -7.22438,
          -39.31233
        ],
        [
          -7.22422,
          -39.31289
        ],
        [
          -7.22379,
          -39.31428
        ],
        [
          -7.22366,
          -39.31468
        ],
        [
          -7.22336,
          -39.31556
        ],
        [
          -7.22314,
          -39.31617
        ],
        [
          -7.22311,
          -39.31639
        ],
        [
          -7.22309,
          -39.31718
        ],
        [
          -7.2231,
          -39.31764
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22309,
          -39.31891
        ],
        [
          -7.22309,
          -39.31937
        ],
        [
          -7.22308,
          -39.31989
        ],
        [
          -7.22309,
          -39.32102
        ],
        [
          -7.22303,
          -39.32129
        ],
        [
          -7.22301,
          -39.32131
        ],
        [
          -7.22299,
          -39.32137
        ],
        [
          -7.22299,
          -39.32141
        ],
        [
          -7.22303,
          -39.32146
        ],
        [
          -7.22314,
          -39.32148
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22344,
          -39.32138
        ],
        [
          -7.22375,
          -39.32142
        ],
        [
          -7.22509,
          -39.32162
        ],
        [
          -7.22576,
          -39.32171
        ],
        [
          -7.22623,
          -39.32167
        ],
        [
          -7.22617,
          -39.32208
        ],
        [
          -7.22581,
          -39.32214
        ],
        [
          -7.22563,
          -39.32219
        ],
        [
          -7.2256,
          -39.32223
        ],
        [
          -7.22561,
          -39.32243
        ],
        [
          -7.22564,
          -39.32266
        ],
        [
          -7.22572,
          -39.32308
        ],
        [
          -7.22584,
          -39.3237
        ],
        [
          -7.22586,
          -39.32372
        ],
        [
          -7.22684,
          -39.32522
        ],
        [
          -7.22695,
          -39.32539
        ],
        [
          -7.22719,
          -39.32578
        ],
        [
          -7.22726,
          -39.32588
        ],
        [
          -7.22702,
          -39.32609
        ],
        [
          -7.22654,
          -39.32626
        ],
        [
          -7.22653,
          -39.32626
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22558,
          -39.32642
        ],
        [
          -7.22493,
          -39.32638
        ],
        [
          -7.22465,
          -39.32632
        ],
        [
          -7.22406,
          -39.32617
        ],
        [
          -7.22294,
          -39.32589
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "Na volta, a linha 7001 entra primeiro pelo Brejo Seco antes de chegar à Betolândia."
    },
    "toPraca": {
      "stopsCount": 32,
      "distanceKm": 12.13,
      "busDurationMin": 39,
      "totalDoorToDoorMin": 41,
      "alightingStop": "R S Pedro, 281",
      "corridors": [
        "Conj. N. Sra. das Dores",
        "Av. Manoel Coelho de Alencar",
        "Av. Castelo Branco",
        "Rodoviária",
        "Cariri Shopping",
        "Rua das Flores",
        "Rua São Pedro (Praça Pe. Cícero)"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Principal 01 Conj NS Das Dores",
          "coords": [
            -7.224494,
            -39.27987
          ]
        },
        {
          "n": 2,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 3,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 4,
          "name": "R Principal 04 - PAC VOLTA",
          "coords": [
            -7.224388,
            -39.280426
          ]
        },
        {
          "n": 5,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 6,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 7,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 8,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 9,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 10,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 11,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 12,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 13,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 14,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 15,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 16,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 19,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 20,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 21,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 22,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 23,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 24,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 25,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        },
        {
          "n": 26,
          "name": "Av Castelo B. - Quartel da PM",
          "coords": [
            -7.223212,
            -39.320559
          ]
        },
        {
          "n": 27,
          "name": "R DAS FLORES Pousada Tereza",
          "coords": [
            -7.222415,
            -39.318749
          ]
        },
        {
          "n": 28,
          "name": "R S Pedro,  230",
          "coords": [
            -7.219254,
            -39.318899
          ]
        },
        {
          "n": 29,
          "name": "R S Pedro, 1941",
          "coords": [
            -7.216083,
            -39.318337
          ]
        },
        {
          "n": 30,
          "name": "R S Pedro, 1429",
          "coords": [
            -7.211614,
            -39.317633
          ]
        },
        {
          "n": 31,
          "name": "R S Pedro, 1107",
          "coords": [
            -7.208832,
            -39.317743
          ]
        },
        {
          "n": 32,
          "name": "R S Pedro,  651",
          "coords": [
            -7.204876,
            -39.317933
          ]
        },
        {
          "n": 33,
          "name": "R S Pedro, 281",
          "coords": [
            -7.201795,
            -39.317102
          ]
        }
      ],
      "geometry": [
        [
          -7.2245,
          -39.27987
        ],
        [
          -7.22452,
          -39.27949
        ],
        [
          -7.22459,
          -39.27857
        ],
        [
          -7.22462,
          -39.27811
        ],
        [
          -7.22463,
          -39.27804
        ],
        [
          -7.2263,
          -39.2774
        ],
        [
          -7.22604,
          -39.27818
        ],
        [
          -7.22588,
          -39.27839
        ],
        [
          -7.22555,
          -39.27843
        ],
        [
          -7.22455,
          -39.27904
        ],
        [
          -7.2245,
          -39.27976
        ],
        [
          -7.22445,
          -39.28041
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22437,
          -39.28112
        ],
        [
          -7.22595,
          -39.281
        ],
        [
          -7.22721,
          -39.28081
        ],
        [
          -7.22597,
          -39.28088
        ],
        [
          -7.2272,
          -39.28089
        ],
        [
          -7.22951,
          -39.28082
        ],
        [
          -7.23112,
          -39.28077
        ],
        [
          -7.23112,
          -39.28167
        ],
        [
          -7.23122,
          -39.28258
        ],
        [
          -7.23121,
          -39.28168
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23114,
          -39.28325
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23101,
          -39.28442
        ],
        [
          -7.23092,
          -39.2852
        ],
        [
          -7.23082,
          -39.286
        ],
        [
          -7.22982,
          -39.28588
        ],
        [
          -7.22987,
          -39.28547
        ],
        [
          -7.23045,
          -39.28553
        ],
        [
          -7.23082,
          -39.286
        ],
        [
          -7.2307,
          -39.28705
        ],
        [
          -7.23053,
          -39.28837
        ],
        [
          -7.23049,
          -39.28878
        ],
        [
          -7.23043,
          -39.28929
        ],
        [
          -7.23029,
          -39.29017
        ],
        [
          -7.2302,
          -39.29086
        ],
        [
          -7.23011,
          -39.29156
        ],
        [
          -7.23005,
          -39.29203
        ],
        [
          -7.22999,
          -39.29255
        ],
        [
          -7.22992,
          -39.29313
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22986,
          -39.2942
        ],
        [
          -7.22991,
          -39.29372
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22979,
          -39.29419
        ],
        [
          -7.22969,
          -39.29497
        ],
        [
          -7.22962,
          -39.29563
        ],
        [
          -7.22958,
          -39.29654
        ],
        [
          -7.22957,
          -39.2969
        ],
        [
          -7.22957,
          -39.29714
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29728
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22947,
          -39.29755
        ],
        [
          -7.22932,
          -39.29798
        ],
        [
          -7.22913,
          -39.29856
        ],
        [
          -7.22904,
          -39.29881
        ],
        [
          -7.22884,
          -39.29934
        ],
        [
          -7.22861,
          -39.30001
        ],
        [
          -7.22815,
          -39.30125
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.22763,
          -39.30266
        ],
        [
          -7.2274,
          -39.30329
        ],
        [
          -7.22715,
          -39.30401
        ],
        [
          -7.22701,
          -39.30441
        ],
        [
          -7.22668,
          -39.30533
        ],
        [
          -7.22647,
          -39.3059
        ],
        [
          -7.22633,
          -39.30628
        ],
        [
          -7.2262,
          -39.30667
        ],
        [
          -7.22605,
          -39.30708
        ],
        [
          -7.22591,
          -39.30748
        ],
        [
          -7.22546,
          -39.30889
        ],
        [
          -7.22492,
          -39.31062
        ],
        [
          -7.22471,
          -39.31128
        ],
        [
          -7.22438,
          -39.31233
        ],
        [
          -7.2242,
          -39.31305
        ],
        [
          -7.22366,
          -39.31468
        ],
        [
          -7.22336,
          -39.31556
        ],
        [
          -7.22312,
          -39.31629
        ],
        [
          -7.22309,
          -39.31685
        ],
        [
          -7.2231,
          -39.31764
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22309,
          -39.31896
        ],
        [
          -7.22308,
          -39.31989
        ],
        [
          -7.22309,
          -39.32102
        ],
        [
          -7.22303,
          -39.32129
        ],
        [
          -7.22299,
          -39.32134
        ],
        [
          -7.22299,
          -39.32141
        ],
        [
          -7.22303,
          -39.32146
        ],
        [
          -7.22314,
          -39.32148
        ],
        [
          -7.22321,
          -39.32141
        ],
        [
          -7.22375,
          -39.32142
        ],
        [
          -7.22509,
          -39.32162
        ],
        [
          -7.22605,
          -39.32168
        ],
        [
          -7.22628,
          -39.32207
        ],
        [
          -7.22581,
          -39.32214
        ],
        [
          -7.22563,
          -39.32219
        ],
        [
          -7.22559,
          -39.32229
        ],
        [
          -7.22564,
          -39.32266
        ],
        [
          -7.22572,
          -39.32308
        ],
        [
          -7.22584,
          -39.3237
        ],
        [
          -7.22605,
          -39.32405
        ],
        [
          -7.22695,
          -39.32539
        ],
        [
          -7.22719,
          -39.32578
        ],
        [
          -7.2273,
          -39.32594
        ],
        [
          -7.22682,
          -39.32615
        ],
        [
          -7.22653,
          -39.32626
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22528,
          -39.32641
        ],
        [
          -7.22467,
          -39.32632
        ],
        [
          -7.22406,
          -39.32617
        ],
        [
          -7.22294,
          -39.32589
        ],
        [
          -7.22235,
          -39.32572
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22305,
          -39.32313
        ],
        [
          -7.22318,
          -39.32263
        ],
        [
          -7.22321,
          -39.32212
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22321,
          -39.32138
        ],
        [
          -7.2232,
          -39.32132
        ],
        [
          -7.22319,
          -39.32056
        ],
        [
          -7.2232,
          -39.31939
        ],
        [
          -7.22319,
          -39.31889
        ],
        [
          -7.22254,
          -39.31879
        ],
        [
          -7.22187,
          -39.31867
        ],
        [
          -7.22185,
          -39.31917
        ],
        [
          -7.22174,
          -39.31917
        ],
        [
          -7.22147,
          -39.31922
        ],
        [
          -7.22073,
          -39.31913
        ],
        [
          -7.22032,
          -39.31909
        ],
        [
          -7.21998,
          -39.31906
        ],
        [
          -7.21925,
          -39.31894
        ],
        [
          -7.21824,
          -39.31874
        ],
        [
          -7.21667,
          -39.31844
        ],
        [
          -7.21652,
          -39.31841
        ],
        [
          -7.21547,
          -39.31824
        ],
        [
          -7.21308,
          -39.31778
        ],
        [
          -7.21161,
          -39.31764
        ],
        [
          -7.20977,
          -39.3177
        ],
        [
          -7.20883,
          -39.31775
        ],
        [
          -7.20795,
          -39.31777
        ],
        [
          -7.20724,
          -39.3178
        ],
        [
          -7.20537,
          -39.31792
        ],
        [
          -7.2041,
          -39.31801
        ],
        [
          -7.20396,
          -39.318
        ],
        [
          -7.20224,
          -39.3173
        ],
        [
          -7.20178,
          -39.31713
        ]
      ]
    },
    "practicalSummary": "O ônibus passa dentro do próprio residencial (Rua Principal), exigindo apenas ~2 min de caminhada. Como a Betolândia fica no fim da alça do bairro, a saída pela Av. Castelo Branco é direta até o Cariri Shopping (24 paradas) e segue pela Rua São Pedro até a Praça Pe. Cícero (32 paradas).",
    "alternativeNote": "Também é possível caminhar ~920 m até a Av. Castelo Branco (4890) para pegar a linha 7001.1."
  },
  {
    "complexId": "sao-sebastiao",
    "hasRegularBus": true,
    "lineCode": "7001",
    "lineName": "Centro / Novo Juazeiro — Via Conj. Betolândia",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "R Manuel Piraca,  415",
    "boardingCoords": [
      -7.232228,
      -39.273549
    ],
    "walkMeters": 700,
    "walkStraightMeters": 340,
    "walkMin": 9,
    "walkGeometry": [
      [
        -7.22992,
        -39.2714
      ],
      [
        -7.22977,
        -39.27165
      ],
      [
        -7.22954,
        -39.27205
      ],
      [
        -7.22932,
        -39.27243
      ],
      [
        -7.22907,
        -39.27286
      ],
      [
        -7.23042,
        -39.27361
      ],
      [
        -7.23075,
        -39.27382
      ],
      [
        -7.23098,
        -39.27343
      ],
      [
        -7.23138,
        -39.27276
      ],
      [
        -7.23243,
        -39.27329
      ],
      [
        -7.23227,
        -39.27357
      ]
    ],
    "schedule": {
      "weekdayTrips": 22,
      "saturdayTrips": 13,
      "sundayTrips": 8,
      "firstDeparture": "05:20",
      "lastDeparture": "21:40",
      "minGapMin": 25,
      "maxGapMin": 75,
      "avgGapMin": 47,
      "avgWaitMin": 24,
      "departuresWeekday": [
        "05:20",
        "05:50",
        "06:15",
        "06:40",
        "07:20",
        "07:55",
        "08:30",
        "09:05",
        "10:00",
        "11:15",
        "12:20",
        "13:10",
        "14:20",
        "15:00",
        "16:05",
        "17:10",
        "18:00",
        "18:30",
        "19:30",
        "20:25",
        "21:05",
        "21:40"
      ]
    },
    "toShopping": {
      "stopsCount": 30,
      "distanceKm": 10.68,
      "busDurationMin": 36,
      "totalDoorToDoorMin": 45,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Rua Manuel Piraca (Brejo Seco)",
        "Alça Betolândia / N. Sra. das Dores",
        "Av. Castelo Branco",
        "Rodoviária",
        "Hospital Regional",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Manuel Piraca,  415",
          "coords": [
            -7.232228,
            -39.273549
          ]
        },
        {
          "n": 2,
          "name": "R Manuel Piraca, 361",
          "coords": [
            -7.231633,
            -39.274786
          ]
        },
        {
          "n": 3,
          "name": "R Manuel Piraca, 260",
          "coords": [
            -7.230892,
            -39.276454
          ]
        },
        {
          "n": 4,
          "name": "R Manuel Piraca,  417",
          "coords": [
            -7.229471,
            -39.279031
          ]
        },
        {
          "n": 5,
          "name": "R Manuel Piraca X Av Manoel Costa",
          "coords": [
            -7.229488,
            -39.280726
          ]
        },
        {
          "n": 6,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 7,
          "name": "R Principal 01 Conj NS Das Dores",
          "coords": [
            -7.224494,
            -39.27987
          ]
        },
        {
          "n": 8,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 9,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 10,
          "name": "R Principal 04 - PAC VOLTA",
          "coords": [
            -7.224388,
            -39.280426
          ]
        },
        {
          "n": 11,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 12,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 13,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 14,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 15,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 16,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 19,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 20,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 21,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 22,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 23,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 24,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 25,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 26,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 27,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 28,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 29,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 30,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 31,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.23227,
          -39.27357
        ],
        [
          -7.23198,
          -39.27411
        ],
        [
          -7.23164,
          -39.27479
        ],
        [
          -7.23163,
          -39.27481
        ],
        [
          -7.23146,
          -39.27515
        ],
        [
          -7.23111,
          -39.27594
        ],
        [
          -7.23091,
          -39.27646
        ],
        [
          -7.23065,
          -39.27711
        ],
        [
          -7.23042,
          -39.27752
        ],
        [
          -7.23028,
          -39.27773
        ],
        [
          -7.22947,
          -39.27897
        ],
        [
          -7.22948,
          -39.27984
        ],
        [
          -7.22949,
          -39.28073
        ],
        [
          -7.22799,
          -39.28077
        ],
        [
          -7.22637,
          -39.28086
        ],
        [
          -7.22523,
          -39.28093
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22445,
          -39.28041
        ],
        [
          -7.2245,
          -39.27987
        ],
        [
          -7.22452,
          -39.27949
        ],
        [
          -7.22459,
          -39.27857
        ],
        [
          -7.22462,
          -39.27811
        ],
        [
          -7.22463,
          -39.27804
        ],
        [
          -7.22466,
          -39.27764
        ],
        [
          -7.22615,
          -39.27788
        ],
        [
          -7.22597,
          -39.27839
        ],
        [
          -7.22577,
          -39.2784
        ],
        [
          -7.22555,
          -39.27843
        ],
        [
          -7.22455,
          -39.27904
        ],
        [
          -7.2245,
          -39.27976
        ],
        [
          -7.22445,
          -39.28041
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22441,
          -39.28099
        ],
        [
          -7.22522,
          -39.28105
        ],
        [
          -7.2272,
          -39.28089
        ],
        [
          -7.22637,
          -39.28086
        ],
        [
          -7.22595,
          -39.281
        ],
        [
          -7.2272,
          -39.28089
        ],
        [
          -7.22951,
          -39.28082
        ],
        [
          -7.23112,
          -39.28077
        ],
        [
          -7.23112,
          -39.28167
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23121,
          -39.28229
        ],
        [
          -7.23112,
          -39.28167
        ],
        [
          -7.23114,
          -39.28297
        ],
        [
          -7.23112,
          -39.28346
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23101,
          -39.28442
        ],
        [
          -7.23092,
          -39.2852
        ],
        [
          -7.23082,
          -39.286
        ],
        [
          -7.22982,
          -39.28588
        ],
        [
          -7.22984,
          -39.28566
        ],
        [
          -7.23027,
          -39.28551
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23077,
          -39.28643
        ],
        [
          -7.23058,
          -39.28797
        ],
        [
          -7.23053,
          -39.28837
        ],
        [
          -7.23049,
          -39.28878
        ],
        [
          -7.23043,
          -39.28929
        ],
        [
          -7.23029,
          -39.29017
        ],
        [
          -7.2302,
          -39.29086
        ],
        [
          -7.23014,
          -39.29125
        ],
        [
          -7.23007,
          -39.29193
        ],
        [
          -7.23003,
          -39.29215
        ],
        [
          -7.22994,
          -39.29292
        ],
        [
          -7.22992,
          -39.29313
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22986,
          -39.2942
        ],
        [
          -7.22991,
          -39.29372
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22974,
          -39.29459
        ],
        [
          -7.22964,
          -39.2954
        ],
        [
          -7.22961,
          -39.29579
        ],
        [
          -7.22958,
          -39.29671
        ],
        [
          -7.22957,
          -39.2969
        ],
        [
          -7.22957,
          -39.29714
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29728
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22953,
          -39.29741
        ],
        [
          -7.22943,
          -39.29767
        ],
        [
          -7.22921,
          -39.29833
        ],
        [
          -7.22907,
          -39.29872
        ],
        [
          -7.2289,
          -39.29917
        ],
        [
          -7.22884,
          -39.29934
        ],
        [
          -7.22861,
          -39.30001
        ],
        [
          -7.22815,
          -39.30125
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.2277,
          -39.30249
        ],
        [
          -7.22761,
          -39.30271
        ],
        [
          -7.22726,
          -39.3037
        ],
        [
          -7.22705,
          -39.3043
        ],
        [
          -7.22699,
          -39.30449
        ],
        [
          -7.22668,
          -39.30533
        ],
        [
          -7.22647,
          -39.3059
        ],
        [
          -7.22633,
          -39.30628
        ],
        [
          -7.2262,
          -39.30667
        ],
        [
          -7.22605,
          -39.30708
        ],
        [
          -7.22603,
          -39.30715
        ],
        [
          -7.22568,
          -39.30814
        ],
        [
          -7.22521,
          -39.30969
        ],
        [
          -7.22492,
          -39.31062
        ],
        [
          -7.22471,
          -39.31128
        ],
        [
          -7.22457,
          -39.31167
        ],
        [
          -7.22422,
          -39.31289
        ],
        [
          -7.22379,
          -39.31428
        ],
        [
          -7.22358,
          -39.31491
        ],
        [
          -7.22314,
          -39.31617
        ],
        [
          -7.22312,
          -39.31629
        ],
        [
          -7.22309,
          -39.31685
        ],
        [
          -7.2231,
          -39.31764
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22309,
          -39.31891
        ],
        [
          -7.22309,
          -39.31937
        ],
        [
          -7.22308,
          -39.32035
        ],
        [
          -7.22308,
          -39.32113
        ],
        [
          -7.22301,
          -39.32131
        ],
        [
          -7.22299,
          -39.32134
        ],
        [
          -7.22299,
          -39.32141
        ],
        [
          -7.22303,
          -39.32146
        ],
        [
          -7.22314,
          -39.32148
        ],
        [
          -7.22321,
          -39.32141
        ],
        [
          -7.22344,
          -39.32138
        ],
        [
          -7.22481,
          -39.32157
        ],
        [
          -7.22576,
          -39.32171
        ],
        [
          -7.22623,
          -39.32167
        ],
        [
          -7.22617,
          -39.32208
        ],
        [
          -7.22581,
          -39.32214
        ],
        [
          -7.22563,
          -39.32219
        ],
        [
          -7.22559,
          -39.32229
        ],
        [
          -7.22564,
          -39.32266
        ],
        [
          -7.22572,
          -39.32308
        ],
        [
          -7.22581,
          -39.32364
        ],
        [
          -7.22586,
          -39.32372
        ],
        [
          -7.22684,
          -39.32522
        ],
        [
          -7.22698,
          -39.32544
        ],
        [
          -7.22719,
          -39.32578
        ],
        [
          -7.2273,
          -39.32594
        ],
        [
          -7.22682,
          -39.32615
        ],
        [
          -7.22653,
          -39.32626
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22558,
          -39.32642
        ],
        [
          -7.22493,
          -39.32638
        ],
        [
          -7.22465,
          -39.32632
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22235,
          -39.32572
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "No trajeto do bairro ao Centro, a linha 7001 primeiro dá a volta no Conj. Betolândia antes de seguir pela Av. Castelo Branco."
    },
    "toPraca": {
      "stopsCount": 38,
      "distanceKm": 13.69,
      "busDurationMin": 45,
      "totalDoorToDoorMin": 54,
      "alightingStop": "R S Pedro, 281",
      "corridors": [
        "Rua Manuel Piraca (Brejo Seco)",
        "Alça Betolândia",
        "Av. Castelo Branco",
        "Rodoviária",
        "Cariri Shopping",
        "Rua São Pedro (Praça Pe. Cícero)"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Manuel Piraca,  415",
          "coords": [
            -7.232228,
            -39.273549
          ]
        },
        {
          "n": 2,
          "name": "R Manuel Piraca, 361",
          "coords": [
            -7.231633,
            -39.274786
          ]
        },
        {
          "n": 3,
          "name": "R Manuel Piraca, 260",
          "coords": [
            -7.230892,
            -39.276454
          ]
        },
        {
          "n": 4,
          "name": "R Manuel Piraca,  417",
          "coords": [
            -7.229471,
            -39.279031
          ]
        },
        {
          "n": 5,
          "name": "R Manuel Piraca X Av Manoel Costa",
          "coords": [
            -7.229488,
            -39.280726
          ]
        },
        {
          "n": 6,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 7,
          "name": "R Principal 01 Conj NS Das Dores",
          "coords": [
            -7.224494,
            -39.27987
          ]
        },
        {
          "n": 8,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 9,
          "name": "R Principal 02",
          "coords": [
            -7.224648,
            -39.278041
          ]
        },
        {
          "n": 10,
          "name": "R Principal 04 - PAC VOLTA",
          "coords": [
            -7.224388,
            -39.280426
          ]
        },
        {
          "n": 11,
          "name": "AV. MANOEL COELHO S/N",
          "coords": [
            -7.226366,
            -39.280841
          ]
        },
        {
          "n": 12,
          "name": "Av Castelo B.,  4717",
          "coords": [
            -7.231116,
            -39.281249
          ]
        },
        {
          "n": 13,
          "name": "Av Castelo B., 4455",
          "coords": [
            -7.231233,
            -39.282294
          ]
        },
        {
          "n": 14,
          "name": "Av . Castelo B., OP  4200",
          "coords": [
            -7.230805,
            -39.286013
          ]
        },
        {
          "n": 15,
          "name": "Av . Castelo B., 3855",
          "coords": [
            -7.230429,
            -39.28929
          ]
        },
        {
          "n": 16,
          "name": "AvCastelo B., 2375",
          "coords": [
            -7.230081,
            -39.292037
          ]
        },
        {
          "n": 17,
          "name": "Av Castelo B. -  Igreja M Jesus",
          "coords": [
            -7.229899,
            -39.293796
          ]
        },
        {
          "n": 18,
          "name": "Av Castelo B., OP  3050",
          "coords": [
            -7.229556,
            -39.296706
          ]
        },
        {
          "n": 19,
          "name": "AvCastelo B., OP  2894",
          "coords": [
            -7.229127,
            -39.298303
          ]
        },
        {
          "n": 20,
          "name": "Av Castelo B.,  2685",
          "coords": [
            -7.229066,
            -39.298537
          ]
        },
        {
          "n": 21,
          "name": "Av Castelo B.,  2187",
          "coords": [
            -7.227131,
            -39.304003
          ]
        },
        {
          "n": 22,
          "name": "AvCastelo B., 1847",
          "coords": [
            -7.226019,
            -39.307143
          ]
        },
        {
          "n": 23,
          "name": "Av Castelo Branco 1487",
          "coords": [
            -7.224701,
            -39.311279
          ]
        },
        {
          "n": 24,
          "name": "Av Castelo B.,  Pca da biblia",
          "coords": [
            -7.223093,
            -39.31718
          ]
        },
        {
          "n": 25,
          "name": "AV CASTELO B - COL. MILITAR",
          "coords": [
            -7.223069,
            -39.319891
          ]
        },
        {
          "n": 26,
          "name": "R Jose Marrocos Pca do sesi",
          "coords": [
            -7.225088,
            -39.321654
          ]
        },
        {
          "n": 27,
          "name": "Rodoviaria - Pousada Planalto",
          "coords": [
            -7.225815,
            -39.322136
          ]
        },
        {
          "n": 28,
          "name": "R Prof Francis -  Patio cariri",
          "coords": [
            -7.225824,
            -39.323716
          ]
        },
        {
          "n": 29,
          "name": "R Francimar Roque - Hosp Regional",
          "coords": [
            -7.227233,
            -39.325893
          ]
        },
        {
          "n": 30,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 31,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        },
        {
          "n": 32,
          "name": "Av Castelo B. - Quartel da PM",
          "coords": [
            -7.223212,
            -39.320559
          ]
        },
        {
          "n": 33,
          "name": "R DAS FLORES Pousada Tereza",
          "coords": [
            -7.222415,
            -39.318749
          ]
        },
        {
          "n": 34,
          "name": "R S Pedro,  230",
          "coords": [
            -7.219254,
            -39.318899
          ]
        },
        {
          "n": 35,
          "name": "R S Pedro, 1941",
          "coords": [
            -7.216083,
            -39.318337
          ]
        },
        {
          "n": 36,
          "name": "R S Pedro, 1429",
          "coords": [
            -7.211614,
            -39.317633
          ]
        },
        {
          "n": 37,
          "name": "R S Pedro, 1107",
          "coords": [
            -7.208832,
            -39.317743
          ]
        },
        {
          "n": 38,
          "name": "R S Pedro,  651",
          "coords": [
            -7.204876,
            -39.317933
          ]
        },
        {
          "n": 39,
          "name": "R S Pedro, 281",
          "coords": [
            -7.201795,
            -39.317102
          ]
        }
      ],
      "geometry": [
        [
          -7.23227,
          -39.27357
        ],
        [
          -7.23198,
          -39.27411
        ],
        [
          -7.23164,
          -39.27479
        ],
        [
          -7.23146,
          -39.27515
        ],
        [
          -7.23111,
          -39.27594
        ],
        [
          -7.23091,
          -39.27646
        ],
        [
          -7.23065,
          -39.27711
        ],
        [
          -7.23028,
          -39.27773
        ],
        [
          -7.22947,
          -39.27897
        ],
        [
          -7.22948,
          -39.27984
        ],
        [
          -7.22949,
          -39.28073
        ],
        [
          -7.22721,
          -39.28081
        ],
        [
          -7.22523,
          -39.28093
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22449,
          -39.27997
        ],
        [
          -7.2245,
          -39.27976
        ],
        [
          -7.22459,
          -39.27857
        ],
        [
          -7.22462,
          -39.27811
        ],
        [
          -7.22463,
          -39.27804
        ],
        [
          -7.2263,
          -39.2774
        ],
        [
          -7.22604,
          -39.27818
        ],
        [
          -7.22577,
          -39.2784
        ],
        [
          -7.22459,
          -39.27857
        ],
        [
          -7.22452,
          -39.27949
        ],
        [
          -7.22449,
          -39.27997
        ],
        [
          -7.22442,
          -39.28087
        ],
        [
          -7.22437,
          -39.28112
        ],
        [
          -7.22595,
          -39.281
        ],
        [
          -7.22721,
          -39.28081
        ],
        [
          -7.22597,
          -39.28088
        ],
        [
          -7.22798,
          -39.28086
        ],
        [
          -7.23008,
          -39.2808
        ],
        [
          -7.23112,
          -39.28125
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23121,
          -39.28168
        ],
        [
          -7.23113,
          -39.28258
        ],
        [
          -7.23114,
          -39.28325
        ],
        [
          -7.23111,
          -39.28364
        ],
        [
          -7.23101,
          -39.28442
        ],
        [
          -7.23087,
          -39.28558
        ],
        [
          -7.23081,
          -39.286
        ],
        [
          -7.22984,
          -39.28566
        ],
        [
          -7.23027,
          -39.28551
        ],
        [
          -7.23082,
          -39.286
        ],
        [
          -7.2307,
          -39.28705
        ],
        [
          -7.23053,
          -39.28837
        ],
        [
          -7.23049,
          -39.28878
        ],
        [
          -7.23043,
          -39.28929
        ],
        [
          -7.23025,
          -39.29046
        ],
        [
          -7.23014,
          -39.29125
        ],
        [
          -7.23007,
          -39.29193
        ],
        [
          -7.23003,
          -39.29215
        ],
        [
          -7.22992,
          -39.29313
        ],
        [
          -7.22985,
          -39.29371
        ],
        [
          -7.22986,
          -39.2942
        ],
        [
          -7.22991,
          -39.29372
        ],
        [
          -7.22989,
          -39.29336
        ],
        [
          -7.22974,
          -39.29459
        ],
        [
          -7.22964,
          -39.2954
        ],
        [
          -7.22961,
          -39.29579
        ],
        [
          -7.22958,
          -39.29671
        ],
        [
          -7.22957,
          -39.29714
        ],
        [
          -7.22954,
          -39.29722
        ],
        [
          -7.22953,
          -39.29728
        ],
        [
          -7.22955,
          -39.29733
        ],
        [
          -7.22947,
          -39.29755
        ],
        [
          -7.22921,
          -39.29833
        ],
        [
          -7.22907,
          -39.29872
        ],
        [
          -7.2289,
          -39.29917
        ],
        [
          -7.22881,
          -39.29942
        ],
        [
          -7.22815,
          -39.30125
        ],
        [
          -7.22774,
          -39.30237
        ],
        [
          -7.22763,
          -39.30266
        ],
        [
          -7.2274,
          -39.30329
        ],
        [
          -7.22715,
          -39.30401
        ],
        [
          -7.22699,
          -39.30449
        ],
        [
          -7.22653,
          -39.30573
        ],
        [
          -7.2264,
          -39.30611
        ],
        [
          -7.22627,
          -39.30646
        ],
        [
          -7.22617,
          -39.30676
        ],
        [
          -7.22591,
          -39.30748
        ],
        [
          -7.22546,
          -39.30889
        ],
        [
          -7.22501,
          -39.31035
        ],
        [
          -7.2248,
          -39.311
        ],
        [
          -7.22438,
          -39.31233
        ],
        [
          -7.2242,
          -39.31305
        ],
        [
          -7.22366,
          -39.31468
        ],
        [
          -7.22336,
          -39.31556
        ],
        [
          -7.22312,
          -39.31629
        ],
        [
          -7.22309,
          -39.31718
        ],
        [
          -7.2231,
          -39.31787
        ],
        [
          -7.22309,
          -39.31891
        ],
        [
          -7.22309,
          -39.31937
        ],
        [
          -7.22309,
          -39.32102
        ],
        [
          -7.22303,
          -39.32129
        ],
        [
          -7.22299,
          -39.32134
        ],
        [
          -7.22299,
          -39.32141
        ],
        [
          -7.22303,
          -39.32146
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22344,
          -39.32138
        ],
        [
          -7.22481,
          -39.32157
        ],
        [
          -7.22576,
          -39.32171
        ],
        [
          -7.22628,
          -39.32207
        ],
        [
          -7.22581,
          -39.32214
        ],
        [
          -7.22563,
          -39.32219
        ],
        [
          -7.22559,
          -39.32229
        ],
        [
          -7.22564,
          -39.32266
        ],
        [
          -7.22581,
          -39.32364
        ],
        [
          -7.22586,
          -39.32372
        ],
        [
          -7.22684,
          -39.32522
        ],
        [
          -7.22698,
          -39.32544
        ],
        [
          -7.2273,
          -39.32594
        ],
        [
          -7.22682,
          -39.32615
        ],
        [
          -7.22653,
          -39.32626
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22528,
          -39.32641
        ],
        [
          -7.22465,
          -39.32632
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22305,
          -39.32313
        ],
        [
          -7.22318,
          -39.32263
        ],
        [
          -7.22321,
          -39.32212
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22321,
          -39.32138
        ],
        [
          -7.22318,
          -39.32129
        ],
        [
          -7.2232,
          -39.31987
        ],
        [
          -7.22319,
          -39.31897
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22187,
          -39.31867
        ],
        [
          -7.22185,
          -39.31917
        ],
        [
          -7.22174,
          -39.31917
        ],
        [
          -7.22147,
          -39.31922
        ],
        [
          -7.22073,
          -39.31913
        ],
        [
          -7.22002,
          -39.31907
        ],
        [
          -7.21985,
          -39.31904
        ],
        [
          -7.21882,
          -39.31886
        ],
        [
          -7.21758,
          -39.31861
        ],
        [
          -7.21652,
          -39.31841
        ],
        [
          -7.21547,
          -39.31824
        ],
        [
          -7.21308,
          -39.31778
        ],
        [
          -7.21161,
          -39.31764
        ],
        [
          -7.20977,
          -39.3177
        ],
        [
          -7.20866,
          -39.31775
        ],
        [
          -7.20753,
          -39.3178
        ],
        [
          -7.20624,
          -39.31787
        ],
        [
          -7.20488,
          -39.31795
        ],
        [
          -7.20396,
          -39.318
        ],
        [
          -7.20224,
          -39.3173
        ],
        [
          -7.20178,
          -39.31713
        ]
      ]
    },
    "practicalSummary": "Atendido na Rua Manuel Piraca de Sousa pela linha 7001 (Betolândia). Por conta do desenho em laço da rota, quem embarca no Brejo Seco sentido Centro passa primeiro pela alça da Betolândia (acrescentando ~6 paradas e ~1,5 km) antes de acessar a Av. Castelo Branco rumo ao Shopping e ao Centro.",
    "alternativeNote": "Opção secundária: caminhando ~774 m em linha reta (~1,3 km pelas ruas) até a Rua José Antônio Severino (176), é possível pegar a linha 7001.1, reduzindo o percurso no ônibus para 21 paradas até o Shopping e 29 até a Praça."
  },
  {
    "complexId": "beata-maria-araujo",
    "hasRegularBus": true,
    "lineCode": "7005",
    "lineName": "Parque Frei Damião / Parque São Geraldo",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "R Manoel Tavares, 1025",
    "boardingCoords": [
      -7.251035,
      -39.337494
    ],
    "walkMeters": 660,
    "walkStraightMeters": 610,
    "walkMin": 9,
    "walkGeometry": [
      [
        -7.25254,
        -39.34223
      ],
      [
        -7.25283,
        -39.34218
      ],
      [
        -7.25258,
        -39.34138
      ],
      [
        -7.2525,
        -39.34101
      ],
      [
        -7.25234,
        -39.34033
      ],
      [
        -7.25216,
        -39.3394
      ],
      [
        -7.25197,
        -39.33835
      ],
      [
        -7.25181,
        -39.3374
      ],
      [
        -7.25123,
        -39.3375
      ],
      [
        -7.25104,
        -39.33753
      ]
    ],
    "schedule": {
      "weekdayTrips": 35,
      "saturdayTrips": 18,
      "sundayTrips": 13,
      "firstDeparture": "05:00",
      "lastDeparture": "21:10",
      "minGapMin": 15,
      "maxGapMin": 60,
      "avgGapMin": 29,
      "avgWaitMin": 14,
      "departuresWeekday": [
        "05:00",
        "05:30",
        "06:00",
        "06:18",
        "06:36",
        "06:55",
        "07:10",
        "07:30",
        "07:50",
        "08:10",
        "08:35",
        "09:00",
        "09:25",
        "09:55",
        "10:25",
        "10:50",
        "11:20",
        "11:50",
        "12:10",
        "12:40",
        "13:05",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:50",
        "19:20",
        "20:10",
        "21:10"
      ]
    },
    "toShopping": {
      "stopsCount": 14,
      "distanceKm": 5.0,
      "busDurationMin": 21,
      "totalDoorToDoorMin": 30,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Rua Manoel Tavares Lopes",
        "Rua José Inácio Gomes",
        "Rua Socorro Norões Mota",
        "Av. Pe. Cícero (Poliesportivo)",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Manoel Tavares, 1025",
          "coords": [
            -7.251035,
            -39.337494
          ]
        },
        {
          "n": 2,
          "name": "R Manoel Tavares, 795",
          "coords": [
            -7.248136,
            -39.337944
          ]
        },
        {
          "n": 3,
          "name": "R Manoel Tavares - Caique",
          "coords": [
            -7.245565,
            -39.338369
          ]
        },
        {
          "n": 4,
          "name": "R Manoel Tavares, OP  146",
          "coords": [
            -7.242107,
            -39.338861
          ]
        },
        {
          "n": 5,
          "name": "R Manoel Tavares,  SN",
          "coords": [
            -7.239997,
            -39.339178
          ]
        },
        {
          "n": 6,
          "name": "R Poeta Vitorino Vicente,  83",
          "coords": [
            -7.239264,
            -39.338199
          ]
        },
        {
          "n": 7,
          "name": "R Fco Martins de Sousa, 1047",
          "coords": [
            -7.238347,
            -39.33701
          ]
        },
        {
          "n": 8,
          "name": "R Jose Inacio Gomes,  373",
          "coords": [
            -7.236364,
            -39.33189
          ]
        },
        {
          "n": 9,
          "name": "R Fca. Leila, 703",
          "coords": [
            -7.235862,
            -39.331086
          ]
        },
        {
          "n": 10,
          "name": "R. Sco Noroes Mota 948",
          "coords": [
            -7.234782,
            -39.3309
          ]
        },
        {
          "n": 11,
          "name": "R Sco noroes Mota, 582",
          "coords": [
            -7.23251,
            -39.331286
          ]
        },
        {
          "n": 12,
          "name": "R Sco Noroes Mota, 597",
          "coords": [
            -7.232157,
            -39.331263
          ]
        },
        {
          "n": 13,
          "name": "Av Pe Cicero - Laboratorio Sta Isabel",
          "coords": [
            -7.226329,
            -39.330486
          ]
        },
        {
          "n": 14,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 15,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.25104,
          -39.33753
        ],
        [
          -7.2509,
          -39.33755
        ],
        [
          -7.25057,
          -39.33759
        ],
        [
          -7.25045,
          -39.33761
        ],
        [
          -7.24994,
          -39.33769
        ],
        [
          -7.24931,
          -39.33778
        ],
        [
          -7.24878,
          -39.33787
        ],
        [
          -7.24871,
          -39.33788
        ],
        [
          -7.24828,
          -39.33793
        ],
        [
          -7.24814,
          -39.33796
        ],
        [
          -7.24807,
          -39.33797
        ],
        [
          -7.24782,
          -39.338
        ],
        [
          -7.24743,
          -39.33807
        ],
        [
          -7.24685,
          -39.33815
        ],
        [
          -7.24668,
          -39.33819
        ],
        [
          -7.24624,
          -39.33828
        ],
        [
          -7.24573,
          -39.33833
        ],
        [
          -7.24558,
          -39.33835
        ],
        [
          -7.24556,
          -39.33835
        ],
        [
          -7.24495,
          -39.33845
        ],
        [
          -7.24452,
          -39.33855
        ],
        [
          -7.24428,
          -39.3386
        ],
        [
          -7.24404,
          -39.33862
        ],
        [
          -7.24363,
          -39.33868
        ],
        [
          -7.24358,
          -39.33869
        ],
        [
          -7.24306,
          -39.33873
        ],
        [
          -7.24244,
          -39.33882
        ],
        [
          -7.24211,
          -39.33887
        ],
        [
          -7.24197,
          -39.33889
        ],
        [
          -7.24182,
          -39.33891
        ],
        [
          -7.2415,
          -39.33896
        ],
        [
          -7.24119,
          -39.33901
        ],
        [
          -7.24058,
          -39.33911
        ],
        [
          -7.24033,
          -39.33915
        ],
        [
          -7.24,
          -39.33919
        ],
        [
          -7.23986,
          -39.33921
        ],
        [
          -7.23938,
          -39.33929
        ],
        [
          -7.23924,
          -39.33835
        ],
        [
          -7.23922,
          -39.33821
        ],
        [
          -7.23921,
          -39.33811
        ],
        [
          -7.23914,
          -39.33768
        ],
        [
          -7.23903,
          -39.33691
        ],
        [
          -7.23835,
          -39.33701
        ],
        [
          -7.23834,
          -39.33701
        ],
        [
          -7.2378,
          -39.33709
        ],
        [
          -7.23773,
          -39.3371
        ],
        [
          -7.23707,
          -39.3372
        ],
        [
          -7.23682,
          -39.33724
        ],
        [
          -7.2367,
          -39.33642
        ],
        [
          -7.23663,
          -39.33582
        ],
        [
          -7.23656,
          -39.33509
        ],
        [
          -7.23653,
          -39.33449
        ],
        [
          -7.23653,
          -39.3344
        ],
        [
          -7.23651,
          -39.33405
        ],
        [
          -7.23649,
          -39.33373
        ],
        [
          -7.23645,
          -39.33301
        ],
        [
          -7.2364,
          -39.33232
        ],
        [
          -7.23638,
          -39.33189
        ],
        [
          -7.23636,
          -39.33167
        ],
        [
          -7.23632,
          -39.33106
        ],
        [
          -7.23586,
          -39.33111
        ],
        [
          -7.23544,
          -39.33115
        ],
        [
          -7.23523,
          -39.3312
        ],
        [
          -7.2348,
          -39.33126
        ],
        [
          -7.23478,
          -39.3309
        ],
        [
          -7.23478,
          -39.33089
        ],
        [
          -7.23413,
          -39.331
        ],
        [
          -7.23349,
          -39.33111
        ],
        [
          -7.23312,
          -39.33117
        ],
        [
          -7.23271,
          -39.33122
        ],
        [
          -7.23251,
          -39.33126
        ],
        [
          -7.23234,
          -39.33129
        ],
        [
          -7.23217,
          -39.33132
        ],
        [
          -7.23173,
          -39.3314
        ],
        [
          -7.23164,
          -39.33142
        ],
        [
          -7.23109,
          -39.33149
        ],
        [
          -7.2304,
          -39.33159
        ],
        [
          -7.22978,
          -39.3317
        ],
        [
          -7.22914,
          -39.33182
        ],
        [
          -7.22851,
          -39.33192
        ],
        [
          -7.22786,
          -39.33203
        ],
        [
          -7.22643,
          -39.33225
        ],
        [
          -7.22634,
          -39.33097
        ],
        [
          -7.2263,
          -39.33049
        ],
        [
          -7.22625,
          -39.32976
        ],
        [
          -7.2262,
          -39.32894
        ],
        [
          -7.22619,
          -39.32885
        ],
        [
          -7.22619,
          -39.3288
        ],
        [
          -7.22619,
          -39.32876
        ],
        [
          -7.22619,
          -39.32875
        ],
        [
          -7.22619,
          -39.32854
        ],
        [
          -7.22619,
          -39.32841
        ],
        [
          -7.22621,
          -39.32826
        ],
        [
          -7.22621,
          -39.3282
        ],
        [
          -7.22633,
          -39.32758
        ],
        [
          -7.22634,
          -39.32753
        ],
        [
          -7.2266,
          -39.32696
        ],
        [
          -7.22661,
          -39.3269
        ],
        [
          -7.22664,
          -39.32678
        ],
        [
          -7.22664,
          -39.32671
        ],
        [
          -7.22662,
          -39.32665
        ],
        [
          -7.22659,
          -39.32655
        ],
        [
          -7.22651,
          -39.32647
        ],
        [
          -7.22642,
          -39.32641
        ],
        [
          -7.22626,
          -39.32639
        ],
        [
          -7.22616,
          -39.32637
        ],
        [
          -7.22558,
          -39.32642
        ],
        [
          -7.22528,
          -39.32641
        ],
        [
          -7.22493,
          -39.32638
        ],
        [
          -7.22467,
          -39.32632
        ],
        [
          -7.22465,
          -39.32632
        ],
        [
          -7.22406,
          -39.32617
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22294,
          -39.32589
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22235,
          -39.32572
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "No retorno (sentido Frei Damião), a linha 7005 passa pelo Mercado do Triângulo e Rua Francisco Martins de Sousa."
    },
    "toPraca": {
      "stopsCount": 22,
      "distanceKm": 8.0,
      "busDurationMin": 29,
      "totalDoorToDoorMin": 38,
      "alightingStop": "R S Pedro, 281",
      "corridors": [
        "Rua Manoel Tavares Lopes",
        "Rua Socorro Norões Mota",
        "Cariri Shopping",
        "Rua das Flores",
        "Rua São Pedro (Praça Pe. Cícero)"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Manoel Tavares, 1025",
          "coords": [
            -7.251035,
            -39.337494
          ]
        },
        {
          "n": 2,
          "name": "R Manoel Tavares, 795",
          "coords": [
            -7.248136,
            -39.337944
          ]
        },
        {
          "n": 3,
          "name": "R Manoel Tavares - Caique",
          "coords": [
            -7.245565,
            -39.338369
          ]
        },
        {
          "n": 4,
          "name": "R Manoel Tavares, OP  146",
          "coords": [
            -7.242107,
            -39.338861
          ]
        },
        {
          "n": 5,
          "name": "R Manoel Tavares,  SN",
          "coords": [
            -7.239997,
            -39.339178
          ]
        },
        {
          "n": 6,
          "name": "R Poeta Vitorino Vicente,  83",
          "coords": [
            -7.239264,
            -39.338199
          ]
        },
        {
          "n": 7,
          "name": "R Fco Martins de Sousa, 1047",
          "coords": [
            -7.238347,
            -39.33701
          ]
        },
        {
          "n": 8,
          "name": "R Jose Inacio Gomes,  373",
          "coords": [
            -7.236364,
            -39.33189
          ]
        },
        {
          "n": 9,
          "name": "R Fca. Leila, 703",
          "coords": [
            -7.235862,
            -39.331086
          ]
        },
        {
          "n": 10,
          "name": "R. Sco Noroes Mota 948",
          "coords": [
            -7.234782,
            -39.3309
          ]
        },
        {
          "n": 11,
          "name": "R Sco noroes Mota, 582",
          "coords": [
            -7.23251,
            -39.331286
          ]
        },
        {
          "n": 12,
          "name": "R Sco Noroes Mota, 597",
          "coords": [
            -7.232157,
            -39.331263
          ]
        },
        {
          "n": 13,
          "name": "Av Pe Cicero - Laboratorio Sta Isabel",
          "coords": [
            -7.226329,
            -39.330486
          ]
        },
        {
          "n": 14,
          "name": "Av Pe Cicero Poliesportivo",
          "coords": [
            -7.224661,
            -39.326288
          ]
        },
        {
          "n": 15,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        },
        {
          "n": 16,
          "name": "Av Castelo B. - Quartel da PM",
          "coords": [
            -7.223212,
            -39.320559
          ]
        },
        {
          "n": 17,
          "name": "R DAS FLORES Pousada Tereza",
          "coords": [
            -7.222415,
            -39.318749
          ]
        },
        {
          "n": 18,
          "name": "R S Pedro,  230",
          "coords": [
            -7.219254,
            -39.318899
          ]
        },
        {
          "n": 19,
          "name": "R S Pedro, 1941",
          "coords": [
            -7.216083,
            -39.318337
          ]
        },
        {
          "n": 20,
          "name": "R S Pedro, 1429",
          "coords": [
            -7.211614,
            -39.317633
          ]
        },
        {
          "n": 21,
          "name": "R S Pedro, 1107",
          "coords": [
            -7.208832,
            -39.317743
          ]
        },
        {
          "n": 22,
          "name": "R S Pedro,  651",
          "coords": [
            -7.204876,
            -39.317933
          ]
        },
        {
          "n": 23,
          "name": "R S Pedro, 281",
          "coords": [
            -7.201795,
            -39.317102
          ]
        }
      ],
      "geometry": [
        [
          -7.25104,
          -39.33753
        ],
        [
          -7.2509,
          -39.33755
        ],
        [
          -7.25057,
          -39.33759
        ],
        [
          -7.24994,
          -39.33769
        ],
        [
          -7.24931,
          -39.33778
        ],
        [
          -7.24878,
          -39.33787
        ],
        [
          -7.24871,
          -39.33788
        ],
        [
          -7.24814,
          -39.33796
        ],
        [
          -7.24807,
          -39.33797
        ],
        [
          -7.24782,
          -39.338
        ],
        [
          -7.24743,
          -39.33807
        ],
        [
          -7.24668,
          -39.33819
        ],
        [
          -7.24624,
          -39.33828
        ],
        [
          -7.24573,
          -39.33833
        ],
        [
          -7.24558,
          -39.33835
        ],
        [
          -7.24556,
          -39.33835
        ],
        [
          -7.24452,
          -39.33855
        ],
        [
          -7.24428,
          -39.3386
        ],
        [
          -7.24404,
          -39.33862
        ],
        [
          -7.24363,
          -39.33868
        ],
        [
          -7.24306,
          -39.33873
        ],
        [
          -7.24244,
          -39.33882
        ],
        [
          -7.24211,
          -39.33887
        ],
        [
          -7.24197,
          -39.33889
        ],
        [
          -7.24182,
          -39.33891
        ],
        [
          -7.24119,
          -39.33901
        ],
        [
          -7.24058,
          -39.33911
        ],
        [
          -7.24033,
          -39.33915
        ],
        [
          -7.24,
          -39.33919
        ],
        [
          -7.23938,
          -39.33929
        ],
        [
          -7.23924,
          -39.33835
        ],
        [
          -7.23922,
          -39.33821
        ],
        [
          -7.23921,
          -39.33811
        ],
        [
          -7.23903,
          -39.33691
        ],
        [
          -7.23835,
          -39.33701
        ],
        [
          -7.23834,
          -39.33701
        ],
        [
          -7.2378,
          -39.33709
        ],
        [
          -7.23773,
          -39.3371
        ],
        [
          -7.23682,
          -39.33724
        ],
        [
          -7.2367,
          -39.33642
        ],
        [
          -7.23663,
          -39.33582
        ],
        [
          -7.23656,
          -39.33509
        ],
        [
          -7.23653,
          -39.3344
        ],
        [
          -7.23651,
          -39.33405
        ],
        [
          -7.23649,
          -39.33373
        ],
        [
          -7.23645,
          -39.33301
        ],
        [
          -7.2364,
          -39.33232
        ],
        [
          -7.23636,
          -39.33167
        ],
        [
          -7.23632,
          -39.33106
        ],
        [
          -7.23586,
          -39.33111
        ],
        [
          -7.23544,
          -39.33115
        ],
        [
          -7.2348,
          -39.33126
        ],
        [
          -7.23478,
          -39.3309
        ],
        [
          -7.23478,
          -39.33089
        ],
        [
          -7.23413,
          -39.331
        ],
        [
          -7.23312,
          -39.33117
        ],
        [
          -7.23271,
          -39.33122
        ],
        [
          -7.23251,
          -39.33126
        ],
        [
          -7.23234,
          -39.33129
        ],
        [
          -7.23217,
          -39.33132
        ],
        [
          -7.23164,
          -39.33142
        ],
        [
          -7.23109,
          -39.33149
        ],
        [
          -7.2304,
          -39.33159
        ],
        [
          -7.22978,
          -39.3317
        ],
        [
          -7.22851,
          -39.33192
        ],
        [
          -7.22786,
          -39.33203
        ],
        [
          -7.22643,
          -39.33225
        ],
        [
          -7.22634,
          -39.33097
        ],
        [
          -7.22625,
          -39.32976
        ],
        [
          -7.2262,
          -39.32894
        ],
        [
          -7.22619,
          -39.32885
        ],
        [
          -7.22619,
          -39.3288
        ],
        [
          -7.22619,
          -39.32876
        ],
        [
          -7.22619,
          -39.32854
        ],
        [
          -7.22619,
          -39.32841
        ],
        [
          -7.22621,
          -39.32826
        ],
        [
          -7.22621,
          -39.3282
        ],
        [
          -7.22634,
          -39.32753
        ],
        [
          -7.2266,
          -39.32696
        ],
        [
          -7.22661,
          -39.3269
        ],
        [
          -7.22664,
          -39.32678
        ],
        [
          -7.22664,
          -39.32671
        ],
        [
          -7.22659,
          -39.32655
        ],
        [
          -7.22651,
          -39.32647
        ],
        [
          -7.22642,
          -39.32641
        ],
        [
          -7.22626,
          -39.32639
        ],
        [
          -7.22558,
          -39.32642
        ],
        [
          -7.22528,
          -39.32641
        ],
        [
          -7.22493,
          -39.32638
        ],
        [
          -7.22467,
          -39.32632
        ],
        [
          -7.22406,
          -39.32617
        ],
        [
          -7.22376,
          -39.32609
        ],
        [
          -7.22294,
          -39.32589
        ],
        [
          -7.22242,
          -39.32574
        ],
        [
          -7.22235,
          -39.32572
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ],
        [
          -7.22305,
          -39.32313
        ],
        [
          -7.22315,
          -39.32279
        ],
        [
          -7.2232,
          -39.32242
        ],
        [
          -7.22321,
          -39.32212
        ],
        [
          -7.22319,
          -39.32167
        ],
        [
          -7.22318,
          -39.32145
        ],
        [
          -7.22321,
          -39.32138
        ],
        [
          -7.22321,
          -39.32135
        ],
        [
          -7.2232,
          -39.32132
        ],
        [
          -7.22318,
          -39.32129
        ],
        [
          -7.22319,
          -39.32056
        ],
        [
          -7.2232,
          -39.31939
        ],
        [
          -7.22319,
          -39.31897
        ],
        [
          -7.22319,
          -39.31889
        ],
        [
          -7.22309,
          -39.31887
        ],
        [
          -7.22241,
          -39.31877
        ],
        [
          -7.22187,
          -39.31867
        ],
        [
          -7.22187,
          -39.31878
        ],
        [
          -7.22185,
          -39.31917
        ],
        [
          -7.22179,
          -39.31917
        ],
        [
          -7.22158,
          -39.3192
        ],
        [
          -7.22147,
          -39.31922
        ],
        [
          -7.22138,
          -39.31922
        ],
        [
          -7.22073,
          -39.31913
        ],
        [
          -7.22032,
          -39.31909
        ],
        [
          -7.22002,
          -39.31907
        ],
        [
          -7.21998,
          -39.31906
        ],
        [
          -7.21985,
          -39.31904
        ],
        [
          -7.21882,
          -39.31886
        ],
        [
          -7.21824,
          -39.31874
        ],
        [
          -7.21758,
          -39.31861
        ],
        [
          -7.21667,
          -39.31844
        ],
        [
          -7.21659,
          -39.31843
        ],
        [
          -7.21608,
          -39.31834
        ],
        [
          -7.21547,
          -39.31824
        ],
        [
          -7.21405,
          -39.31796
        ],
        [
          -7.21308,
          -39.31778
        ],
        [
          -7.21161,
          -39.31764
        ],
        [
          -7.21055,
          -39.31766
        ],
        [
          -7.20977,
          -39.3177
        ],
        [
          -7.20908,
          -39.31775
        ],
        [
          -7.20883,
          -39.31775
        ],
        [
          -7.20795,
          -39.31777
        ],
        [
          -7.20753,
          -39.3178
        ],
        [
          -7.20724,
          -39.3178
        ],
        [
          -7.20624,
          -39.31787
        ],
        [
          -7.20488,
          -39.31795
        ],
        [
          -7.2041,
          -39.31801
        ],
        [
          -7.20403,
          -39.31801
        ],
        [
          -7.20396,
          -39.318
        ],
        [
          -7.20224,
          -39.3173
        ],
        [
          -7.20178,
          -39.31713
        ],
        [
          -7.20178,
          -39.31713
        ]
      ]
    },
    "practicalSummary": "Conjunto em construção (entrega prevista para 2027). Hoje, nenhuma linha entra no loteamento: a parada mais próxima fica a ~660 m (~9 min a pé) na Rua Manoel Tavares Lopes, corredor da linha 7005 — a de maior oferta entre todas as analisadas (35 viagens/dia útil e intervalo médio de 29 min).",
    "alternativeNote": "Quando o residencial for entregue (424 casas), a demanda do entorno pode exigir extensão da linha 7005 até a portaria."
  },
  {
    "complexId": "tenente-coelho",
    "hasRegularBus": true,
    "lineCode": "7006",
    "lineName": "Parque Antônio Vieira / Aeroporto — Via CEU's",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "R Rdo Goncalves,  129",
    "boardingCoords": [
      -7.211781,
      -39.285369
    ],
    "walkMeters": 100,
    "walkStraightMeters": 120,
    "walkMin": 1,
    "walkGeometry": [
      [
        -7.21166,
        -39.28629
      ],
      [
        -7.21176,
        -39.28545
      ],
      [
        -7.21177,
        -39.28537
      ]
    ],
    "schedule": {
      "weekdayTrips": 16,
      "saturdayTrips": 8,
      "sundayTrips": 0,
      "firstDeparture": "07:35",
      "lastDeparture": "21:00",
      "minGapMin": 20,
      "maxGapMin": 150,
      "avgGapMin": 54,
      "avgWaitMin": 27,
      "departuresWeekday": [
        "07:35",
        "08:40",
        "09:10",
        "10:15",
        "10:50",
        "11:50",
        "12:25",
        "13:25",
        "13:45",
        "14:55",
        "15:20",
        "16:20",
        "17:00",
        "18:00",
        "18:30",
        "21:00"
      ]
    },
    "toShopping": {
      "stopsCount": 36,
      "distanceKm": 10.36,
      "busDurationMin": 39,
      "totalDoorToDoorMin": 40,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Tenente Coelho (Rua Rdo. Gonçalves)",
        "Av. Virgílio Távora",
        "Rua do Cruzeiro (Praça Pe. Cícero)",
        "Rua Pe. Cícero",
        "Parque Antônio Vieira",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Rdo Goncalves,  129",
          "coords": [
            -7.211781,
            -39.285369
          ]
        },
        {
          "n": 2,
          "name": "R Rdo Goncalves, 121",
          "coords": [
            -7.211503,
            -39.287837
          ]
        },
        {
          "n": 3,
          "name": "Av Virgilio Tavora, 1897",
          "coords": [
            -7.212566,
            -39.290982
          ]
        },
        {
          "n": 4,
          "name": "Av virgilio Tavora SN",
          "coords": [
            -7.212014,
            -39.295935
          ]
        },
        {
          "n": 5,
          "name": "Av Virgilio Tavora, 928",
          "coords": [
            -7.211822,
            -39.298045
          ]
        },
        {
          "n": 6,
          "name": "Av Virgilio Tavora Posto Timbauba",
          "coords": [
            -7.210448,
            -39.300614
          ]
        },
        {
          "n": 7,
          "name": "Av Virgilio Tavora, OP   86",
          "coords": [
            -7.206331,
            -39.303798
          ]
        },
        {
          "n": 8,
          "name": "R Do Cruzeiro Estac Fatima",
          "coords": [
            -7.20621,
            -39.304557
          ]
        },
        {
          "n": 9,
          "name": "R do cruzeiro, 1475",
          "coords": [
            -7.205469,
            -39.306446
          ]
        },
        {
          "n": 10,
          "name": "R do cruzeiro, 1023",
          "coords": [
            -7.204067,
            -39.310198
          ]
        },
        {
          "n": 11,
          "name": "R do cruzeiro Rest popular",
          "coords": [
            -7.203595,
            -39.311532
          ]
        },
        {
          "n": 12,
          "name": "R do cruzeiro Col Moreira",
          "coords": [
            -7.202525,
            -39.314578
          ]
        },
        {
          "n": 13,
          "name": "Rua do Cruzeiro Nº 273",
          "coords": [
            -7.201795,
            -39.316117
          ]
        },
        {
          "n": 14,
          "name": "R Do Cruzeiro, Pca Pe. Cicero",
          "coords": [
            -7.201111,
            -39.317636
          ]
        },
        {
          "n": 15,
          "name": "RUA PE.CICRO,NEWS CENTER",
          "coords": [
            -7.202183,
            -39.318588
          ]
        },
        {
          "n": 16,
          "name": "R Pe Cicero, 812",
          "coords": [
            -7.205679,
            -39.320081
          ]
        },
        {
          "n": 17,
          "name": "R Pe Cicero,  1196",
          "coords": [
            -7.208517,
            -39.321359
          ]
        },
        {
          "n": 18,
          "name": "R Pe Cicero, 1598",
          "coords": [
            -7.211848,
            -39.322659
          ]
        },
        {
          "n": 19,
          "name": "Av Pe Cicero, 1936",
          "coords": [
            -7.213774,
            -39.323502
          ]
        },
        {
          "n": 20,
          "name": "R Mons lima, 145",
          "coords": [
            -7.214524,
            -39.326953
          ]
        },
        {
          "n": 21,
          "name": "R Mons lima, 06",
          "coords": [
            -7.214709,
            -39.328399
          ]
        },
        {
          "n": 22,
          "name": "R Jose Moura lins,  256",
          "coords": [
            -7.215787,
            -39.328604
          ]
        },
        {
          "n": 23,
          "name": "R Jose Moura lins,  374",
          "coords": [
            -7.217255,
            -39.328376
          ]
        },
        {
          "n": 24,
          "name": "R Jose Moura Lino,  524",
          "coords": [
            -7.218935,
            -39.328123
          ]
        },
        {
          "n": 25,
          "name": "R Jose Bernardo,  116",
          "coords": [
            -7.222056,
            -39.330516
          ]
        },
        {
          "n": 26,
          "name": "R Constr Jose Sabino, 440",
          "coords": [
            -7.222963,
            -39.330432
          ]
        },
        {
          "n": 27,
          "name": "R Constr Jose Sabino Ant Vieira",
          "coords": [
            -7.223073,
            -39.331871
          ]
        },
        {
          "n": 28,
          "name": "R Constr Jose Sabino, OP  727",
          "coords": [
            -7.222939,
            -39.333504
          ]
        },
        {
          "n": 29,
          "name": "R Constr Jose Sabino,  715",
          "coords": [
            -7.222934,
            -39.333251
          ]
        },
        {
          "n": 30,
          "name": "R Constr Jose Sabino,  547",
          "coords": [
            -7.223067,
            -39.331852
          ]
        },
        {
          "n": 31,
          "name": "R Constr Jose Sabino,  427",
          "coords": [
            -7.222931,
            -39.330452
          ]
        },
        {
          "n": 32,
          "name": "R Jose Bernardo da Silva, 113",
          "coords": [
            -7.221749,
            -39.330371
          ]
        },
        {
          "n": 33,
          "name": "R Jose Bernardo X Paulo Maia",
          "coords": [
            -7.22018,
            -39.33085
          ]
        },
        {
          "n": 34,
          "name": "RUA HILDEGARDA BARBOSA Nº505",
          "coords": [
            -7.21975,
            -39.329666
          ]
        },
        {
          "n": 35,
          "name": "RUA HILDEGARDA BARBOSA N°357",
          "coords": [
            -7.219423,
            -39.328475
          ]
        },
        {
          "n": 36,
          "name": "Av Pe. Cicero S/N",
          "coords": [
            -7.219797,
            -39.325162
          ]
        },
        {
          "n": 37,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.21177,
          -39.28537
        ],
        [
          -7.2115,
          -39.28771
        ],
        [
          -7.21149,
          -39.28784
        ],
        [
          -7.21144,
          -39.28828
        ],
        [
          -7.21288,
          -39.28838
        ],
        [
          -7.21275,
          -39.28952
        ],
        [
          -7.21265,
          -39.29051
        ],
        [
          -7.2126,
          -39.29099
        ],
        [
          -7.21247,
          -39.29211
        ],
        [
          -7.21234,
          -39.2933
        ],
        [
          -7.21222,
          -39.29441
        ],
        [
          -7.21205,
          -39.29594
        ],
        [
          -7.212,
          -39.29634
        ],
        [
          -7.21193,
          -39.29651
        ],
        [
          -7.21192,
          -39.29652
        ],
        [
          -7.2119,
          -39.29655
        ],
        [
          -7.21189,
          -39.29657
        ],
        [
          -7.2119,
          -39.29663
        ],
        [
          -7.21191,
          -39.29664
        ],
        [
          -7.21194,
          -39.29668
        ],
        [
          -7.21196,
          -39.29668
        ],
        [
          -7.2118,
          -39.29804
        ],
        [
          -7.21178,
          -39.29826
        ],
        [
          -7.21168,
          -39.29925
        ],
        [
          -7.21164,
          -39.29944
        ],
        [
          -7.21154,
          -39.29972
        ],
        [
          -7.21148,
          -39.29982
        ],
        [
          -7.21103,
          -39.30021
        ],
        [
          -7.21059,
          -39.30054
        ],
        [
          -7.21033,
          -39.30074
        ],
        [
          -7.20963,
          -39.30127
        ],
        [
          -7.20852,
          -39.302
        ],
        [
          -7.20811,
          -39.30229
        ],
        [
          -7.20762,
          -39.30264
        ],
        [
          -7.20743,
          -39.30278
        ],
        [
          -7.20672,
          -39.3033
        ],
        [
          -7.20654,
          -39.30348
        ],
        [
          -7.2064,
          -39.30369
        ],
        [
          -7.20635,
          -39.30379
        ],
        [
          -7.20633,
          -39.30386
        ],
        [
          -7.20631,
          -39.30394
        ],
        [
          -7.2063,
          -39.30412
        ],
        [
          -7.2063,
          -39.30421
        ],
        [
          -7.2062,
          -39.30455
        ],
        [
          -7.20616,
          -39.3046
        ],
        [
          -7.20604,
          -39.30478
        ],
        [
          -7.20599,
          -39.30486
        ],
        [
          -7.20542,
          -39.30643
        ],
        [
          -7.20531,
          -39.30674
        ],
        [
          -7.20468,
          -39.3085
        ],
        [
          -7.2046,
          -39.30874
        ],
        [
          -7.20406,
          -39.3102
        ],
        [
          -7.20384,
          -39.31085
        ],
        [
          -7.2036,
          -39.31153
        ],
        [
          -7.20352,
          -39.31179
        ],
        [
          -7.20295,
          -39.31333
        ],
        [
          -7.20248,
          -39.31456
        ],
        [
          -7.20191,
          -39.31594
        ],
        [
          -7.20182,
          -39.31613
        ],
        [
          -7.20111,
          -39.31764
        ],
        [
          -7.20093,
          -39.31802
        ],
        [
          -7.20219,
          -39.31857
        ],
        [
          -7.20263,
          -39.31876
        ],
        [
          -7.20434,
          -39.31953
        ],
        [
          -7.20449,
          -39.31959
        ],
        [
          -7.20531,
          -39.31995
        ],
        [
          -7.20554,
          -39.32005
        ],
        [
          -7.20584,
          -39.32019
        ],
        [
          -7.20598,
          -39.32025
        ],
        [
          -7.20774,
          -39.32099
        ],
        [
          -7.20853,
          -39.32133
        ],
        [
          -7.20935,
          -39.32168
        ],
        [
          -7.20964,
          -39.3218
        ],
        [
          -7.21129,
          -39.32248
        ],
        [
          -7.21183,
          -39.3227
        ],
        [
          -7.212,
          -39.32276
        ],
        [
          -7.21204,
          -39.32279
        ],
        [
          -7.2121,
          -39.32288
        ],
        [
          -7.21209,
          -39.32296
        ],
        [
          -7.21206,
          -39.32314
        ],
        [
          -7.21257,
          -39.32324
        ],
        [
          -7.21305,
          -39.32333
        ],
        [
          -7.21335,
          -39.32339
        ],
        [
          -7.21377,
          -39.3235
        ],
        [
          -7.21401,
          -39.32357
        ],
        [
          -7.21473,
          -39.32378
        ],
        [
          -7.21481,
          -39.3238
        ],
        [
          -7.2145,
          -39.32515
        ],
        [
          -7.21445,
          -39.32563
        ],
        [
          -7.21439,
          -39.32585
        ],
        [
          -7.21439,
          -39.32588
        ],
        [
          -7.21442,
          -39.32661
        ],
        [
          -7.21448,
          -39.32696
        ],
        [
          -7.21471,
          -39.32831
        ],
        [
          -7.21473,
          -39.3284
        ],
        [
          -7.215,
          -39.32872
        ],
        [
          -7.21525,
          -39.32868
        ],
        [
          -7.21579,
          -39.32859
        ],
        [
          -7.21632,
          -39.32851
        ],
        [
          -7.21725,
          -39.32837
        ],
        [
          -7.21792,
          -39.32827
        ],
        [
          -7.21911,
          -39.32809
        ],
        [
          -7.21923,
          -39.32854
        ],
        [
          -7.21948,
          -39.32949
        ],
        [
          -7.21961,
          -39.32996
        ],
        [
          -7.22001,
          -39.33087
        ],
        [
          -7.22006,
          -39.33087
        ],
        [
          -7.22102,
          -39.33071
        ],
        [
          -7.22132,
          -39.33065
        ],
        [
          -7.22206,
          -39.33052
        ],
        [
          -7.22233,
          -39.33047
        ],
        [
          -7.22294,
          -39.33043
        ],
        [
          -7.22307,
          -39.33187
        ],
        [
          -7.22353,
          -39.33206
        ],
        [
          -7.22357,
          -39.33271
        ],
        [
          -7.22295,
          -39.33357
        ],
        [
          -7.22294,
          -39.3335
        ],
        [
          -7.22292,
          -39.33282
        ],
        [
          -7.22288,
          -39.33219
        ],
        [
          -7.22307,
          -39.33185
        ],
        [
          -7.22294,
          -39.33045
        ],
        [
          -7.22299,
          -39.33033
        ],
        [
          -7.22294,
          -39.32996
        ],
        [
          -7.22256,
          -39.32934
        ],
        [
          -7.22219,
          -39.3294
        ],
        [
          -7.22156,
          -39.3295
        ],
        [
          -7.22163,
          -39.33038
        ],
        [
          -7.22132,
          -39.33065
        ],
        [
          -7.22102,
          -39.33071
        ],
        [
          -7.22018,
          -39.33085
        ],
        [
          -7.22006,
          -39.33087
        ],
        [
          -7.22008,
          -39.33076
        ],
        [
          -7.21994,
          -39.33026
        ],
        [
          -7.21977,
          -39.32966
        ],
        [
          -7.21964,
          -39.32914
        ],
        [
          -7.21945,
          -39.32847
        ],
        [
          -7.21933,
          -39.32802
        ],
        [
          -7.21911,
          -39.32719
        ],
        [
          -7.219,
          -39.32679
        ],
        [
          -7.21869,
          -39.32571
        ],
        [
          -7.2185,
          -39.32492
        ],
        [
          -7.21913,
          -39.32498
        ],
        [
          -7.2198,
          -39.32516
        ],
        [
          -7.2207,
          -39.32541
        ],
        [
          -7.22197,
          -39.32574
        ],
        [
          -7.22222,
          -39.32581
        ],
        [
          -7.22232,
          -39.32583
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22257,
          -39.32491
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "Na volta do Cariri Shopping para o Tenente Coelho, o caminho é mais curto: passa pelo Centro, Terminal São Miguel e Av. Virgílio Távora em 20 paradas."
    },
    "toPraca": {
      "stopsCount": 13,
      "distanceKm": 4.12,
      "busDurationMin": 13,
      "totalDoorToDoorMin": 14,
      "alightingStop": "R Do Cruzeiro, Pca Pe. Cicero",
      "corridors": [
        "Tenente Coelho (Rua Rdo. Gonçalves)",
        "Av. Virgílio Távora",
        "Rua do Cruzeiro",
        "Praça Padre Cícero"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Rdo Goncalves,  129",
          "coords": [
            -7.211781,
            -39.285369
          ]
        },
        {
          "n": 2,
          "name": "R Rdo Goncalves, 121",
          "coords": [
            -7.211503,
            -39.287837
          ]
        },
        {
          "n": 3,
          "name": "Av Virgilio Tavora, 1897",
          "coords": [
            -7.212566,
            -39.290982
          ]
        },
        {
          "n": 4,
          "name": "Av virgilio Tavora SN",
          "coords": [
            -7.212014,
            -39.295935
          ]
        },
        {
          "n": 5,
          "name": "Av Virgilio Tavora, 928",
          "coords": [
            -7.211822,
            -39.298045
          ]
        },
        {
          "n": 6,
          "name": "Av Virgilio Tavora Posto Timbauba",
          "coords": [
            -7.210448,
            -39.300614
          ]
        },
        {
          "n": 7,
          "name": "Av Virgilio Tavora, OP   86",
          "coords": [
            -7.206331,
            -39.303798
          ]
        },
        {
          "n": 8,
          "name": "R Do Cruzeiro Estac Fatima",
          "coords": [
            -7.20621,
            -39.304557
          ]
        },
        {
          "n": 9,
          "name": "R do cruzeiro, 1475",
          "coords": [
            -7.205469,
            -39.306446
          ]
        },
        {
          "n": 10,
          "name": "R do cruzeiro, 1023",
          "coords": [
            -7.204067,
            -39.310198
          ]
        },
        {
          "n": 11,
          "name": "R do cruzeiro Rest popular",
          "coords": [
            -7.203595,
            -39.311532
          ]
        },
        {
          "n": 12,
          "name": "R do cruzeiro Col Moreira",
          "coords": [
            -7.202525,
            -39.314578
          ]
        },
        {
          "n": 13,
          "name": "Rua do Cruzeiro Nº 273",
          "coords": [
            -7.201795,
            -39.316117
          ]
        },
        {
          "n": 14,
          "name": "R Do Cruzeiro, Pca Pe. Cicero",
          "coords": [
            -7.201111,
            -39.317636
          ]
        }
      ],
      "geometry": [
        [
          -7.21177,
          -39.28537
        ],
        [
          -7.21176,
          -39.28545
        ],
        [
          -7.2115,
          -39.28771
        ],
        [
          -7.21149,
          -39.28784
        ],
        [
          -7.21149,
          -39.28785
        ],
        [
          -7.21144,
          -39.28828
        ],
        [
          -7.21288,
          -39.28838
        ],
        [
          -7.21285,
          -39.28861
        ],
        [
          -7.21275,
          -39.28952
        ],
        [
          -7.21265,
          -39.29051
        ],
        [
          -7.21263,
          -39.2907
        ],
        [
          -7.2126,
          -39.29099
        ],
        [
          -7.21247,
          -39.29211
        ],
        [
          -7.21244,
          -39.29235
        ],
        [
          -7.21234,
          -39.2933
        ],
        [
          -7.21222,
          -39.29441
        ],
        [
          -7.2121,
          -39.2955
        ],
        [
          -7.21205,
          -39.29594
        ],
        [
          -7.212,
          -39.29634
        ],
        [
          -7.21198,
          -39.29642
        ],
        [
          -7.21193,
          -39.29651
        ],
        [
          -7.21192,
          -39.29652
        ],
        [
          -7.2119,
          -39.29654
        ],
        [
          -7.2119,
          -39.29655
        ],
        [
          -7.21189,
          -39.29657
        ],
        [
          -7.21189,
          -39.2966
        ],
        [
          -7.2119,
          -39.29663
        ],
        [
          -7.21191,
          -39.29664
        ],
        [
          -7.21192,
          -39.29666
        ],
        [
          -7.21194,
          -39.29668
        ],
        [
          -7.21196,
          -39.29668
        ],
        [
          -7.21187,
          -39.29743
        ],
        [
          -7.2118,
          -39.29804
        ],
        [
          -7.21178,
          -39.29826
        ],
        [
          -7.21172,
          -39.29891
        ],
        [
          -7.21168,
          -39.29925
        ],
        [
          -7.21164,
          -39.29944
        ],
        [
          -7.21159,
          -39.29959
        ],
        [
          -7.21154,
          -39.29972
        ],
        [
          -7.21148,
          -39.29982
        ],
        [
          -7.21139,
          -39.29992
        ],
        [
          -7.21103,
          -39.30021
        ],
        [
          -7.21059,
          -39.30054
        ],
        [
          -7.21046,
          -39.30063
        ],
        [
          -7.21033,
          -39.30074
        ],
        [
          -7.20963,
          -39.30127
        ],
        [
          -7.20951,
          -39.30135
        ],
        [
          -7.20852,
          -39.302
        ],
        [
          -7.20811,
          -39.30229
        ],
        [
          -7.20775,
          -39.30255
        ],
        [
          -7.20762,
          -39.30264
        ],
        [
          -7.20743,
          -39.30278
        ],
        [
          -7.20725,
          -39.3029
        ],
        [
          -7.20672,
          -39.3033
        ],
        [
          -7.20654,
          -39.30348
        ],
        [
          -7.20646,
          -39.30357
        ],
        [
          -7.2064,
          -39.30369
        ],
        [
          -7.20635,
          -39.30379
        ],
        [
          -7.20635,
          -39.3038
        ],
        [
          -7.20633,
          -39.30386
        ],
        [
          -7.20631,
          -39.30394
        ],
        [
          -7.2063,
          -39.30403
        ],
        [
          -7.2063,
          -39.30412
        ],
        [
          -7.2063,
          -39.30421
        ],
        [
          -7.20623,
          -39.30452
        ],
        [
          -7.2062,
          -39.30455
        ],
        [
          -7.20616,
          -39.3046
        ],
        [
          -7.20609,
          -39.3047
        ],
        [
          -7.20604,
          -39.30478
        ],
        [
          -7.20599,
          -39.30486
        ],
        [
          -7.2057,
          -39.30561
        ],
        [
          -7.20542,
          -39.30643
        ],
        [
          -7.20531,
          -39.30674
        ],
        [
          -7.20493,
          -39.30782
        ],
        [
          -7.20468,
          -39.3085
        ],
        [
          -7.2046,
          -39.30874
        ],
        [
          -7.20417,
          -39.30987
        ],
        [
          -7.20406,
          -39.3102
        ],
        [
          -7.20384,
          -39.31085
        ],
        [
          -7.20379,
          -39.31099
        ],
        [
          -7.2036,
          -39.31153
        ],
        [
          -7.20352,
          -39.31179
        ],
        [
          -7.2033,
          -39.31242
        ],
        [
          -7.20295,
          -39.31333
        ],
        [
          -7.20248,
          -39.31456
        ],
        [
          -7.20244,
          -39.31467
        ],
        [
          -7.20191,
          -39.31594
        ],
        [
          -7.20182,
          -39.31613
        ],
        [
          -7.20141,
          -39.31699
        ],
        [
          -7.20111,
          -39.31764
        ]
      ]
    },
    "practicalSummary": "A linha 7006 entra diretamente no Tenente Coelho (parada a ~100 m). Para a Praça Pe. Cícero, a ligação é rápida e quase reta pela Av. Virgílio Távora e Rua do Cruzeiro (13 paradas, ~13 min). Já para ir ao Cariri Shopping de ônibus, o passageiro enfrenta o desvio completo pelo Centro e pelo Parque Antônio Vieira (36 paradas, 10,36 km).",
    "alternativeNote": "A variante 7006 Via CEU's tem 16 saídas nos dias úteis, 8 aos sábados e não opera aos domingos (quando circula apenas a variante Via Pedrinhas)."
  },
  {
    "complexId": "mirante-da-serra",
    "hasRegularBus": true,
    "lineCode": "7006",
    "lineName": "Parque Antônio Vieira / Aeroporto — Via CEU's",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "R Joaquim Leandro, OP  1358",
    "boardingCoords": [
      -7.20005,
      -39.27088
    ],
    "walkMeters": 200,
    "walkStraightMeters": 250,
    "walkMin": 3,
    "walkGeometry": [
      [
        -7.19926,
        -39.26981
      ],
      [
        -7.19933,
        -39.27047
      ],
      [
        -7.19942,
        -39.27098
      ],
      [
        -7.19987,
        -39.27094
      ],
      [
        -7.20005,
        -39.27092
      ]
    ],
    "schedule": {
      "weekdayTrips": 16,
      "saturdayTrips": 8,
      "sundayTrips": 0,
      "firstDeparture": "07:35",
      "lastDeparture": "21:00",
      "minGapMin": 20,
      "maxGapMin": 150,
      "avgGapMin": 54,
      "avgWaitMin": 27,
      "departuresWeekday": [
        "07:35",
        "08:40",
        "09:10",
        "10:15",
        "10:50",
        "11:50",
        "12:25",
        "13:25",
        "13:45",
        "14:55",
        "15:20",
        "16:20",
        "17:00",
        "18:00",
        "18:30",
        "21:00"
      ]
    },
    "toShopping": {
      "stopsCount": 53,
      "distanceKm": 16.1,
      "busDurationMin": 62,
      "totalDoorToDoorMin": 65,
      "alightingStop": "Av Castelo B. - Shopping cariri",
      "corridors": [
        "Rua Joaquim Leandro (Vila Nova)",
        "Rua João Balbino / Fca. Pereira",
        "Aeroporto & Tenente Coelho",
        "Av. Virgílio Távora",
        "Praça Pe. Cícero",
        "Parque Antônio Vieira",
        "Cariri Shopping"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Joaquim Leandro, OP  1358",
          "coords": [
            -7.20005,
            -39.27088
          ]
        },
        {
          "n": 2,
          "name": "R Joaquim Leandro, OP  1741",
          "coords": [
            -7.198723,
            -39.271024
          ]
        },
        {
          "n": 3,
          "name": "Rua Joaquim  Leandro S. 1034",
          "coords": [
            -7.196387,
            -39.271325
          ]
        },
        {
          "n": 4,
          "name": "Rua Joaquim  Leandro S. 2004",
          "coords": [
            -7.194274,
            -39.271512
          ]
        },
        {
          "n": 5,
          "name": "Av Valdelice Leandro Menezes, 121",
          "coords": [
            -7.192585,
            -39.273972
          ]
        },
        {
          "n": 6,
          "name": "R Colombo de Sousa X R Joao rocha",
          "coords": [
            -7.20135,
            -39.275719
          ]
        },
        {
          "n": 7,
          "name": "R Joao Rocha, 613",
          "coords": [
            -7.201508,
            -39.276916
          ]
        },
        {
          "n": 8,
          "name": "R Fca. Pereira Lopes,  543",
          "coords": [
            -7.203184,
            -39.276763
          ]
        },
        {
          "n": 9,
          "name": "R Fca.  Pereira Lopes, 433",
          "coords": [
            -7.205055,
            -39.276501
          ]
        },
        {
          "n": 10,
          "name": "R. Fca. Pereira Lopes,  297",
          "coords": [
            -7.205796,
            -39.276414
          ]
        },
        {
          "n": 11,
          "name": "R Fca. Pereira Lopes,  95",
          "coords": [
            -7.210913,
            -39.275821
          ]
        },
        {
          "n": 12,
          "name": "R Fca pereira Lopes,  46",
          "coords": [
            -7.212331,
            -39.27564
          ]
        },
        {
          "n": 13,
          "name": "Aeroporto Volta 01",
          "coords": [
            -7.214666,
            -39.273141
          ]
        },
        {
          "n": 14,
          "name": "Aeroporto 02",
          "coords": [
            -7.214409,
            -39.275057
          ]
        },
        {
          "n": 15,
          "name": "Av Virgilio Tavora 1621",
          "coords": [
            -7.214083,
            -39.278035
          ]
        },
        {
          "n": 16,
          "name": "Av Virgilio Tavora 1208",
          "coords": [
            -7.213573,
            -39.282204
          ]
        },
        {
          "n": 17,
          "name": "R Rdo Goncalves, 133",
          "coords": [
            -7.211954,
            -39.28416
          ]
        },
        {
          "n": 18,
          "name": "R Rdo Goncalves,  129",
          "coords": [
            -7.211781,
            -39.285369
          ]
        },
        {
          "n": 19,
          "name": "R Rdo Goncalves, 121",
          "coords": [
            -7.211503,
            -39.287837
          ]
        },
        {
          "n": 20,
          "name": "Av Virgilio Tavora, 1897",
          "coords": [
            -7.212566,
            -39.290982
          ]
        },
        {
          "n": 21,
          "name": "Av virgilio Tavora SN",
          "coords": [
            -7.212014,
            -39.295935
          ]
        },
        {
          "n": 22,
          "name": "Av Virgilio Tavora, 928",
          "coords": [
            -7.211822,
            -39.298045
          ]
        },
        {
          "n": 23,
          "name": "Av Virgilio Tavora Posto Timbauba",
          "coords": [
            -7.210448,
            -39.300614
          ]
        },
        {
          "n": 24,
          "name": "Av Virgilio Tavora, OP   86",
          "coords": [
            -7.206331,
            -39.303798
          ]
        },
        {
          "n": 25,
          "name": "R Do Cruzeiro Estac Fatima",
          "coords": [
            -7.20621,
            -39.304557
          ]
        },
        {
          "n": 26,
          "name": "R do cruzeiro, 1475",
          "coords": [
            -7.205469,
            -39.306446
          ]
        },
        {
          "n": 27,
          "name": "R do cruzeiro, 1023",
          "coords": [
            -7.204067,
            -39.310198
          ]
        },
        {
          "n": 28,
          "name": "R do cruzeiro Rest popular",
          "coords": [
            -7.203595,
            -39.311532
          ]
        },
        {
          "n": 29,
          "name": "R do cruzeiro Col Moreira",
          "coords": [
            -7.202525,
            -39.314578
          ]
        },
        {
          "n": 30,
          "name": "Rua do Cruzeiro Nº 273",
          "coords": [
            -7.201795,
            -39.316117
          ]
        },
        {
          "n": 31,
          "name": "R Do Cruzeiro, Pca Pe. Cicero",
          "coords": [
            -7.201111,
            -39.317636
          ]
        },
        {
          "n": 32,
          "name": "RUA PE.CICRO,NEWS CENTER",
          "coords": [
            -7.202183,
            -39.318588
          ]
        },
        {
          "n": 33,
          "name": "R Pe Cicero, 812",
          "coords": [
            -7.205679,
            -39.320081
          ]
        },
        {
          "n": 34,
          "name": "R Pe Cicero,  1196",
          "coords": [
            -7.208517,
            -39.321359
          ]
        },
        {
          "n": 35,
          "name": "R Pe Cicero, 1598",
          "coords": [
            -7.211848,
            -39.322659
          ]
        },
        {
          "n": 36,
          "name": "Av Pe Cicero, 1936",
          "coords": [
            -7.213774,
            -39.323502
          ]
        },
        {
          "n": 37,
          "name": "R Mons lima, 145",
          "coords": [
            -7.214524,
            -39.326953
          ]
        },
        {
          "n": 38,
          "name": "R Mons lima, 06",
          "coords": [
            -7.214709,
            -39.328399
          ]
        },
        {
          "n": 39,
          "name": "R Jose Moura lins,  256",
          "coords": [
            -7.215787,
            -39.328604
          ]
        },
        {
          "n": 40,
          "name": "R Jose Moura lins,  374",
          "coords": [
            -7.217255,
            -39.328376
          ]
        },
        {
          "n": 41,
          "name": "R Jose Moura Lino,  524",
          "coords": [
            -7.218935,
            -39.328123
          ]
        },
        {
          "n": 42,
          "name": "R Jose Bernardo,  116",
          "coords": [
            -7.222056,
            -39.330516
          ]
        },
        {
          "n": 43,
          "name": "R Constr Jose Sabino, 440",
          "coords": [
            -7.222963,
            -39.330432
          ]
        },
        {
          "n": 44,
          "name": "R Constr Jose Sabino Ant Vieira",
          "coords": [
            -7.223073,
            -39.331871
          ]
        },
        {
          "n": 45,
          "name": "R Constr Jose Sabino, OP  727",
          "coords": [
            -7.222939,
            -39.333504
          ]
        },
        {
          "n": 46,
          "name": "R Constr Jose Sabino,  715",
          "coords": [
            -7.222934,
            -39.333251
          ]
        },
        {
          "n": 47,
          "name": "R Constr Jose Sabino,  547",
          "coords": [
            -7.223067,
            -39.331852
          ]
        },
        {
          "n": 48,
          "name": "R Constr Jose Sabino,  427",
          "coords": [
            -7.222931,
            -39.330452
          ]
        },
        {
          "n": 49,
          "name": "R Jose Bernardo da Silva, 113",
          "coords": [
            -7.221749,
            -39.330371
          ]
        },
        {
          "n": 50,
          "name": "R Jose Bernardo X Paulo Maia",
          "coords": [
            -7.22018,
            -39.33085
          ]
        },
        {
          "n": 51,
          "name": "RUA HILDEGARDA BARBOSA Nº505",
          "coords": [
            -7.21975,
            -39.329666
          ]
        },
        {
          "n": 52,
          "name": "RUA HILDEGARDA BARBOSA N°357",
          "coords": [
            -7.219423,
            -39.328475
          ]
        },
        {
          "n": 53,
          "name": "Av Pe. Cicero S/N",
          "coords": [
            -7.219797,
            -39.325162
          ]
        },
        {
          "n": 54,
          "name": "Av Castelo B. - Shopping cariri",
          "coords": [
            -7.222876,
            -39.323781
          ]
        }
      ],
      "geometry": [
        [
          -7.20005,
          -39.27092
        ],
        [
          -7.19897,
          -39.27103
        ],
        [
          -7.19855,
          -39.27107
        ],
        [
          -7.19736,
          -39.27121
        ],
        [
          -7.19654,
          -39.27131
        ],
        [
          -7.19543,
          -39.2714
        ],
        [
          -7.19436,
          -39.27148
        ],
        [
          -7.19321,
          -39.27147
        ],
        [
          -7.19308,
          -39.27134
        ],
        [
          -7.19271,
          -39.27118
        ],
        [
          -7.19259,
          -39.27191
        ],
        [
          -7.19261,
          -39.27258
        ],
        [
          -7.19262,
          -39.27348
        ],
        [
          -7.19264,
          -39.27371
        ],
        [
          -7.19268,
          -39.274
        ],
        [
          -7.19274,
          -39.27413
        ],
        [
          -7.19296,
          -39.27437
        ],
        [
          -7.19302,
          -39.27451
        ],
        [
          -7.19314,
          -39.2749
        ],
        [
          -7.19329,
          -39.27521
        ],
        [
          -7.1936,
          -39.27564
        ],
        [
          -7.19409,
          -39.2761
        ],
        [
          -7.19463,
          -39.27624
        ],
        [
          -7.19628,
          -39.27605
        ],
        [
          -7.19696,
          -39.27598
        ],
        [
          -7.19782,
          -39.27585
        ],
        [
          -7.19846,
          -39.27578
        ],
        [
          -7.19941,
          -39.27566
        ],
        [
          -7.20014,
          -39.27555
        ],
        [
          -7.20136,
          -39.27537
        ],
        [
          -7.2014,
          -39.27603
        ],
        [
          -7.20146,
          -39.27666
        ],
        [
          -7.20241,
          -39.27684
        ],
        [
          -7.20318,
          -39.27673
        ],
        [
          -7.2042,
          -39.27662
        ],
        [
          -7.20496,
          -39.27652
        ],
        [
          -7.20661,
          -39.2763
        ],
        [
          -7.20814,
          -39.27612
        ],
        [
          -7.21004,
          -39.2759
        ],
        [
          -7.21091,
          -39.27582
        ],
        [
          -7.21247,
          -39.2756
        ],
        [
          -7.21336,
          -39.27325
        ],
        [
          -7.21385,
          -39.27234
        ],
        [
          -7.21448,
          -39.27274
        ],
        [
          -7.21459,
          -39.27299
        ],
        [
          -7.21476,
          -39.27339
        ],
        [
          -7.21478,
          -39.27352
        ],
        [
          -7.21449,
          -39.27445
        ],
        [
          -7.21439,
          -39.27505
        ],
        [
          -7.21416,
          -39.27697
        ],
        [
          -7.21404,
          -39.27803
        ],
        [
          -7.21376,
          -39.28026
        ],
        [
          -7.21368,
          -39.2805
        ],
        [
          -7.2136,
          -39.28057
        ],
        [
          -7.21354,
          -39.28065
        ],
        [
          -7.21355,
          -39.28074
        ],
        [
          -7.21363,
          -39.28079
        ],
        [
          -7.21367,
          -39.28094
        ],
        [
          -7.2136,
          -39.28186
        ],
        [
          -7.21356,
          -39.2822
        ],
        [
          -7.21334,
          -39.28418
        ],
        [
          -7.21177,
          -39.28537
        ],
        [
          -7.2115,
          -39.28771
        ],
        [
          -7.21144,
          -39.28828
        ],
        [
          -7.21285,
          -39.28861
        ],
        [
          -7.21263,
          -39.2907
        ],
        [
          -7.21247,
          -39.29211
        ],
        [
          -7.21222,
          -39.29441
        ],
        [
          -7.21205,
          -39.29594
        ],
        [
          -7.21193,
          -39.29651
        ],
        [
          -7.2119,
          -39.29655
        ],
        [
          -7.21189,
          -39.2966
        ],
        [
          -7.21192,
          -39.29666
        ],
        [
          -7.21196,
          -39.29668
        ],
        [
          -7.21178,
          -39.29826
        ],
        [
          -7.21168,
          -39.29925
        ],
        [
          -7.21154,
          -39.29972
        ],
        [
          -7.21139,
          -39.29992
        ],
        [
          -7.21046,
          -39.30063
        ],
        [
          -7.20963,
          -39.30127
        ],
        [
          -7.20811,
          -39.30229
        ],
        [
          -7.20743,
          -39.30278
        ],
        [
          -7.20672,
          -39.3033
        ],
        [
          -7.2064,
          -39.30369
        ],
        [
          -7.20635,
          -39.3038
        ],
        [
          -7.2063,
          -39.30403
        ],
        [
          -7.2063,
          -39.30421
        ],
        [
          -7.20616,
          -39.3046
        ],
        [
          -7.20604,
          -39.30478
        ],
        [
          -7.20542,
          -39.30643
        ],
        [
          -7.20468,
          -39.3085
        ],
        [
          -7.20417,
          -39.30987
        ],
        [
          -7.20379,
          -39.31099
        ],
        [
          -7.20352,
          -39.31179
        ],
        [
          -7.20248,
          -39.31456
        ],
        [
          -7.20191,
          -39.31594
        ],
        [
          -7.20111,
          -39.31764
        ],
        [
          -7.20178,
          -39.31839
        ],
        [
          -7.20358,
          -39.3192
        ],
        [
          -7.20449,
          -39.31959
        ],
        [
          -7.20554,
          -39.32005
        ],
        [
          -7.20598,
          -39.32025
        ],
        [
          -7.20774,
          -39.32099
        ],
        [
          -7.20935,
          -39.32168
        ],
        [
          -7.21026,
          -39.32206
        ],
        [
          -7.21187,
          -39.32271
        ],
        [
          -7.21204,
          -39.32279
        ],
        [
          -7.21209,
          -39.32296
        ],
        [
          -7.21206,
          -39.32314
        ],
        [
          -7.21305,
          -39.32333
        ],
        [
          -7.21377,
          -39.3235
        ],
        [
          -7.2144,
          -39.32368
        ],
        [
          -7.21458,
          -39.32464
        ],
        [
          -7.21445,
          -39.32563
        ],
        [
          -7.21439,
          -39.32588
        ],
        [
          -7.21442,
          -39.32661
        ],
        [
          -7.21471,
          -39.32831
        ],
        [
          -7.21479,
          -39.32874
        ],
        [
          -7.2155,
          -39.32863
        ],
        [
          -7.21632,
          -39.32851
        ],
        [
          -7.21792,
          -39.32827
        ],
        [
          -7.21923,
          -39.32854
        ],
        [
          -7.21948,
          -39.32949
        ],
        [
          -7.22001,
          -39.33087
        ],
        [
          -7.2205,
          -39.33079
        ],
        [
          -7.22165,
          -39.33059
        ],
        [
          -7.22233,
          -39.33047
        ],
        [
          -7.22307,
          -39.33187
        ],
        [
          -7.22353,
          -39.33206
        ],
        [
          -7.22295,
          -39.33357
        ],
        [
          -7.22292,
          -39.33282
        ],
        [
          -7.22309,
          -39.33214
        ],
        [
          -7.22293,
          -39.33034
        ],
        [
          -7.22294,
          -39.32996
        ],
        [
          -7.22219,
          -39.3294
        ],
        [
          -7.22156,
          -39.3295
        ],
        [
          -7.22132,
          -39.33065
        ],
        [
          -7.2205,
          -39.33079
        ],
        [
          -7.22008,
          -39.33082
        ],
        [
          -7.21994,
          -39.33026
        ],
        [
          -7.21964,
          -39.32914
        ],
        [
          -7.21933,
          -39.32802
        ],
        [
          -7.21911,
          -39.32719
        ],
        [
          -7.21869,
          -39.32571
        ],
        [
          -7.21847,
          -39.3248
        ],
        [
          -7.22015,
          -39.32526
        ],
        [
          -7.22197,
          -39.32574
        ],
        [
          -7.22232,
          -39.32583
        ],
        [
          -7.22246,
          -39.32532
        ],
        [
          -7.22287,
          -39.32378
        ]
      ],
      "returnNote": "Na volta do Shopping ao Mirante da Serra, a linha segue pelo Centro, Terminal São Miguel e Av. Virgílio Távora em 31 paradas."
    },
    "toPraca": {
      "stopsCount": 30,
      "distanceKm": 9.86,
      "busDurationMin": 37,
      "totalDoorToDoorMin": 40,
      "alightingStop": "R Do Cruzeiro, Pca Pe. Cicero",
      "corridors": [
        "Rua Joaquim Leandro (Vila Nova)",
        "Rua João Balbino",
        "Aeroporto & Tenente Coelho",
        "Av. Virgílio Távora",
        "Rua do Cruzeiro",
        "Praça Padre Cícero"
      ],
      "stops": [
        {
          "n": 1,
          "name": "R Joaquim Leandro, OP  1358",
          "coords": [
            -7.20005,
            -39.27088
          ]
        },
        {
          "n": 2,
          "name": "R Joaquim Leandro, OP  1741",
          "coords": [
            -7.198723,
            -39.271024
          ]
        },
        {
          "n": 3,
          "name": "Rua Joaquim  Leandro S. 1034",
          "coords": [
            -7.196387,
            -39.271325
          ]
        },
        {
          "n": 4,
          "name": "Rua Joaquim  Leandro S. 2004",
          "coords": [
            -7.194274,
            -39.271512
          ]
        },
        {
          "n": 5,
          "name": "Av Valdelice Leandro Menezes, 121",
          "coords": [
            -7.192585,
            -39.273972
          ]
        },
        {
          "n": 6,
          "name": "R Colombo de Sousa X R Joao rocha",
          "coords": [
            -7.20135,
            -39.275719
          ]
        },
        {
          "n": 7,
          "name": "R Joao Rocha, 613",
          "coords": [
            -7.201508,
            -39.276916
          ]
        },
        {
          "n": 8,
          "name": "R Fca. Pereira Lopes,  543",
          "coords": [
            -7.203184,
            -39.276763
          ]
        },
        {
          "n": 9,
          "name": "R Fca.  Pereira Lopes, 433",
          "coords": [
            -7.205055,
            -39.276501
          ]
        },
        {
          "n": 10,
          "name": "R. Fca. Pereira Lopes,  297",
          "coords": [
            -7.205796,
            -39.276414
          ]
        },
        {
          "n": 11,
          "name": "R Fca. Pereira Lopes,  95",
          "coords": [
            -7.210913,
            -39.275821
          ]
        },
        {
          "n": 12,
          "name": "R Fca pereira Lopes,  46",
          "coords": [
            -7.212331,
            -39.27564
          ]
        },
        {
          "n": 13,
          "name": "Aeroporto Volta 01",
          "coords": [
            -7.214666,
            -39.273141
          ]
        },
        {
          "n": 14,
          "name": "Aeroporto 02",
          "coords": [
            -7.214409,
            -39.275057
          ]
        },
        {
          "n": 15,
          "name": "Av Virgilio Tavora 1621",
          "coords": [
            -7.214083,
            -39.278035
          ]
        },
        {
          "n": 16,
          "name": "Av Virgilio Tavora 1208",
          "coords": [
            -7.213573,
            -39.282204
          ]
        },
        {
          "n": 17,
          "name": "R Rdo Goncalves, 133",
          "coords": [
            -7.211954,
            -39.28416
          ]
        },
        {
          "n": 18,
          "name": "R Rdo Goncalves,  129",
          "coords": [
            -7.211781,
            -39.285369
          ]
        },
        {
          "n": 19,
          "name": "R Rdo Goncalves, 121",
          "coords": [
            -7.211503,
            -39.287837
          ]
        },
        {
          "n": 20,
          "name": "Av Virgilio Tavora, 1897",
          "coords": [
            -7.212566,
            -39.290982
          ]
        },
        {
          "n": 21,
          "name": "Av virgilio Tavora SN",
          "coords": [
            -7.212014,
            -39.295935
          ]
        },
        {
          "n": 22,
          "name": "Av Virgilio Tavora, 928",
          "coords": [
            -7.211822,
            -39.298045
          ]
        },
        {
          "n": 23,
          "name": "Av Virgilio Tavora Posto Timbauba",
          "coords": [
            -7.210448,
            -39.300614
          ]
        },
        {
          "n": 24,
          "name": "Av Virgilio Tavora, OP   86",
          "coords": [
            -7.206331,
            -39.303798
          ]
        },
        {
          "n": 25,
          "name": "R Do Cruzeiro Estac Fatima",
          "coords": [
            -7.20621,
            -39.304557
          ]
        },
        {
          "n": 26,
          "name": "R do cruzeiro, 1475",
          "coords": [
            -7.205469,
            -39.306446
          ]
        },
        {
          "n": 27,
          "name": "R do cruzeiro, 1023",
          "coords": [
            -7.204067,
            -39.310198
          ]
        },
        {
          "n": 28,
          "name": "R do cruzeiro Rest popular",
          "coords": [
            -7.203595,
            -39.311532
          ]
        },
        {
          "n": 29,
          "name": "R do cruzeiro Col Moreira",
          "coords": [
            -7.202525,
            -39.314578
          ]
        },
        {
          "n": 30,
          "name": "Rua do Cruzeiro Nº 273",
          "coords": [
            -7.201795,
            -39.316117
          ]
        },
        {
          "n": 31,
          "name": "R Do Cruzeiro, Pca Pe. Cicero",
          "coords": [
            -7.201111,
            -39.317636
          ]
        }
      ],
      "geometry": [
        [
          -7.20005,
          -39.27092
        ],
        [
          -7.19942,
          -39.27098
        ],
        [
          -7.19897,
          -39.27103
        ],
        [
          -7.19855,
          -39.27107
        ],
        [
          -7.19758,
          -39.2712
        ],
        [
          -7.19736,
          -39.27121
        ],
        [
          -7.19654,
          -39.27131
        ],
        [
          -7.19597,
          -39.27135
        ],
        [
          -7.19543,
          -39.2714
        ],
        [
          -7.19436,
          -39.27148
        ],
        [
          -7.19329,
          -39.27158
        ],
        [
          -7.19321,
          -39.27147
        ],
        [
          -7.19308,
          -39.27134
        ],
        [
          -7.19296,
          -39.27127
        ],
        [
          -7.19271,
          -39.27118
        ],
        [
          -7.19259,
          -39.27134
        ],
        [
          -7.19259,
          -39.27191
        ],
        [
          -7.19261,
          -39.27258
        ],
        [
          -7.19262,
          -39.27333
        ],
        [
          -7.19262,
          -39.27348
        ],
        [
          -7.19264,
          -39.27371
        ],
        [
          -7.19267,
          -39.27396
        ],
        [
          -7.19268,
          -39.274
        ],
        [
          -7.19274,
          -39.27413
        ],
        [
          -7.19294,
          -39.27433
        ],
        [
          -7.19296,
          -39.27437
        ],
        [
          -7.19302,
          -39.27451
        ],
        [
          -7.1931,
          -39.27479
        ],
        [
          -7.19314,
          -39.2749
        ],
        [
          -7.19329,
          -39.27521
        ],
        [
          -7.19348,
          -39.27549
        ],
        [
          -7.1936,
          -39.27564
        ],
        [
          -7.19391,
          -39.27595
        ],
        [
          -7.19409,
          -39.2761
        ],
        [
          -7.19463,
          -39.27624
        ],
        [
          -7.19579,
          -39.2761
        ],
        [
          -7.19628,
          -39.27605
        ],
        [
          -7.19696,
          -39.27598
        ],
        [
          -7.19758,
          -39.2759
        ],
        [
          -7.19782,
          -39.27585
        ],
        [
          -7.19846,
          -39.27578
        ],
        [
          -7.19911,
          -39.2757
        ],
        [
          -7.19941,
          -39.27566
        ],
        [
          -7.20014,
          -39.27555
        ],
        [
          -7.20091,
          -39.27544
        ],
        [
          -7.20136,
          -39.27537
        ],
        [
          -7.20138,
          -39.27572
        ],
        [
          -7.20144,
          -39.27641
        ],
        [
          -7.20146,
          -39.27666
        ],
        [
          -7.20149,
          -39.27697
        ],
        [
          -7.20283,
          -39.27677
        ],
        [
          -7.20318,
          -39.27673
        ],
        [
          -7.20373,
          -39.27667
        ],
        [
          -7.20474,
          -39.27655
        ],
        [
          -7.20496,
          -39.27652
        ],
        [
          -7.2058,
          -39.27641
        ],
        [
          -7.20661,
          -39.2763
        ],
        [
          -7.20814,
          -39.27612
        ],
        [
          -7.20966,
          -39.27595
        ],
        [
          -7.21004,
          -39.2759
        ],
        [
          -7.21091,
          -39.27582
        ],
        [
          -7.21233,
          -39.27562
        ],
        [
          -7.21247,
          -39.2756
        ],
        [
          -7.21309,
          -39.27394
        ],
        [
          -7.21375,
          -39.27227
        ],
        [
          -7.21385,
          -39.27234
        ],
        [
          -7.21444,
          -39.27268
        ],
        [
          -7.21454,
          -39.27287
        ],
        [
          -7.21459,
          -39.27299
        ],
        [
          -7.21473,
          -39.2733
        ],
        [
          -7.21478,
          -39.27345
        ],
        [
          -7.21478,
          -39.27352
        ],
        [
          -7.21473,
          -39.27372
        ],
        [
          -7.21442,
          -39.27481
        ],
        [
          -7.21439,
          -39.27505
        ],
        [
          -7.21431,
          -39.27575
        ],
        [
          -7.21416,
          -39.27697
        ],
        [
          -7.21407,
          -39.27779
        ],
        [
          -7.21391,
          -39.27905
        ],
        [
          -7.21376,
          -39.28026
        ],
        [
          -7.21371,
          -39.28043
        ],
        [
          -7.21363,
          -39.28056
        ],
        [
          -7.2136,
          -39.28057
        ],
        [
          -7.21355,
          -39.28062
        ],
        [
          -7.21353,
          -39.2807
        ],
        [
          -7.21355,
          -39.28074
        ],
        [
          -7.21362,
          -39.28079
        ],
        [
          -7.21366,
          -39.28091
        ],
        [
          -7.21367,
          -39.28094
        ],
        [
          -7.21364,
          -39.28144
        ],
        [
          -7.21359,
          -39.28202
        ],
        [
          -7.21356,
          -39.2822
        ],
        [
          -7.21351,
          -39.28268
        ],
        [
          -7.21194,
          -39.28411
        ],
        [
          -7.21193,
          -39.28416
        ],
        [
          -7.21176,
          -39.28545
        ],
        [
          -7.2115,
          -39.28771
        ],
        [
          -7.21149,
          -39.28785
        ],
        [
          -7.21288,
          -39.28838
        ],
        [
          -7.21285,
          -39.28861
        ],
        [
          -7.21265,
          -39.29051
        ],
        [
          -7.2126,
          -39.29099
        ],
        [
          -7.21247,
          -39.29211
        ],
        [
          -7.21234,
          -39.2933
        ],
        [
          -7.2121,
          -39.2955
        ],
        [
          -7.21205,
          -39.29594
        ],
        [
          -7.21198,
          -39.29642
        ],
        [
          -7.21192,
          -39.29652
        ],
        [
          -7.2119,
          -39.29654
        ],
        [
          -7.21189,
          -39.29657
        ],
        [
          -7.2119,
          -39.29663
        ],
        [
          -7.21191,
          -39.29664
        ],
        [
          -7.21194,
          -39.29668
        ],
        [
          -7.21187,
          -39.29743
        ],
        [
          -7.2118,
          -39.29804
        ],
        [
          -7.21172,
          -39.29891
        ],
        [
          -7.21164,
          -39.29944
        ],
        [
          -7.21159,
          -39.29959
        ],
        [
          -7.21148,
          -39.29982
        ],
        [
          -7.21139,
          -39.29992
        ],
        [
          -7.21059,
          -39.30054
        ],
        [
          -7.21033,
          -39.30074
        ],
        [
          -7.20963,
          -39.30127
        ],
        [
          -7.20852,
          -39.302
        ],
        [
          -7.20775,
          -39.30255
        ],
        [
          -7.20762,
          -39.30264
        ],
        [
          -7.20725,
          -39.3029
        ],
        [
          -7.20654,
          -39.30348
        ],
        [
          -7.20646,
          -39.30357
        ],
        [
          -7.20635,
          -39.30379
        ],
        [
          -7.20633,
          -39.30386
        ],
        [
          -7.20631,
          -39.30394
        ],
        [
          -7.2063,
          -39.30412
        ],
        [
          -7.20623,
          -39.30452
        ],
        [
          -7.2062,
          -39.30455
        ],
        [
          -7.20609,
          -39.3047
        ],
        [
          -7.20599,
          -39.30486
        ],
        [
          -7.2057,
          -39.30561
        ],
        [
          -7.20531,
          -39.30674
        ],
        [
          -7.20493,
          -39.30782
        ],
        [
          -7.2046,
          -39.30874
        ],
        [
          -7.20406,
          -39.3102
        ],
        [
          -7.20384,
          -39.31085
        ],
        [
          -7.2036,
          -39.31153
        ],
        [
          -7.2033,
          -39.31242
        ],
        [
          -7.20295,
          -39.31333
        ],
        [
          -7.20244,
          -39.31467
        ],
        [
          -7.20182,
          -39.31613
        ],
        [
          -7.20141,
          -39.31699
        ],
        [
          -7.20111,
          -39.31764
        ]
      ]
    },
    "practicalSummary": "Conjunto previsto para 2027 na divisa Pedrinhas / Vila Nova, a ~200 m da Rua Joaquim Leandro de Sousa (linha 7006 Via CEU's). Antes de sair do bairro, o ônibus contorna a Vila Nova, passa pelo Aeroporto e entra no Tenente Coelho — chegando à Praça Pe. Cícero em 30 paradas (9,86 km) e ao Cariri Shopping somente após cruzar o Centro e o Antônio Vieira (53 paradas, 16,1 km).",
    "alternativeNote": "Aos domingos, a variante Via CEU's não registra saídas do Aeroporto na tabela da ViaMetro."
  },
  {
    "complexId": "leandro-bezerra",
    "hasRegularBus": false,
    "lineCode": "Sem linha regular",
    "lineName": "Sem cobertura de ônibus regular da ViaMetro",
    "fareFullBRL": 3.0,
    "fareHalfBRL": 1.5,
    "boardingStop": "Rua Interventor Erivando Cruz — AeC (ponto mais próximo)",
    "boardingCoords": [
      -7.19353,
      -39.31627
    ],
    "walkMeters": 3660,
    "walkStraightMeters": 2685,
    "walkMin": 49,
    "walkGeometry": [
      [
        -7.17623,
        -39.29956
      ],
      [
        -7.17699,
        -39.29944
      ],
      [
        -7.17701,
        -39.29953
      ],
      [
        -7.17708,
        -39.29979
      ],
      [
        -7.17723,
        -39.30042
      ],
      [
        -7.17724,
        -39.30045
      ],
      [
        -7.17744,
        -39.3012
      ],
      [
        -7.17774,
        -39.30235
      ],
      [
        -7.17787,
        -39.30295
      ],
      [
        -7.17802,
        -39.30354
      ],
      [
        -7.1782,
        -39.30419
      ],
      [
        -7.17838,
        -39.30473
      ],
      [
        -7.17847,
        -39.30499
      ],
      [
        -7.17866,
        -39.30535
      ],
      [
        -7.17891,
        -39.30571
      ],
      [
        -7.17936,
        -39.30625
      ],
      [
        -7.17977,
        -39.30676
      ],
      [
        -7.17998,
        -39.307
      ],
      [
        -7.18007,
        -39.30715
      ],
      [
        -7.18012,
        -39.30728
      ],
      [
        -7.18018,
        -39.30756
      ],
      [
        -7.1803,
        -39.3081
      ],
      [
        -7.18042,
        -39.30862
      ],
      [
        -7.18053,
        -39.30911
      ],
      [
        -7.18059,
        -39.30938
      ],
      [
        -7.1807,
        -39.30986
      ],
      [
        -7.18129,
        -39.30995
      ],
      [
        -7.18147,
        -39.30998
      ],
      [
        -7.18171,
        -39.31003
      ],
      [
        -7.1821,
        -39.31016
      ],
      [
        -7.18248,
        -39.31031
      ],
      [
        -7.18287,
        -39.31048
      ],
      [
        -7.18336,
        -39.3107
      ],
      [
        -7.18346,
        -39.31075
      ],
      [
        -7.18359,
        -39.31084
      ],
      [
        -7.18369,
        -39.31093
      ],
      [
        -7.18377,
        -39.311
      ],
      [
        -7.18383,
        -39.31109
      ],
      [
        -7.18392,
        -39.31126
      ],
      [
        -7.18395,
        -39.31146
      ],
      [
        -7.18419,
        -39.31315
      ],
      [
        -7.1842,
        -39.31328
      ],
      [
        -7.18426,
        -39.3135
      ],
      [
        -7.18438,
        -39.31382
      ],
      [
        -7.18461,
        -39.31435
      ],
      [
        -7.18486,
        -39.31485
      ],
      [
        -7.1853,
        -39.3156
      ],
      [
        -7.18546,
        -39.31586
      ],
      [
        -7.18567,
        -39.31621
      ],
      [
        -7.18581,
        -39.31642
      ],
      [
        -7.18591,
        -39.31659
      ],
      [
        -7.18633,
        -39.3173
      ],
      [
        -7.18662,
        -39.3178
      ],
      [
        -7.18677,
        -39.31808
      ],
      [
        -7.18685,
        -39.31826
      ],
      [
        -7.18689,
        -39.31839
      ],
      [
        -7.18693,
        -39.31852
      ],
      [
        -7.18696,
        -39.31862
      ],
      [
        -7.18696,
        -39.31867
      ],
      [
        -7.18699,
        -39.31874
      ],
      [
        -7.18703,
        -39.3188
      ],
      [
        -7.18709,
        -39.31883
      ],
      [
        -7.18716,
        -39.31885
      ],
      [
        -7.18723,
        -39.31884
      ],
      [
        -7.18727,
        -39.31882
      ],
      [
        -7.18729,
        -39.31881
      ],
      [
        -7.18734,
        -39.31876
      ],
      [
        -7.18737,
        -39.3187
      ],
      [
        -7.18737,
        -39.3187
      ],
      [
        -7.18738,
        -39.31865
      ],
      [
        -7.18745,
        -39.31857
      ],
      [
        -7.1875,
        -39.31853
      ],
      [
        -7.18755,
        -39.31848
      ],
      [
        -7.18762,
        -39.31845
      ],
      [
        -7.18775,
        -39.31842
      ],
      [
        -7.18811,
        -39.31835
      ],
      [
        -7.18903,
        -39.3182
      ],
      [
        -7.18922,
        -39.31817
      ],
      [
        -7.18941,
        -39.31813
      ],
      [
        -7.18962,
        -39.31807
      ],
      [
        -7.18982,
        -39.318
      ],
      [
        -7.19009,
        -39.31788
      ],
      [
        -7.19027,
        -39.31781
      ],
      [
        -7.19045,
        -39.31775
      ],
      [
        -7.19066,
        -39.31772
      ],
      [
        -7.19213,
        -39.31752
      ],
      [
        -7.1922,
        -39.31751
      ],
      [
        -7.19387,
        -39.31732
      ],
      [
        -7.194,
        -39.31731
      ],
      [
        -7.19393,
        -39.31719
      ],
      [
        -7.19387,
        -39.31708
      ],
      [
        -7.19381,
        -39.31693
      ],
      [
        -7.19376,
        -39.31677
      ],
      [
        -7.1937,
        -39.31658
      ],
      [
        -7.19366,
        -39.31642
      ],
      [
        -7.19363,
        -39.31626
      ],
      [
        -7.19362,
        -39.31611
      ],
      [
        -7.1936,
        -39.31593
      ],
      [
        -7.1935,
        -39.31591
      ],
      [
        -7.19351,
        -39.31615
      ],
      [
        -7.19353,
        -39.31627
      ]
    ],
    "schedule": null,
    "toShopping": null,
    "toPraca": null,
    "practicalSummary": "Apesar de abrigar 900 casas (cerca de 3 mil moradores) na Vila Três Marias, o Residencial Leandro Bezerra I, II e III não possui cobertura de nenhuma linha regular de ônibus da ViaMetro. O ponto regular mais próximo fica a 2,69 km em linha reta (~3,66 km pelas ruas / ~49 min a pé), na Rua Interventor Erivando Cruz (AeC, linhas 7001/7001.1).",
    "alternativeNote": "Na prática, os moradores dependem de transporte complementar (topics/vans, sem subsídio tarifário municipal integrado ao cartão eletrônico), mototáxi ou transporte por aplicativo."
  }
];

export const BUS_PROFILES_BY_ID: Record<string, ComplexBusProfile> = Object.fromEntries(
  COMPLEX_BUS_PROFILES.map((p) => [p.complexId, p])
);

export function formatMinutesLabel(minutes: number): string {
  if (minutes < 60) return `~${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `~${h}h` : `~${h}h${String(m).padStart(2, '0')}`;
}
