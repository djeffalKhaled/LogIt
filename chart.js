let myChart = document.getElementById("myChart").getContext('2d');
let mainChart;

function updateChart() {
    const historyTableBody = document.querySelector('.HistoryTableBody');
    const rows = historyTableBody.rows;
    console.log(rows);

    let dataArr = [];
    for (let i = 0; i < rows.length; i++) {
        let totalMoney = rows[i].getElementsByTagName('td')[3].textContent;
        dataArr.push(totalMoney);
    }
    console.log("DATA:", dataArr);
    mainData = dataArr.reverse()
    localStorage.setItem('chartData', mainData);

    mainChart.destroy();
    mainChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [{
                label: 'Money',
                data: mainData
            }],
    
        },
        options: {}
    });
}


document.addEventListener('DOMContentLoaded', function(event) {
    let mainData = localStorage.getItem('chartData');
    console.log("Loaded chart data: ", mainData);
    if (!mainData) {
        mainData = [0, 0, 0, 0, 0, 0];
    }
    
    mainChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6],
            datasets: [{
                label: 'Money',
                data: mainData
            }],
    
        },
        options: {}
    });
});