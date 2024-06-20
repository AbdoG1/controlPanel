import "../../../node_modules/chart.js/dist/chart.min.js";

const chartCanvas= document.getElementById("example-chart");
const data= JSON.parse(chartCanvas.parentElement.dataset.values);
const brandColor= (window.getComputedStyle(chartCanvas)).getPropertyValue("--color-brand");


(function () {
    var ctx = document.getElementById('example-chart').getContext('2d');
    const chart= new Chart(chartCanvas, {
        type: "line",
        data: {
            labels: ["ديسمبر","نوفمبر","اكتوبر","سبتمبر","اغسطس","يونيو","ماي","ابريل","مارس","فبراير"],
            datasets: [{
                label: "مبيعات الشهر",
                data: data,
                borderColor: brandColor,
                backgroundColor: "transparent",
                lineTension: 0.2
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    position: "top"
                }]
            }
        }
    });

    const navigation= document.querySelector(".c-table__navigation");
    const randomArray= (mylength, max) => Array.from({length: mylength}, () => Math.round(Math.random()*max));

    navigation.addEventListener("click", () => {
        chart.data.datasets[0].data= randomArray(12, 1200);
        chart.update();
    })

})();