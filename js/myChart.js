const fsc = document.getElementById("frontSkillChart");
const frontSkillChart = new Chart(fsc, {
    type: 'horizontalBar',
    data: {
      labels: ["html/css", "javascript", "react", "typescript"],
      datasets: [{
          label: '',
          backgroundColor: [
              "rgba(233, 98, 40, 0.8)",
              "rgba(245, 209, 58, 0.8)",
              "rgba(97, 218, 251, 0.8)",
              "rgba(47, 116, 192, 0.8)",
          ],
          borderColor: [
              "rgba(233, 98, 40, 0.9)",
              "rgba(245, 209, 58, 0.9)",
              "rgba(97, 218, 251, 0.9)",
              "rgba(47, 116, 192, 0.9)",
          ],
          borderWidth: 2,
          data: [75, 75, 50, 30]
      }]
    },
    options: {
      legend: {
          display: false,
      },
      scales: {
          xAxes: [{
              ticks: {
                  suggestedMax: 100,
                  suggestedMin: 0,
                  stepSize: 10,
                  callback: function (value, index, values) {
                      return value + '%';
                  }
              },
          }]
      }
    }
});

const bsc = document.getElementById("backSkillChart");
const backSkillChart = new Chart(bsc, {
  type: 'horizontalBar',
  data: {
    labels: ["java", "sql", "Node.js", "python", "php", "ruby"],
    datasets: [{
        label: '',
        backgroundColor: [
            "rgba(228, 135, 34, 0.8)",
            "rgba(0, 94, 134, 0.8)",
            "rgba(113, 168, 96, 0.8)",
            "rgba(53, 115, 167, 0.8)",
            "rgba(115, 119, 173, 0.8)",
            "rgba(211, 51, 46, 0.8)",
        ],
        borderColor: [
            "rgba(228, 135, 34, 0.9)",
            "rgba(0, 94, 134, 0.9)",
            "rgba(113, 168, 96, 0.9)",
            "rgba(53, 115, 167, 0.9)",
            "rgba(115, 119, 173, 0.9)",
            "rgba(211, 51, 46, 0.9)",
        ],
        borderWidth: 2,
        data: [70, 70, 70, 60, 20, 15]
    }]
  },
  options: {
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            ticks: {
                suggestedMax: 100,
                suggestedMin: 0,
                stepSize: 10,
                callback: function (value, index, values) {
                    return value + '%';
                }
            },
        }]
    }
  }
});

const tsc = document.getElementById("toolSkillChart");
const toolSkillChart = new Chart(tsc, {
  type: 'horizontalBar',
  data: {
    labels: ["Git", "GitHub", "Slack", "Trello"],
    datasets: [{
        label: '',
        backgroundColor: [
            "rgba(113, 129, 123, 0.8)",
            "rgba(113, 129, 123, 0.8)",
            "rgba(113, 129, 123, 0.8)",
            "rgba(113, 129, 123, 0.8)",
        ],
        borderColor: [
            "rgba(113, 129, 123, 0.9)",
            "rgba(113, 129, 123, 0.9)",
            "rgba(113, 129, 123, 0.9)",
            "rgba(113, 129, 123, 0.9)",
        ],
        borderWidth: 2,
        data: [70, 70, 50, 40]
    }]
  },
  options: {
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            ticks: {
                suggestedMax: 100,
                suggestedMin: 0,
                stepSize: 10,
                callback: function (value, index, values) {
                    return value + '%';
                }
            },
        }]
    }
}
});