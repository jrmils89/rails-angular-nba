var app = angular.module("teamController", []);

app.controller("teamController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.team = [];

  this.id = $routeParams.id;

  this.loading = true;

  this.tab = null;
  this.player = {}

  this.setTab = function(index, playerId) {
    self.tab = self.tab == index ? null : index;
    self.loading = true;
    this.player = {};
    self.getPlayerData(playerId);
  }

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

  this.getPlayerData = function(playerId) {
  $http.get("/api/v1/player/"+playerId+".json").then(
    function(response) {
        self.player = response.data
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