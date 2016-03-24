var app = angular.module("teamsController", []);

app.controller("teamsController", ["$http", function($http) {
  var self = this;

  this.teams = [];

  this.loading = true;

  this.getTeamData = function() {
  $http.get("/api/v1/teams.json").then(
    function(response) {
        self.teams = response.data
        self.loading = false;
      },
      function(error) {
        console.log(error)
        self.loading = false;
      }
    )
  };

  self.getTeamData();

}]);