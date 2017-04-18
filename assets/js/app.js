var map, featureList;

$(window).resize(function() {
    sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
    $(document).off("mouseout", ".feature-row", clearHighlight);
    sidebarClick(parseInt($(this).attr("id"), 10));
});


$("#about-btn").click(function() {
    $("#aboutModal").modal("show");
    $(".navbar-collapse.in").collapse("hide");
    return false;
});

$("#full-extent-btn").click(function() {
    map.setZoom(-2);
    $(".navbar-collapse.in").collapse("hide");
    return false;
});

$("#legend-btn").click(function() {
    $("#legendModal").modal("show");
    $(".navbar-collapse.in").collapse("hide");
    return false;
});

$("#login-btn").click(function() {
    $("#loginModal").modal("show");
    $(".navbar-collapse.in").collapse("hide");
    return false;
});
var checkMenuButton;
$("#list-btn").click(function() {

    $("#nav-text").text('Points of Interest');
    syncSidebar();
    if (checkMenuButton === "POI") {
        animateSidebar();
    }
    checkMenuButton = "POI";
});

$("#list-btn2").click(function() {
    $("#nav-text").text('Fachinformation');
    syncSidebar_subject();
    if (checkMenuButton === "Fachinformation") {
        animateSidebar();
    }
    checkMenuButton = "Fachinformation";
});


$("#nav-btn").click(function() {
    $(".navbar-collapse").collapse("toggle");
    return false;
});

$("#sidebar-toggle-btn").click(function() {
    animateSidebar();
    return false;
});

$("#sidebar-toggle-btn_subject").click(function() {
    animateSidebar();
    return false;
});

$("#sidebar-hide-btn").click(function() {
    animateSidebar();
    return false;
});



function animateSidebar() {
    $("#sidebar").animate({
        width: "toggle"
    }, 350, function() {
        //map.invalidateSize();
    });
}

function animateSidebar_subject() {
    $("#sidebar_subject").animate({
        width: "toggle"
    }, 350, function() {
        //map.invalidateSize();
    });
}


function sizeLayerControl() {
    $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
    highlight.clearLayers();
}

var highlight = {
    'color': '#333333',
    'weight': 2,
    'opacity': 1
};






var highlightlayer = null;
var resetStyle = null;
var resetLayer = null;
loungeAreas.setStyle({
    fillColor: 'blue',
    fillOpacity: 0.15
});

function resetstyle(resetStyle, resetLayer) {
    resetLayer.eachLayer(function(layer) {
        layer.setStyle({
            fillColor: resetStyle,
            fillOpacity: 0.15
        });
    });
}


function sidebarClick(id) {
    $(".feature-name").click(function() {
        if (resetLayer !== null) {
            if (resetLayer !== currentLayers) {
                resetstyle(resetStyle, resetLayer);
            }
        }

        var currentLayers = overlayMaps[$(this).text()];

        // Just for the polygon layers for demo purpose, ToDo: Add marker functionality
        if (currentLayers !== undefined) {

            currentLayers.eachLayer(function(layer) {
                resetStyle = layer.options.fillColor;
                resetcolor = resetStyle.toString();
            });

            currentLayers.eachLayer(function(layer) {
                highlightlayer = layer;
                highlightlayer.setStyle({
                    fillColor: 'orange',
                    fillOpacity: 0.6
                });


            });
            // Control zoom to selected element
            map.fitBounds(currentLayers.getBounds());
            resetLayer = currentLayers;
        }
    });


    //map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17);
    //layer.fire("click");
    /* Hide sidebar and go to the map on small screens */
    if (document.body.clientWidth <= 767) {
        $("#sidebar").hide();
        map.invalidateSize();
    }
}

function syncSidebar_subject() {
    /* Empty sidebar features */
    $("#feature-list tbody").empty();
    if (featureList !== undefined) {
        featureList.reIndex();
        featureList.update();
    }
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_archaelogy"><td style="vertical-align: middle;"><i class="fa fa-university" aria-hidden="true" style="color:brown"></i></td><td class="feature-name" id="aegyptologie">' + 'Ägyptologie' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_literature"><td style="vertical-align: middle;"><i class="fa fa-book" aria-hidden="true" style="color:brown"></i></td><td class="feature-name" id="language">' + 'Allgemeine Sprach- und Literaturwissenschaft' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_anglistic"><td style="vertical-align: middle;"><i class="fa fa-tag" aria-hidden="true" style="color:brown"></i></td><td class="feature-name" id="anglo">' + 'Anglistik/Amerikanistik' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr><hr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_medicine"><td style="vertical-align: middle;"><i class="fa fa-plus-square" aria-hidden="true" style="color:brown"></i></td><td class="feature-name" id="medicine">' + 'Medizin' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');

    /* Update list.js featureList */
    if (featureList !== undefined) {
        featureList.reIndex();
        featureList.update();
    }
    if (featureList === undefined) {
        featureList = new List("features", {
            valueNames: ["feature-name"]
        });
        featureList.sort("feature-name", {
            order: "asc"
        });
    }
}

// Number of map items
var aufenthaltCount = 0;
var druckerCount = 0;
var serviceCount = 0;
var WCCount = 0;

