var app = angular.module("games-directive", ['gamesController']);

app.directive("gamesDirective", [function() {
  return {
    restrict: "E",
    templateUrl: "views/templates/games-partial.html",
    controller: "gamesController",
    controllerAs: "gamesCtrl"
  }
}]);