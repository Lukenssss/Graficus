const width = window.outerWidth + window.innerWidth
const height = window.outerHeight + window.innerHeight

functionPlot({
    target: '#test',
    grid: true,
    disableZoom: false,
    /* yAxis: {
        domain: [-50, 50],
    }, */
    width: width,
    height: height,
    data: [{
        fn: 'cos(x*2)',
    }]
})