loungeAreas.eachLayer(function(layer) {
    aufenthaltCount++;
});
serviceAreas.eachLayer(function(layer) {
    serviceCount++;
});
printerLocation.eachLayer(function(layer) {
    druckerCount++;
});
wc.eachLayer(function(layer) {
    WCCount++;
});


function syncSidebar() {
    /* Empty sidebar features */
    $("#feature-list tbody").empty();

    /* Loop through theaters layer and add only features which are in the map bounds */
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_service"><td style="vertical-align: middle;"><i class="fa fa-hand-paper-o" aria-hidden="true" style="color:red"></i> (' + serviceCount + ')</td><td class="feature-name" id="service">' + 'Service' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_aufenthalt"><td style="vertical-align: middle;"><i class="fa fa-street-view" aria-hidden="true" style="color:blue"></i> (' + aufenthaltCount + ')</td><td class="feature-name" id="aufenthalt">' + 'Aufenthalt' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_printer"><td style="vertical-align: middle;"><i class="fa fa-print" aria-hidden="true" style="color:black"></i> (' + druckerCount + ')</td><td class="feature-name" id="drucker">' + 'Drucker-Stationen' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr><hr>');
    $("#feature-list tbody").append('<tr class="feature-row" id="flist_wc"><td style="vertical-align: middle;"><i class="fa fa-female" aria-hidden="true" style="color:green"></i><i class="fa fa-male" aria-hidden="true" style="color:green"></i> (' + WCCount + ')</td><td class="feature-name" id="wc">' + 'WC' + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');

    /* Update list.js featureList */
    if (featureList !== undefined) {
        featureList.reIndex();
        featureList.update();
    }
    if (featureList === undefined) {
        featureList = new List("features", {
            valueNames: ["feature-name"]
        });
        featureList.sort("feature-name", {
            order: "asc"
        });
    }
}

/* Single marker cluster layer to hold all clusters*/
var markerClusters = new L.MarkerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 16
});
/* Empty layer placeholder to add to layer control for listening when to add/remove theaters to markerClusters layer */
var theaterLayer = L.geoJson(null);
var theaters = L.geoJson(null, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, {
            icon: L.icon({
                iconUrl: "assets/img/theater.png",
                iconSize: [24, 28],
                iconAnchor: [12, 28],
                popupAnchor: [0, -25]
            }),
            title: feature.properties.NAME,
            riseOnHover: true
        });
    },
    onEachFeature: function(feature, layer) {
        if (feature.properties) {
            var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADDRESS1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
            layer.on({
                click: function(e) {
                    $("#feature-title").html(feature.properties.NAME);
                    $("#feature-info").html(content);
                    $("#featureModal").modal("show");
                    highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
                }
            });
            $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
            theaterSearch.push({
                name: layer.feature.properties.NAME,
                address: layer.feature.properties.ADDRESS1,
                source: "Theaters",
                id: L.stamp(layer),
                lat: layer.feature.geometry.coordinates[1],
                lng: layer.feature.geometry.coordinates[0]
            });
        }
    }
});









/* Filter sidebar feature list to only show features in current map bounds */
map.on("moveend", function(e) {
    syncSidebar();
});

/* Clear feature highlight when map is clicked
map.on("click", function(e) {
  highlight.clearLayers();
});
*/
/* Attribution control */
function updateAttribution(e) {
    $.each(map._layers, function(index, layer) {
        if (layer.getAttribution) {
            $("#attribution").html((layer.getAttribution()));
        }
    });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);

var attributionControl = L.control({
    position: "bottomright"
});
attributionControl.onAdd = function(map) {
    var div = L.DomUtil.create("div", "leaflet-control-attribution");
    div.innerHTML = "<span class='hidden-xs'>We <i class='fa fa-heart-o' aria-hidden='true'></i> <i class='fa fa-book' aria-hidden='true'></i>-Prototype</span>";
    return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
    position: "bottomright"
}).addTo(map);

/* GPS enabled geolocation control set to follow the user's location */
var locateControl = L.control.locate({
    position: "bottomright",
    drawCircle: true,
    follow: true,
    setView: true,
    keepCurrentZoomLevel: true,
    markerStyle: {
        weight: 1,
        opacity: 0.8,
        fillOpacity: 0.8
    },
    circleStyle: {
        weight: 1,
        clickable: false
    },
    icon: "fa fa-location-arrow",
    metric: false,
    strings: {
        title: "My location",
        popup: "You are within {distance} {unit} from this point",
        outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
    },
    locateOptions: {
        maxZoom: 18,
        watch: true,
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 10000
    }
}).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
    var isCollapsed = true;
} else {
    var isCollapsed = false;
}


/* Highlight search box text on click */
$("#searchbox").click(function() {
    $(this).select();
});

/* Prevent hitting enter from refreshing the page */
$("#searchbox").keypress(function(e) {
    if (e.which == 13) {
        e.preventDefault();
    }
});


// Leaflet patch to make layer control scrollable on touch browsers
/*
var container = $(".leaflet-control-layers")[0];
if (!L.Browser.touch) {
  L.DomEvent
  .disableClickPropagation(container)
  .disableScrollPropagation(container);
} else {
  L.DomEvent.disableClickPropagation(container);
}

  $("#loading").hide();
*/
