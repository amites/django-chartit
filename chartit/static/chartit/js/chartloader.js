// jQuery function to create a chart for each of the HighCharts Chart Options
// JSON object (_chartit_hco_array) passed to web page from the view. 
// window.addEvent('domready', function(){});
// console.log('lalalala');
window.addEvent('domready', function() {
	_chartit_hco_array.each(function(chartoptions, index) {
        var fmtr = function() {
                        return (this.value).format({precision: 1,scientific: false});
        };
        for(var k=0; k< chartoptions.series.length; k++){
            chartoptions.yAxis[0].labels = {formatter: fmtr};
        }
		// console.log(chartoptions);
		var chart = new Highcharts.Chart(chartoptions);
	});
});

