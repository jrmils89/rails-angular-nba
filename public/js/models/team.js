var app = angular.module("team-directive", ['teamController']);

app.directive("teamDirective", [function() {
  return {
    restrict: "E",
    templateUrl: "views/templates/team-partial.html",
    controller: "teamController",
    controllerAs: "teamCtrl"
  }
}]);