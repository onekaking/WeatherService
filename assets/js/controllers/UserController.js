angular.module('weatherApp')
.controller('userController',['$scope', 'UserService', 'WeatherConstant' , function($scope, UserService, WeatherConstant) {
  $scope.users = [];

  UserService.getList().then(function(result) {
    if (result.status == WeatherConstant.Status.ok) {
      $scope.users = result.data;
    }
  });

}]);
