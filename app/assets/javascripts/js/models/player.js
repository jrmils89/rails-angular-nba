var app = angular.module("player-directive", ['playerController']);

app.directive("playerDirective", [function() {
  return {
    restrict: "E",
    templateUrl: "views/templates/player-partial.html",
    controller: "playerController",
    controllerAs: "playerCtrl"
  }
}]);