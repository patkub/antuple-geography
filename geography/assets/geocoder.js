var geocoder, map, layer;
var stateBorders;
var statePolygon = [];

/**
* Initialize the map.
*/
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		scaleControl: true
	});
	
	layer = new google.maps.FusionTablesLayer({
		map: null,
		heatmap: { enabled: false },
		query: {
			select: "col3\x3e\x3e1",
			from: "11ehP4Wuqzjozhe2iA3hKqhaC0r78Aquqe0QnYt1E",
			where: ""
		},
		options: {
			styleId: 2,
			templateId: 2
		},
		styles: [{
            markerOptions: {
                optimized: false
            }
		}]
	});
	
	geocoder = new google.maps.Geocoder();
	defineStateBorders();
	makeStates();
	markRegions();
	populateMap();
	sidebar();
}

/**
 * Show population overlay.
 */
function showPopulation() {
	clearPolygons();
	layer.setMap(map);
}

/**
 * Hide population overlay.
 */
function hidePopulation() {
	clearPolygons();
	layer.setMap(null);
}

/**
 * Sidebar function
 */
function sidebar() {
	google.maps.event.addListener(map, 'click', function(event) {
		$(".sidebar.bottom").trigger("sidebar:close");
	});
}

/**
 * Create state polygons
 */
function makeStates() {
	var count = 0;
	for (stateCodes in stateBorders) {
		statePolygon[count] = createPolyRegion(stateCodes);
		statePolygon[count].setMap(map);
		count++;
	}
}

/**
 * Make map regions.
 */
function markRegions() {
	var count = 0;
	
	for (stateCodes in stateBorders) {		
		if (stateCodes == 'Washington' || stateCodes == "Montana" || stateCodes == "Oregon" || stateCodes == "Idaho" || stateCodes == "Wyoming" || stateCodes == "California" || stateCodes == "Nevada" || stateCodes == "Utah" || stateCodes == "Colorado" || stateCodes == "Alaska" || stateCodes == "Hawaii")
		{
			statePolygon[count].setOptions({
				strokeColor: '#0033cc',
				strokeOpacity: 0.40,
				strokeWeight: 2,
				fillColor: '#d7c8ff',
				fillOpacity: 0.50,
				geodesic: true,
				visible: true
			});
		}
		else if (stateCodes == 'North Dakota' || stateCodes == 'South Dakota' || stateCodes == 'Nebraska' || stateCodes == 'Kansas' || stateCodes == 'Minnesota' || stateCodes == 'Iowa' || stateCodes == 'Missouri' || stateCodes == 'Wisconsin' || stateCodes == 'Illinois' || stateCodes == 'Michigan' || stateCodes == 'Indiana' || stateCodes == 'Ohio')
		{
			statePolygon[count].setOptions({
				strokeColor: '#0033cc',
				strokeOpacity: 0.40,
				strokeWeight: 2,
				fillColor: '#bef0fa',
				fillOpacity: 0.50,
				geodesic: true,
				visible: true
			});
		}
		else if (stateCodes == 'Arizona' || stateCodes == 'New Mexico' || stateCodes == 'Oklahoma' || stateCodes == 'Texas')
		{
			statePolygon[count].setOptions({
				strokeColor: '#0033cc',
				strokeOpacity: 0.40,
				strokeWeight: 2,
				fillColor: '#ffff99',
				fillOpacity: 0.50,
				geodesic: true,
				visible: true
			});
		}
		else if (stateCodes == 'Arkansas' || stateCodes == 'Louisiana' || stateCodes == 'Mississippi' || stateCodes == 'Alabama' || stateCodes == 'Tennessee' || stateCodes == 'Kentucky' || stateCodes == 'Florida' || stateCodes == 'Georgia' || stateCodes == 'North Carolina' || stateCodes == 'South Carolina' || stateCodes == 'Virginia' || stateCodes == 'West Virginia')
		{
			statePolygon[count].setOptions({
				strokeColor: '#0033cc',
				strokeOpacity: 0.40,
				strokeWeight: 2,
				fillColor: '#9bff9b',
				fillOpacity: 0.50,
				geodesic: true,
				visible: true
			});
		}
		else if (stateCodes == 'Main' || stateCodes == 'Vermont' || stateCodes == 'New Hampshire' || stateCodes == 'Massachusetts' || stateCodes == 'Connecticut' || stateCodes == 'Rhode Island' || stateCodes == 'New York' || stateCodes == 'New Jersey' || stateCodes == 'Delaware' || stateCodes == 'Maryland' || stateCodes == 'Pennsylvania' || stateCodes == 'Maine')
		{
			statePolygon[count].setOptions({
				strokeColor: '#0033cc',
				strokeOpacity: 0.40,
				strokeWeight: 2,
				fillColor: '#ff96c8',
				fillOpacity: 0.50,
				geodesic: true,
				visible: true
			});
		}
		
		google.maps.event.addListener(statePolygon[count], 'mouseover', function (event) {
			// mouse over state, darken
			this.setOptions({
				fillOpacity: 0.80
			});
		});
		
		google.maps.event.addListener(statePolygon[count], 'mouseout', function (event) {
			// mouse out, reset
			this.setOptions({
				fillOpacity: 0.50
			});
		});
		
		count++;
	}
}

