// jQuery function to create a chart for each of the HighCharts Chart Options
// JSON object (_chartit_hco_array) passed to web page from the view. 
// window.addEvent('domready', function(){});
// console.log('lalalala');
window.addEvent('domready', function() {
	_chartit_hco_array.each(function(chartoptions, index) {
        fmtr = function() {
                        return this.y > 0 ? this.point.name : null;
        };
        for(var k=0; k< chartoptions.series.length; k++){
            chartoptions.series.dataLabels=  {formatter: ftr};
        }
		// console.log(chartoptions);
		var chart = new Highcharts.Chart(chartoptions);
	});
});

