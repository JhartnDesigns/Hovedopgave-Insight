/*
For more info about chart.js visit the website -
Chart.js | Open source HTML5 Charts for your website
https://www.chartjs.org
*/
let chartContainer = document.getElementById('chartContainer').getContext('2d');
let chart = new Chart(chartContainer, {
  // The type of chart we want to create
  type: 'line',
  // The data for our dataset
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Variation A',
      borderColor: '#2D142C',
      fill: 'false',
      tension: '0',
      pointRadius: '6',
      data: [3, 4, 8, 2, 3, 4, 6, 4, 9, 5, 2, 4]
    },

    {
      label: 'Variation B',
      borderColor: '#ff8624',
      fill: 'false',
      tension: '0',
      pointRadius: '6',
      data: [8, 6, 5, 10, 6, 2, 6, 5, 3, 2, 1, 3]
    },

    {
      label: 'Variation C',
      borderColor: '#C72C41',
      fill: 'false',
      tension: '0',
      pointRadius: '6',
      data: [10, 12, 11, 14, 8, 14, 12, 10, 8, 12, 10, 14]
    }]
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
    }
  }

});
