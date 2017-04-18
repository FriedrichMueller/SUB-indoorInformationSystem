//click events ToDo: Make one function

var onPrinter011Click = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:100%; height:100%" data="http://wiki.student.uni-goettingen.de/support/drucken/multifunktionsgerate?s[]=scan&s[]=to&s[]=mail#scannen"></object>';
    sidebarinfo.show();
};

var onOverviewClick = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:350px; height:100%" data="https://www.sub.uni-goettingen.de/neu-hier/planen-sie-ihren-besuch/"></object>';
    sidebarinfo.show();
};

var onContactClick = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:350px; height:100%" data="https://www.sub.uni-goettingen.de/kontakt/information-beratung/"></object>';
    sidebarinfo.show();
};

var onNewsClick = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:350px; height:100%" data="https://www.sub.uni-goettingen.de/sub-aktuell/"></object>';
    sidebarinfo.show();
};

var onPolyLoungeClick = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:350px; height:100%" data="https://www.sub.uni-goettingen.de/standorte-raumangebote/standorte-mit-oeffnungszeiten/zentralbibliothek/erdgeschoss/" ></object>';
    sidebarinfo.show();
};
var onPolyServiceClick = function() {
    document.getElementById("sidebarinfo").innerHTML =
        '<object type="text/html" style="width:400px; height:100%" data="https://www.sub.uni-goettingen.de/standorte-raumangebote/standorte-mit-oeffnungszeiten/zentralbibliothek/erdgeschoss/#c2084" ></object>';
    sidebarinfo.show();
};

polyFoyer.on('click', onPolyLoungeClick);
circleServiceEntrance.on('click', onPolyServiceClick);
