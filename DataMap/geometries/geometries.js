/* Geometrien are distinguished according following topics:
Derzeitiger Verzicht auf GeoJson, da Kreisgeometrie unterstützung nicht vorgesehen ist.
<Aufenthaltsbereiche>
<Service>

*/

/////////////////////////////////// <Aufenthalsbereiche> ///////////////////////////////////
//////////////////////////////////
/////////////////////////////////
///////////////////////////////
var polyFoyer = L.polygon([
    [358.5, 1471],
    [358.5, 1377],
    [395.5, 1361],
    [431.5, 1338],
    [460.5, 1309],
    [485.5, 1272],
    [499.5, 1235],
    [509.5, 1190],
    [506.5, 1152],
    [499.5, 1109],
    [492.75, 1081],
    [537.25, 1079],
    [691.25, 1079],
    [1046.75, 1079],
    [1048.25, 1072],
    [1183.75, 1070.5],
    [1185.75, 947.5],
    [1308.75, 947.5],
    [1309.75, 824.5],
    [1434.25, 823],
    [1433.25, 700.5],
    [1521.25, 704],
    [1601.25, 723.5],
    [1660.75, 744],
    [1727.25, 776.5],
    [1774.75, 807],
    [1825.25, 848],
    [1867.75, 889],
    [1915.75, 950.5],
    [1982.25, 1075],
    [2228.5, 1076],
    [2227.5, 1168],
    [2095.5, 1168],
    [1975.5, 1673],
    [1863.5, 1648],
    [1865.5, 1639],
    [1663.5, 1591],
    [1683.5, 1501],
    [1505.5, 1459],
    [1424.5, 1438],
    [1435.5, 1389],
    [1251.5, 1347],
    [1162.5, 1340],
    [1032.5, 1363],
    [996.5, 1515],
    [945.5, 1502],
    [943.5, 1549],
    [948.5, 1626],
    [856.75, 1600],
    [860.75, 1558],
    [842.75, 1506],
    [813.125, 1476],
    [779.375, 1459.75],
    [737.625, 1456],
    [691.75, 1470],
    [658.25, 1499],
    [639.75, 1535],
    [360.25, 1470.5]
]);

polyFoyer.setStyle({
    fillOpacity: 0.15,
    stroke: false,
    fillColor: "blue",
    title: "Aufenthaltsbereich Eingangshalle"
});

var polyLounge01 = L.polygon([
    [1667, 2730],
    [1667.5, 2611],
    [1678.5, 2564],
    [1874, 2611.5],
    [1874.5, 2730],
    [1863.5, 2776],
    [1667.5, 2730]
]);

var polyLounge02 = L.polygon([
    [1506, 2533],
    [1507, 2646],
    [1496, 2693],
    [1302, 2645],
    [1300, 2529],
    [1314, 2484],
    [1508, 2530]
]);

polyLounge01.setStyle({
    fillOpacity: 0.15,
    fillColor: 'blue',
    stroke: false,
    title: "Aufenthalt Sitzgruppe 01"
});

polyLounge02.setStyle({
    fillOpacity: 0.15,
    fillColor: 'blue',
    stroke: false,
    title: "Aufenthalt Sitzgruppe 02"
});

// invisible object for search and zoom functionality
var circleFoyer = L.circleMarker([1249, 1170], {
    fillOpacity: 0.15,
    //fillColor: "blue",
    radius: 0,
    stroke: false,
    clickable: false,
    title: "Aufenthalt Eingangshalle"
});

var circleLounge01 = L.circleMarker([1872, 2580], {
    fillOpacity: 0.15,
    //fillColor: "blue",
    radius: 0,
    stroke: false,
    clickable: false,
    title: "Aufenthalt Sitzgruppe 01"
});

var circleLounge02 = L.circleMarker([1506, 2533], {
    fillOpacity: 0.15,
    //fillColor: "blue",
    radius: 0,
    stroke: false,
    clickable: false,
    title: "Aufenthalt Sitzgruppe 02"
});

/////////////////////////////////// <Service> ///////////////////////////////////
//////////////////////////////////
/////////////////////////////////
///////////////////////////////

var polyService02 = L.polygon([
    [1343, 1768],
    [1304, 1936],
    [1057, 1878],
    [1034, 1871],
    [1004, 1853],
    [974, 1826],
    [960, 1800],
    [945, 1757],
    [944, 1734],
    [943, 1669],
    [975, 1677],
    [1344, 1768]
]);

polyService02.setStyle({
    fillOpacity: 0.15,
    fillColor: 'red',
    stroke: false,
    title: "Service Ausleihe"
});

var circleService02 = L.circleMarker([1343, 1768], {
    fillOpacity: 0.15,
    //fillColor: "blue",
    radius: 0,
    stroke: false,
    clickable: false,
    title: "Service Ausleihe"
});

// At the moment according to the zoom level
var circleServiceEntrance = L.circleMarker([750.5, 1569.5], {
    fillOpacity: 0.15,
    radius: 28,
    stroke: false,
    fillColor: "red",
    title: "Service Empfang"
});



/////////////////////////////////// <...> ///////////////////////////////////
//////////////////////////////////
/////////////////////////////////
///////////////////////////////
