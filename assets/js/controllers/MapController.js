angular.module('weatherApp')
.controller('mapController', ['$scope','uiGmapGoogleMapApi', function($scope, GoogleMapApi) {
  GoogleMapApi.then(function(maps) {
    $scope.googleVersion = maps.version;
    maps.visualRefresh = true;

    $scope.map = {
      show: true,
      control: {},
      version: "uknown",
      heatLayerCallback: function (layer) {
        //set the heat layers backend data
        var mockHeatLayer = new MockHeatLayer(layer);
      },
      showTraffic: false,
      showBicycling: false,
      showWeather: false,
      showHeat: false,
      center: {
        latitude: 45,
        longitude: -73
      },
      options: {
        streetViewControl: false,
        panControl: false,
        maxZoom: 20,
        minZoom: 3,
        disableDefaultUI: true
      },
      zoom: 14,
      dragging: false,
      bounds: {},
      markers: []
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        $scope.map.center = {
          latitude: pos.lat,
          longitude: pos.lng
        }

        $scope.map.markers = [{
          id: 1,
          latitude: pos.lat,
          longitude: pos.lng,
          showWindow: false,
          icon: 'http://downloadicons.net/sites/default/files/heavy-rain-wear-icons-51476.png'
        }]
        //map.setCenter(pos);
      }, function() {
        //handleLocationError(true, infoWindow, map.getCenter());
      });
    }
  });

}]);
