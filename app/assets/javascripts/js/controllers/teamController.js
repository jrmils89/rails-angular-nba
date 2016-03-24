var app = angular.module("teamController", []);

app.controller("teamController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.team = [];

  this.id = $routeParams.id;

  this.loading = true;

  this.getTeamData = function() {
  $http.get("/api/v1/teams/"+this.id+".json").then(
    function(response) {
        self.team = response.data
        self.loading = false;
      },
      function(error) {
        self.loading = false;
        console.log(error)
      }
    )
  };

  self.getTeamData();

}]);