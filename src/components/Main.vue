<template>


  <select class="year-selector" v-model="currentYear">


    <option v-for="year in years" :value="year" :key="year">
       {{ year }}
    </option>


  </select>


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
import datas from "./datas";

function range(start, end) {
  return Array.apply(null, Array(end - start)).map((_, i) => start + i);
}
const canvasRef = ref(null);

const currentYear = ref(2021);
const months = ref(
  range(1, 13)
    .map((i) => ({
      title: `${i}月`,
      value: i,
    }))
    .filter((x) =>
      datas
        .filter((data) => data[0][0] == currentYear.value)
        .some((y) => y[0][1] == x.value)
    )
);

watch(currentYear, () => {
  const validData = datas.filter((data) => data[0][0] == currentYear.value);
  currentMonth.value = 1;
  months.value = range(1, 13)
    .map((i) => ({
      title: `${i}月`,
      value: i,
    }))
    .filter((x) => validData.some((y) => y[0][1] == x.value));
});

const years = [2021, 2022];

const currentMonth = ref(1);

function adaptData(data) {
  return [
    {
      label: title1,
      backgroundColor: bg11,
      borderColor: bg12,
      data: data[1],
    },
    {
      label: title2,
      backgroundColor: bg21,
      borderColor: bg22,
      data: data[2],
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
  const currentData = datas.filter((data) => data[0][0] == currentYear.value)[
    currentMonth.value - 1
  ];
  const meta = currentData[3];
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
  const currentData = datas.filter((data) => data[0][0] == currentYear.value)[
    currentMonth.value - 1
  ];
  const data = adaptData(currentData);
  const chart = myChart.value;
  chart.data.datasets[0].data = data[0].data;
  chart.data.datasets[1].data = data[1].data;
  chart.update();
}

onMounted(() => {
  renderChart();
});
watch([currentYear, currentMonth], () => {
  updateChart();
});
</script>


<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
}
.year-selector {
  margin-right: 16px;
}
.year-selector,
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


