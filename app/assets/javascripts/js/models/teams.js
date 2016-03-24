var app = angular.module("teams-directive", ['teamsController']);

app.directive("teamsDirective", [function() {
  return {
    restrict: "E",
    templateUrl: "views/templates/teams-partial.html",
    controller: "teamsController",
    controllerAs: "teamsCtrl"
  }
}]);