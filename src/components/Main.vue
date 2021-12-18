<template>
  <select class="month-selector" v-model="currentMonth">
    <option v-for="month in months" :value="month.value" :key="month.value">
      {{ month.title }}
    </option>
  </select>
  <div class="header">
    <div class="cell">
      <div>参拍人数</div>
      <div>{{ header.total }}</div>
    </div>
    <div class="cell">
      <div>中拍人数 / 中拍率</div>
      <div>{{ header.winners }} / {{ header.percent }}%</div>
    </div>
    <div class="cell">
      <div>最低成交价/ 平均成交价</div>
      <div>{{ header.min }} / {{ header.avg }}</div>
    </div>
    <div class="cell">
      <div>最低价成交截止时间(这以后再出最低价就没用了):</div>
      <div>{{ header.minAt }}</div>
    </div>
    <div />
    <div class="cell">
      <div>最低价成交顺序（前多少出最低价的拍中了）</div>
      <div>{{ header.minSeq }}</div>
    </div>
  </div>
  <div class="container">
    <canvas ref="canvasRef" width="400" height="400"></canvas>
  </div>
</template>

<script setup>
// return `参拍人数: ${meta.total} 中拍人数:${Math.round(
//   (meta.total * meta.percent) / 100
// )} 中拍率${meta.percent}%  最低成交价:${meta.min} 平均成交价:${
//   meta.avg
// } 最低价成交截止时间(这以后再出最低价就没用了):${
//   meta.minAt
// } 最低价成交顺序（前多少个出最低价的人拍中了）:${meta.minSeq}`;
import { onMounted, ref, computed, watchEffect, watch, shallowRef } from "vue";

function range(start, end) {
  return Array.apply(null, Array(end - start)).map((_, i) => start + i);
}
const canvasRef = ref(null);

const month = 12;
const months = ref(
  range(1, month).map((i) => ({
    title: `${i}月`,
    value: i,
  }))
);
const currentMonth = ref(month - 1);

function adaptData(data) {
  return [
    {
      label: title1,
      backgroundColor: bg11,
      borderColor: bg12,
      data: data[0],
    },
    {
      label: title2,
      backgroundColor: bg21,
      borderColor: bg22,
      data: data[1],
    },
  ];
}
let bg11 = "#feb2b2";
let bg12 = "#e53e3e";
let title1 = "最低价";
let bg21 = "#d5bcfa";
let bg22 = "#805ad5";
let title2 = "最高价";
const randomArrayInRange = (min, max, n) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const jul = [
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
  Nov,
  Oct,
  Sep,
  Aug,
  jul,
  [
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

let myChart = shallowRef(null);

function titleFromMeta(meta) {
  return {
    total: meta.total,
    winners: Math.round((meta.total * meta.percent) / 100),
    percent: meta.percent,
    min: meta.min,
    avg: meta.avg,
    minAt: meta.minAt,
    minSeq: meta.minSeq,
  };
}

function renderChart() {
  var ctx = canvasRef.value.getContext("2d");
  const labels = range(45, 60);
  const currentData = datas[currentMonth.value - 1];
  const meta = currentData[2];
  const data = {
    labels: labels,
    datasets: adaptData(currentData),
  };
  const config = {
    type: "line",
    data,
    options: {
      responsive: true,
    },
  };

  myChart.value = new Chart(ctx, config);
}

const header = computed(() => {
  return titleFromMeta(datas[currentMonth.value - 1][2]);
});

function updateChart() {
  const data = adaptData(datas[currentMonth.value - 1]);
  const chart = myChart.value;
  chart.data.datasets[0].data = data[0].data;
  chart.data.datasets[1].data = data[1].data;
  chart.update();
}

onMounted(() => {
  renderChart();
});
watch(currentMonth, () => {
  updateChart();
});
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
.month-selector {
  width: 100px;
  height: 30px;
}
.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.header > div {
  display: flex;
  justify-content: space-between;
  margin: 4px 8px;
}
</style>
