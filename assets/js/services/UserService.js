var weatherApp = angular.module('weatherApp')
weatherApp.service('UserService', ['$http', 'WeatherUrl', function($http, WeatherUrl) {
  return {
    getList: function() {
      console.log(WeatherUrl.User.list);
      return $http.get(WeatherUrl.User.list);
    }
  }
}]);
