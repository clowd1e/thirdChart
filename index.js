let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['Я', 'не', 'знаю', 'что', 'мне', 'писать'],
        datasets: [{
            label: 'Че это',
            backgroundColor: 'rgba(249, 250, 0, 1)',
            borderColor: 'rgb(225, 0, 0)',
            data: [4, 3, 6, 1, 2, 3]
        }]
    },

    // Configuration options go here
    options: {}
});