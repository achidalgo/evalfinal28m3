/* Login */
$('.message a').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

/*Web 1*/
$("article.crono").scrollTop(300);

/*web 2*/
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['EEUU', 'BRASIL', 'RUSIA', 'R.UNIDO', 'INDIA', 'ESPAÑA', 'ITALIA', 'PERÚ', 'FRANCIA', 'ALEMANIA', ],
        datasets: [{
            label: 'Países Con Mas Afectados',
            data: [2000464, 772416, 493023, 291588, 276583, 242280, 235763, 208823, 192068, 186522],
            backgroundColor: [
                '#c00000',
                '#00ffff',
                '#D9F812',
                '#4DF812 ',
                '#F87012',
                '#f82cf8  ',
                '#6212F8 ',
                '#fe3d2c ',
                '#F4F6F7',
                '#ccff00 ',
            ],
            borderColor: [
                '#c00000',
                '#00ffff',
                '#D9F812',
                '#4DF812 ',
                '#F87012',
                '#f82cf8  ',
                '#6212F8 ',
                '#fe3d2c ',
                '#F4F6F7',
                '#ccff00 ',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
/*web 3*/
$(document).ready(function() {

    $("button").click(function() {
        $("#show").show();
    });
});
/*web 4*/
$('.carousel').carousel()