// START jQUERY FUNCTION
// ==============================
$(document).ready(function () {



    // ============================================================================================================
    // GET THE FEATURE CODE FROM THE VALUE OF THE OPTION SELECTED IN THE DROPDOWN LIST
    // ============================================================================================================

    // set variable to stand for the feature code of feature name selected from dropdown
    var featureCode;

    function getFeatureCode() {

        var fCode = $("form").serializeArray();

        featureCode = fCode[0].value;
    }

    $("select").on("change", getFeatureCode);



    // ============================================================================================================
    // GET LOCATIONS MATCHING FEATURE CODES FROM GEONAMES search SERVICE (1 credit, limit 2,000/hr, 30,000/mo)
    // ============================================================================================================

    // getFeatureName variables
    var featureName;
    var featureCountryName;
    var featureCountryCode;
    var featureLatitude;
    var featureLongitude;
    var featureLocation;


    function getFeatureName() {

        var geonamesSearchFeatures = "http://api.geonames.org/searchJSON?featureCode=" + featureCode + "&maxRows=1&username=ghostfountain";

        $.ajax({
                url: geonamesSearchFeatures,
                method: "GET"
            })
            .then(function (response) {

                for (var i = 0; i < response.geonames.length; i++) {

                    featureName = response.geonames[i].name;
                    featureCountryCode = response.geonames[i].countryCode;
                    featureLatitude = response.geonames[i].lat;
                    featureLongitude = response.geonames[i].lng;
                    featureLocation = response.geonames[i].fclName;

                    if (response.geonames[i].countryName) {

                        featureCountryName = response.geonames[i].countryName;
                        console.log("DESTINATION: " + featureName + ", " + featureCountryName);

                    } else {

                        // featureCountryName = response.geonames[i].fclName;
                        featureCountryName = "";
                        console.log("DESTINATION: " + featureName);

                    }

                    getPostalCodes();

                }

            });
    }




    // ==========================================================================================================
    // GET CLOSEST POSTAL CODE TO FEATURE LOCATION LAT+LONG COORDINATES FROM EZCMD API (limit 10,000 calls/month)
    // ==========================================================================================================

    // getPostalCodes variables
    var nearPlaceName;
    var nearPlacePostalCode;
    var nearPlaceCountryCode;
    var nearPlaceCountryName;
    var nearPlaceDistance;


    function getPostalCodes() {

        var ezcmdPostalCodes = "https://ezcmd.com/apps/api_geo_postal_codes/nearby_locations_by_coords/866eaf56be3781d02011b80ebd0baef8/354?coords=" + featureLatitude + "," + featureLongitude + "&within=100&unit=Km";

        $.ajax({
                url: ezcmdPostalCodes,
                method: "GET"
            })
            .then(function (response) {

                if (response.search_results.length > 0) {

                    nearPlaceName = response.search_results[0].place_name.trim();
                    nearPlacePostalCode = response.search_results[0].postal_code;
                    nearPlaceCountryCode = response.search_results[0].country_code;
                    nearPlaceCountryName = response.search_results[0].country_name;
                    nearPlaceDistance = Math.round(response.search_results[0].distance * 10) / 10;

                    console.log("CLOSEST CITY: " + nearPlaceName + " " + nearPlaceCountryCode + " " + nearPlacePostalCode + " (" + nearPlaceDistance + " km)");

                    getHotspots();

                } else if (featureLocation) {

                    nearPlaceName = featureLocation;
                    nearPlacePostalCode = "";
                    nearPlaceCountryCode = "";
                    nearPlaceCountryName = "";
                    nearPlaceDistance = "?";

                    getHotspots();

                    console.log("CLOSEST CITY: (" + nearPlaceName + ")");

                    // return;
                } else {

                    getHotspots();

                    console.log("CLOSEST CITY: no info");
                    // return;
                }

            });
    }




    // =====================================================================================
    // GET # OF WIFI HOTSPOTS BY POSTAL CODE FROM WIGLE API (service is beta, no set limits)
    // =====================================================================================

    // getHotspots variables
    var nearPlaceWifi = "?";
    var listPostalCode;
    var listHotSpots

    // mini function to format thousands of WiFi numbers to k format
    function kFormatter(num) {
        return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
    }

    function getHotspots() {

        var wigleHotspots = "https://api.wigle.net/api/v2/stats/regions?country=" + nearPlaceCountryCode;

        // this API required sending its authentication name:token as a Basic Authorization HTTP header in Base64 ...
        // does that count as using a technology that we haven't discussed?
        $.ajax({
                headers: {
                    'Authorization': 'Basic ' + btoa('AID544c0365fdcc8c2463ec21d3590bbd23:8891f56fb22400d107dd8ee49d2798ff'),
                },
                url: wigleHotspots,
                method: "GET"
            })
            .then(function (response) {


                for (var k = 0; k < response.postalCode.length; k++) {

                    listPostalCode = response.postalCode[k].postalCode;
                    listHotSpots = kFormatter(response.postalCode[k].count);
    
                    if (listPostalCode === nearPlacePostalCode) {

                        nearPlaceWifi = listHotSpots;

                        console.log("WIFI: " + nearPlaceName + " " + nearPlacePostalCode + " " + nearPlaceCountryCode + " has " + nearPlaceWifi + " hotspots");

                    }
                }
        
                buildCard();

                nearPlaceWifi = "?";

            });
    }

    // ============================================================================================================
    // END OF GLOBAL VARIABLES AND FUNCTIONS DECLARATIONS
    // ============================================================================================================


    // ============================================================================================================
    // APPLICATION'S TOP LEVEL FUNCTIONALITY: SET FEATURE TO SEARCH, and SEARCH BUTTON FUNCTION
    // ============================================================================================================

    $("#search_btn").on("click", function () {

        event.preventDefault();

        getFeatureName();

    });



    // ============================================================================================================
    // FUNCTION TO DYNAMICALLY BUILD A RESPONSE CARD FROM ALL RETURNED INFO
    // ============================================================================================================

    function buildCard() {

        $("#card_container").append("<div class='card border-dark mb-3'><div class='card-header p-2'><h5 style='display:inline;'>"+featureName+" : "+featureCountryName+"</h5><span class='font-weight-light' style='display:inline;float:right'>"+featureLatitude+", "+featureLongitude+"</span></div><div class='card-body text-dark p-2'><span class='font-weight-light'>"+nearPlaceName+" "+nearPlaceCountryCode+" "+nearPlacePostalCode+" ("+nearPlaceDistance+" km)</span><i class='float-right fas fa-wifi' style='margin-left:10px;padding-top:2px;'></i><span class='float-right font-weight-bold'>"+nearPlaceWifi+"</span></div></div>");
    }

    // END jQUERY FUNCTION
});
// ==============================