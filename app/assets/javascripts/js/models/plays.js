var app = angular.module("plays-directive", ['playsController']);

app.directive("playsDirective", [function() {
  return {
    restrict: "E",
    templateUrl: "views/templates/plays-partial.html",
    controller: "playsController",
    controllerAs: "playsCtrl"
  }
}]);