var app = angular.module('weatherApp', ['uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDCOpw7yInGHdmiPGRZZ4NpZMXWcfN9YgI',
        //v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
