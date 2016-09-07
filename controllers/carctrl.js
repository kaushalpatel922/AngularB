myApp.controller('carctrl', function carctrl($scope){
  $scope.cars ={
    "BMW":{"make":"BMW", "model":"1 Series", "year":"2010"},
    "Tesla":{"make":"Tesla", "model":"S", "year":"2016"},
  };

  $scope.description ="This controller contains a list of cars:";

});
