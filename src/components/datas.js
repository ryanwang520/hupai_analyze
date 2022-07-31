const Jan2022 = [
  [2022, 1],
  [
    91700, 91800, 91900, 92000, 92100, 92100, 92200, 92200, 92300, 92400, 92500,
    92600, 92600, 92700, 92800,
  ],
  [
    92300, 92400, 92500, 92600, 92700, 92700, 92800, 92800, 92900, 93000, 93100,
    93200, 93200, 93300, 93400,
  ],
  {
    min: 93100,
    avg: 93190,
    minAt: 56,
    minSeq: 2118,
    total: 201873,
    percent: 5.9,
  },
];

const Dec = [
  [2021, 12],
  [
    90200, 90300, 90400, 90400, 90500, 90500, 90500, 90500, 90500, 90500, 90500,
    90500, 90500, 90500, 90500,
  ],
  [
    90800, 90900, 91000, 91000, 91100, 91100, 91100, 91100, 91100, 91100, 91100,
    91100, 91100, 91100, 91100,
  ],
  {
    min: 90900,
    avg: 91021,
    minAt: 46,
    minSeq: 2806,
    total: 204863,
    percent: 5.5,
  },
];

const jul = [
  [2021, 7],
  [
    91500, 91500, 91600, 91600, 91600, 91600, 91600, 91700, 91700, 91800, 92000,
    92100, 92100, 92300, 92300,
  ],
  [
    91800, 91800, 91900, 91900, 91900, 91900, 91900, 92000, 92000, 92100, 92300,
    92400, 92400, 92600, 92600,
  ],
  {
    min: 92400,
    avg: 92471,
    minAt: 58,
    minSeq: 697,
    total: 236237,
    percent: 4.7,
  },
];
const Aug = [
  [2021, 8],
  [
    91000, 91100, 91200, 91200, 91300, 91300, 91300, 91300, 91300, 91300, 91300,
    91400, 91500, 91600, 91700,
  ],
  [
    91300, 91400, 91500, 91500, 91600, 91600, 91600, 91600, 91600, 91600, 91600,
    91700, 91800, 91900, 92000,
  ],
  {
    min: 91800,
    avg: 91889,
    minAt: 58,
    minSeq: 1896,
    total: 236233,
    percent: 4.5,
  },
];

const Sep = [
  [2021, 9],
  [
    90900, 90900, 90900, 90900, 91000, 91000, 91000, 91000, 91000, 91000, 91000,
    91000, 91000, 91000, 91300,
  ],
  [
    91200, 91200, 91200, 91200, 91300, 91300, 91300, 91300, 91300, 91300, 91300,
    91300, 91400, 91400, 91600,
  ],
  {
    min: 91400,
    avg: 91469,
    minAt: 58,
    minSeq: 4906,
    total: 235068,
    percent: 4.6,
  },
];

const Nov = [
  [2021, 11],
  [
    90400, 90500, 90600, 90700, 90700, 90700, 90700, 90700, 90700, 90700, 90700,
    90700, 90800, 90900, 91000,
  ],

  [
    90700, 90800, 90900, 91000, 91000, 91000, 91000, 91000, 91000, 91000, 91000,
    91000, 91100, 91200, 91300,
  ],
  {
    min: 91400,
    avg: 91484,
    minAt: 57,
    minSeq: 3164,
    total: 223360,
    percent: 5.0,
  },
];

const Oct = [
  [2021, 10],
  [
    90400, 90500, 90600, 90700, 90800, 90800, 90800, 90800, 90900, 91100, 91200,
    91200, 91400, 91400, 91500,
  ],
  [
    90700, 90800, 90900, 91000, 91100, 91100, 91100, 91100, 91200, 91400, 91500,
    91500, 91700, 91700, 91800,
  ],
  {
    min: 91800,
    avg: 91888,
    minAt: 57,
    minSeq: 359,
    total: 217837,
    percent: 5.0,
  },
];
let datas = [
  Jan2022,
  Dec,
  Nov,
  Oct,
  Sep,
  Aug,
  jul,
  [
    [2021, 6],
    [
      90700, 90700, 90700, 90700, 90800, 90800, 90800, 90800, 90800, 90800,
      90800, 90800, 90900, 91000, 91200,
    ],
    [
      91000, 91000, 91000, 91000, 91000, 91000, 91000, 91000, 91000, 91000,
      91000, 91000, 91200, 91300, 91500,
    ],
    {
      min: 91200,
      avg: 91265,
      minAt: 58,
      minSeq: 3128,
      total: 200119,
      percent: 5.4,
    },
  ],
  [
    [2021, 5],
    [
      90800, 90800, 90800, 90900, 90900, 91000, 91000, 91000, 91000, 91000,
      91000, 91000, 91100, 91200, 91400,
    ],
    [
      91000, 91000, 91000, 91200, 91200, 91300, 91300, 91300, 91300, 91300,
      91300, 91300, 91400, 91500, 91700,
    ],

    {
      min: 91400,
      avg: 91465,
      minAt: 58,
      minSeq: 998,
      total: 215395,
      percent: 5.1,
    },
  ],
  [
    [2021, 4],
    [
      91600, 91700, 91900, 91900, 92000, 92100, 92200, 92400, 92500, 92500,
      92600, 92700, 92700, 92700, 92800,
    ],
    [
      91900, 92000, 92200, 92200, 92300, 92400, 92500, 92700, 92800, 92800,
      92900, 93000, 93000, 93000, 93100,
    ],
    {
      min: 92800,
      avg: 92887,
      minAt: 56,
      minSeq: 130,
      total: 238896,
      percent: 4.7,
    },
  ],
  [
    [2021, 3],
    [
      91400, 91400, 91600, 91600, 91800, 91800, 91900, 91900, 92100, 92100,
      92200, 92300, 92400, 92400, 92500,
    ],
    [
      91700, 91700, 91900, 91900, 92100, 92100, 92200, 92200, 92400, 92400,
      92500, 92600, 92700, 92700, 92800,
    ],

    {
      min: 92500,
      avg: 92594,
      minAt: 56,
      minSeq: 1191,
      total: 249403,
      percent: 4.31,
    },
  ],
  [
    [2021, 2],
    [
      91000, 91000, 91000, 91000, 91200, 91200, 91300, 91300, 91300, 91300,
      91300, 91300, 91400, 91400, 91600,
    ],
    [
      91300, 91300, 91400, 91400, 91500, 91500, 91600, 91600, 91600, 91600,
      91600, 91600, 91700, 91700, 91900,
    ],
    {
      min: 91700,
      avg: 91719,
      minAt: 58,
      minSeq: 3926,
      total: 242366,
      percent: 5.1,
    },
  ],
  [
    [2021, 1],
    [
      90900, 91000, 91000, 91100, 91100, 91200, 91200, 91200, 91300, 91300,
      91400, 91500, 91600, 91700, 91700,
    ],
    [
      91200, 91300, 91300, 91400, 91400, 91500, 91500, 91500, 91600, 91600,
      91700, 91800, 91900, 92000, 92000,
    ],
    {
      min: 91800,
      avg: 91863,
      minAt: 58,
      minSeq: 1649,
      total: 233761,
      percent: 5.7,
    },
  ],
];
datas.reverse();
export default datas;
