// wait for DOM to load before running JS
$(function() {

  var quakesUrl = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
  var $quakesList = $('#quakes-list');
  var map;

  $.get('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson', function(data) {
			console.log(data.features);
			var quakeResults = data.features;
			console.log(quakeResults);

			var time = new Date().getTime();
			var date = new Date(time);
			console.log(date.toString());
			console.log(time.toString());

		  // Compile handlebars template
		  var source = $('#quakes-template').html();
		  var template = Handlebars.compile(source);

		  // Pass in HTML and append to page
		  var quakeHTML = template({quakes: quakeResults});
		  $quakesList.append(quakeHTML);
		});


});