var app = angular.module("teamsController", []);

app.controller("teamsController", ["$http", function($http) {
  var self = this;

  this.teams = [];

  this.getTeamData = function() {
  $http.get("/api/v1/teams.json").then(
    function(response) {
        self.teams = response.data
      },
      function(error) {
        console.log(error)
      }
    )
  };

  self.getTeamData();

}]);