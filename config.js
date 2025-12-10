const disableSetup = false;
var topBarCenterText = `KM7CCF`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["f3de21ff", "satellite.js","L"],
  ["2196F3", "ISS LOCATION", "  https://www.orbtrack.org/#/?satName=ISS%20(ZARYA)", "1","L"],
  [
    "2196F3",
    "MORSE CODE",
    "https://lucassedberg.com/tools/morse/simulator",
    "1",
	  "L"
  ],
  [
    "2196F3",
    "APRS MAP",
    "https://aprs.fi/#!lat=47.70&lng=-117.5",
    "1",
	  "L"
  ],
  [
    "2196F3",
    "SONDE HUB",
    "https://tracker.sondehub.org/#!mt=Mapnik&mz=7&qm=3h&mc=47.59135,-117.98218&box=aboutbox",
    "1",
	"L"
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
	
  ["2196F3", "FIRES", "https://inciweb.wildfire.gov/", "1.2","R"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KOTX_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "SATELLITE NORTH",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "SATELLITE LOCAL",
    "https://cdn.star.nesdis.noaa.gov/GOES18/ABI/SECTOR/pnw/GEOCOLOR/GOES18-PNW-GEOCOLOR-600x600.gif",
  ],
  [
     "Forecast & Activity",
	"https://www.wpc.ncep.noaa.gov/noaa/noaa.gif",
	"https://www.spc.noaa.gov/exper/mesoanalysis/activity_loop.gif",
	"https://www.spc.noaa.gov/products/watch/validww.png",
	"https://www.spc.noaa.gov/products/exper/day4-8/day48prob.gif",
	"https://www.wpc.ncep.noaa.gov/threats/final/hazards_d3_7_contours.png",
	"https://www.wpc.ncep.noaa.gov/qpf/fill_94qwbg.gif",
	"https://www.weather.gov/wwamap/png/otx.png",
  ],
  ["SATELLITE TRACk",
    "iframe|https://isstracker.pl/en/widget/map?&disableInfoBox=1&lang=en&z=4&mapType=satellite&units=metric&preloader=1&showSatTooltip=0&dayNightLayer=0&showFutureOrbit=0"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
  ["ISS CAMERA 1",
    "iframe|https://www.youtube.com/embed/Ni-YkkvH6DQ?autoplay=1&mute=1","1"],
  ["ISS CAMERA 2",
    "iframe|https://www.youtube.com/embed/iYmvCUonukw?autoplay=1&mute=1","1"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ];
