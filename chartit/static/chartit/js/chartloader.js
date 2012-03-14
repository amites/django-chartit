// jQuery function to create a chart for each of the HighCharts Chart Options
// JSON object (_chartit_hco_array) passed to web page from the view. 
// window.addEvent('domready', function(){});
window.addEvent('domready', function() {
	_chartit_hco_array.each(function(chartoptions, index) {
		chart = new Highcharts.Chart(chartoptions);
	});
});

