Highcharts.chart('container', {

    title: {
        text: 'Mi primera grafica',
        align: 'left'
    },

    subtitle: {
        text: 'Mi primera prueba',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Numero de empleados'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Desde: 2010 al 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Ejemplo de prueba',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
