var myApp = angular.module('myApp', []);

myApp.controller('DivideCtrl', function($scope) {
  $scope.numberData = {
    value1: 10,
    value2: 2
  }

  $scope.divide = function(val1,val2) {
    window.alert(val1/val2);
  }
})
