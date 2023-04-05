// Sample Data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  values: [200, 450, 300, 150, 50, 100, 250, 175, 225, 300, 400, 150]
};

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnut-chart').getContext('2d');
const doughnutChart = new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: data.labels,
    datasets: [{
      label: "Tiego Ouedraogo",
      data: data.values,
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#8a2be2",
        "#3cb371",
        "#CD5C5C",
        "#191970",
        "#4682B4",
        "#000080",
        "#FFA07A",
        "#FF4500",
        "#7B68EE"
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Monthly Sales'
    }
  }
});

// Horizontal Bar Chart
const horizontalCtx = document.getElementById('horizontal-bar-chart').getContext('2d');
const horizontalChart = new Chart(horizontalCtx, {
  type: 'horizontalBar',
  data: {
    labels: data.labels,
    datasets: [{
      label: "Tiego Ouedraogo",
      data: data.values,
      backgroundColor: "#36A2EB"
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Monthly Sales'
    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
