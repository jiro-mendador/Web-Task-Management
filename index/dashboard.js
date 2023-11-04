window.onload = function () {

  //loads the chart after the main content loads
  loadChart(document.querySelector("#graph"));

  //util func
  const elem = (select) => document.querySelector(select);

  //open and close menu
  elem("#menu").onclick = function () {
    elem("nav").style.display = "flex";
  }

  elem("#close-menu").onclick = function () {
    elem("nav").style.display = "none";
  }

}

function loadChart(element) {
  new Chart(element, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Added',
        data: [10, 12, 19, 3, 5, 2, 3],
        barThickness: 10,
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: "#543ca6"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function loadContent(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(this.responseText);
      } else {
        reject(new Error("Failed to load content"));
      }
    }
    xhttp.open("GET", url);
    xhttp.send();
  });
}