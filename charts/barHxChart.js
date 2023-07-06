import Chart from './chart.js';

const ctx = document.getElementById('chart');

console.log(ctx)

const options = {
  type: 'bar',
  data: [10, 20, 30]

}

export const hxChart = new Chart(ctx, options);

