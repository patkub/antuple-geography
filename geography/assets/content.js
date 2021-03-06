var usaString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">USA</h1>'+
'<div id="bodyContent">'+
'<div id="q_opt" class="btn-group" data-toggle="buttons" align="center">'+
'<label class="btn btn-default" id="radio_regions">'+
	'<input id="radio_regions" name="op" type="radio" value="0" />Regions</label>'+
'<label class="btn btn-default" id="radio_red_blue">'+
	'<input id="radio_red_blue" name="op" type="radio" value="1" />Red / Blue States</label>'+
'<label class="btn btn-default" id="radio_population">'+
	'<input id="radio_population" name="op" type="radio" value="2" />Show Population</label>'+
'<label class="btn btn-default" id="radio_clear">'+
	'<input id="radio_clear" name="op" type="radio" value="3" />Clear</label><br><br>'+
'</div>'+
'<img src="assets/images/american_flag.jpg" class="img_flag">'+
'<h2>Regions</h2>'+
'<p>Northeast - Red<br>Southeast - Green<br>Midwest - Blue<br>Southwest - Yellow<br>West - Purple</p>'+
'</div>'+
'</div>'+
'</div>';

var polandString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Poland</h1>'+
'<div id="bodyContent">'+
'<img src="assets/images/poland_flag.svg" class="img_flag">'+
'<p align="left"><b>I am from Poland!</b>'+
'</p>'+
'</div>'+
'</div>';

var edmundPettusBridgeString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Edmund Pettus Bridge</h1>'+
'<div id="bodyContent">'+
'<img class="imgStreet" src="https://maps.googleapis.com/maps/api/streetview?size=1000x500&location=32.4054951,-87.0185059&heading=247.58&pitch=15&key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0"><br><br>'+
'<p align="left">'+
'Edmund Winston Pettus (July 6, 1821 - July 27, 1907) was a Confederate general in the American Civil War. After the war, he led the Alamaba Ku Klux Klan as Grand Dragon.'+
'The bridge was the site of the Selma to Montgomery marches and "Bloody Sunday", where peaceful African-American protesters were attacked by armed police officers with Billy clubs and tear gas.'+
'The Edmund Pettus bridge was named in his honor and ironically became a landmark in the March on Selma.'+
'</p>'+
'</div>'+
'</div>';

var ancientBuryingGroundString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Ancient Burying Ground</h1>'+
'<div id="bodyContent">'+
'<img class="imgStreet" src="https://maps.googleapis.com/maps/api/streetview?size=1000x500&location=41.764495,-72.673782&heading=-80&pitch=15&key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0"><br><br>'+
'<p align="left">The Ancient Burying Ground is a historic cementary on 60 Gold Street, Hartford, CT. The First Church of Christ, located next to the cementary, is the oldest church in Hartford.'+
'</p>'+
'</div>'+
'</div>';

var grandCanyonString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Grand Canyon</h1>'+
'<div id="bodyContent">'+
'<img class="imgStreet" src="https://maps.googleapis.com/maps/api/streetview?size=1000x500&location=36.0697473,-112.1628547&heading=0&pitch=0&key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0"><br><br>'+
'<p align="left">The Grand Canyon is formed by geologic color and erosion. The canyon is vast and spreads past 1 million acres of land.'+
'</p>'+
'</div>'+
'</div>';

var crystalBridgesString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Crystal Bridges Museum of American Art</h1>'+
'<div id="bodyContent">'+
'<img class="imgStreet" src="https://maps.googleapis.com/maps/api/streetview?size=1000x500&location=36.382534,-94.203476&heading=0&pitch=0&key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0"><br><br>'+
'<p align="left">The Crystal Bridges Museum of American Art is located in Bentonville, Arkansas. The museum was founded by Alice Walton and designed by Moshe Safdie. The museum opened on November 11, 2011 and is free for everyone.The museum features portraits of George Washington painted by Charles Wilson Peale’s and Gilbert Stuart’s, Asher Brown Durand’s Kindred Spirits, and Norman Rockwell’s Rosie the Riveter.There are also famous works by other artists such as John Singer Sargent, Thomas Eakins, William Merritt Chase, Thomas Hart Benton, and Andy Warhol.'+
'</p>'+
'</div>'+
'</div>';

