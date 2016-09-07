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

myApp.controller('AppCtrl', function($scope) {
  $scope.model = {
    firstName: "Kaushal",
    lastName: "Patel"
  }

  $scope.testFunction = function() {
    window.alert("Hi from Angular");
  }
});


myApp.controller('OuterCtrl', function($scope) {
  $scope.val1 = "The Rock";

});

myApp.controller('InnerCtrl', function($scope) {

});

// For ControllerA and ControllerB

myApp.factory('Share', function() {
  return {sharedMessage: "I am shared"};
})

myApp.controller('controllerA', function controllerA($scope,Share) {
  $scope.value = "Hello from controller A";
  $scope.sharedValue = 'value@A';
  $scope.sharedValue = Share;
})

myApp.controller('controllerB', function controllerB($scope,Share) {
  $scope.value = "Hello from controller B";
  $scope.sharedValue = 'value@B';
  $scope.sharedValue = Share;
})