/**
 * Clear state polygons.
 */
function clearPolygons() {
	var count = 0;
	for (stateCodes in stateBorders) {
		statePolygon[count].setOptions({
			visible: false
		});
		count++;
	}
}

/**
 * Create a polygon for a region.
 */
function createPolyRegion(stateCode) {
	var polygon = new google.maps.Polygon({
		paths: stateBorders[stateCode]
	});
	return polygon;
}

/**
 * Center the map view at a country.
 * @param country - country to center map view around.
 */
function centerMap(country) {
	geocoder.geocode( { 'address': country }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
		} else {
		  alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

/**
 * Add a marker with sidebar content to the map.
 * @param addr - address to add to the map.
 * @param info - optional sidebar info.
 * @param icon - optional custom icon.
 */
function geocodeAddress(addr, info, icon) {
	geocoder.geocode( { 'address': addr }, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			
			// set optimized to false to fix mobile glitch
			var markerCountry = new google.maps.Marker({
			   map: map,
			   position: results[0].geometry.location,
			   optimized: false
			});
			
			if (info) {
				markerCountry.addListener('click', function() {
					document.getElementById("mapinfo").innerHTML=info;
					$(".sidebar.bottom").trigger("sidebar:open");
				});
			}
			
			if (icon) {
				markerCountry.setIcon(icon);
			}
		} else {
		  alert("Geocode was not successful for the following reason: " + status);
		}
	});
}

jQuery(function ($) {
	/**
	 * Display regions.
	 */
    $(document).on('change', 'input:radio[id^="radio_regions"]', function (event) {
		hidePopulation();
		markRegions();
		$(".sidebar.bottom").trigger("sidebar:close");
    });
	
	/**
	 * Display red/blue states.
	 */
	$(document).on('change', 'input:radio[id^="radio_red_blue"]', function (event) {
		hidePopulation();
		markRegions();
		
		// 2012 election red/blue states
		var i = 0;		
		for (stateCodes in stateBorders) {
			if (stateCodes == 'California' || 
				stateCodes == 'Colorado' || 
				stateCodes == 'Connecticut' || 
				stateCodes == 'Delaware' || 
				stateCodes == 'Florida' || 
				stateCodes == 'Illinois' || 
				stateCodes == 'Iowa' || 
				stateCodes == 'Maine' || 
				stateCodes == 'Maryland' || 
				stateCodes == 'Massachusetts' || 
				stateCodes == 'Michigan' || 
				stateCodes == 'Minnesota' || 
				stateCodes == 'Nevada' || 
				stateCodes == 'New Hampshire' || 
				stateCodes == 'New Jersey' || 
				stateCodes == 'New Mexico' || 
				stateCodes == 'New York' || 
				stateCodes == 'Ohio' || 
				stateCodes == 'Oregon' || 
				stateCodes == 'Pennsylvania' || 
				stateCodes == 'Rhode Island' || 
				stateCodes == 'Vermont' || 
				stateCodes == 'Virginia' || 
				stateCodes == 'Washington' || 
				stateCodes == 'Wisconsin'
			)
			{
				// blue state
				statePolygon[i].setOptions({
					strokeColor: '#2f2f2f',
					fillColor: '#0000ff',
					visible: true
				});
			}
			else
			{
				// red state
				statePolygon[i].setOptions({
					strokeColor: '#2f2f2f',
					fillColor: '#ff0000',
					visible: true
				});
			}
			
			i++;
		}
		
		$(".sidebar.bottom").trigger("sidebar:close");
    });
	
	/**
	 * Clear overlays
	 */
    $(document).on('change', 'input:radio[id^="radio_clear"]', function (event) {
		hidePopulation();
		$(".sidebar.bottom").trigger("sidebar:close");
    });
	
	/**
	 * Show population
	 */
    $(document).on('change', 'input:radio[id^="radio_population"]', function (event) {
		showPopulation();
		$(".sidebar.bottom").trigger("sidebar:close");
    });	
});

/**
 * Populate the map.
 */
function populateMap() {
	// geocode countries
	geocodeAddress('USA', usaString, 'http://maps.google.com/mapfiles/arrow.png');
	geocodeAddress('Poland', polandString, 'http://maps.google.com/mapfiles/arrow.png');
	
	// geocode landmarks per state
	geocodeAddress('Selma, AL 36703', edmundPettusBridgeString);
	geocodeAddress('60 Gold St, Hartford, CT 06103', ancientBuryingGroundString);
	geocodeAddress('Arizona 86052', grandCanyonString);
	geocodeAddress('600 Museum Way, Bentonville, AR 72712', crystalBridgesString);
	geocodeAddress('750 Hearst Castle Rd, San Simeon, CA 93452', hearstCastleString);
	geocodeAddress('Canyon Rd, Lumpkin, GA 31815', providenceCanyonString);
	geocodeAddress('Arches Scenic Dr, Moab, UT 84532', balancedRockString);
	geocodeAddress('350 Corvette Dr, Bowling Green, KY 42101', nationalCorvetteMuseumString);
	
	// position the map
	centerMap('USA');
}