var hearstCastleString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Hearst Castle</h1>'+
'<div id="bodyContent">'+
'<iframe class="imgPano" width="1000" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0&location=35.6853182,-121.169027&heading=75&pitch=15&fov=35"></iframe>'+
'<p align="left">The Hearst Castle is located on the Central Cost of California. Architect Julia Morgan designed the castle for William Randolph Hearst from 1919 to 1947. The castle has a wine cellar which protected Hearst\'s collection of alcohol during the prohibition era. There is also an airport which was built in the 1920s so that Hearst\'s famous guests could get to his estate faster than by train or car. There used to be the world\'s largest private zoo with zebras, aoudads, and Sambar deer. There are two pools at the castle: the Neptune Pool and the Roman Pool. Originally, the Neptune pool was supposed to be small and decorated with surrounding ornaments. However, on March 31, 1924, William Randolph Hearst wrote a letter to Julia Morgan and said that his wife and children want the pool to be as large as a swimming pool and to disregard the temple structure. The indoor Roman Pool has 205,000 gallons of water and a depth of 10 feet.'+
'</p>'+
'</div>'+
'</div>';

var providenceCanyonString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Providence Canyon</h1>'+
'<div id="bodyContent">'+
'<iframe class="imgPano" width="1000" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0&location=32.0688,-84.9076958&heading=-120&pitch=15&fov=100"></iframe>'+
'<p align="left">The Providence Canyon in Georgia is nicknamed the "little grand canyon." The canyon was formed by erosion of colorful soft soil due to poor farming in the 1800s. Formed during the Cretaceous Period, the sandstone bluffs are one of the oldest rock formations in Georgia. The canyon has the largest known wild colony of plumleaf azalea, rare flowers from southwestern Georgia and eastern Alabama, which bloom in mid to late summer.'+
'</p>'+
'</div>'+
'</div>';

var balancedRockString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">Balanced Rock County</h1>'+
'<div id="bodyContent">'+
'<iframe class="imgPano" width="1000" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0&location=38.7010115,-109.5652711&heading=100.56&pitch=15&fov=100"></iframe>'+
'<p align="left">The mountain is approximately 128 feet (39 meters) tall. The balancing rock rises about 55 feet (16.75 meters) above the base of the mountain. The biggest rock is as big as three school buses.'+
'</p>'+
'</div>'+
'</div>';

var nationalCorvetteMuseumString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">National Corvette Museum</h1>'+
'<div id="bodyContent">'+
'<iframe class="imgPano" width="1000" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyAxmMoaV9GrSom0cLblARIad6quTrkSSt0&location=37.0044626,-86.3748681&heading=187&pitch=15&fov=100"></iframe>'+
'<p align="left">An indoor museum that tells the history of Corvette. Corvette models ranging from the 1950s to today are featured.'+
'</p>'+
'</div>'+
'</div>';

var internationalPeaceGardenString = '<div id="content">'+
'<div id="siteNotice">'+
'<a onclick=$(".sidebar.bottom").trigger("sidebar:close");><i class="fa fa-times pull-right"></i></a></div>'+
'<h1 id="firstHeading" class="firstHeading">International Peace Garden</h1>'+
'<div id="bodyContent">'+
'<img class="imgStreet" width="1000" src="assets/images/international_peace_guarden.jpg">'+
'<p align="left">The International Peace Garden is situated on the border of North Dakota and Manitoba, Canada. The botanical garden spans 2,339 acres and includes a bell tower, a 9/11 memorial, and a big floral clock.'+
'</p>'+
'</div>'+
'</div>';
