var app = angular.module("playerController", []);

app.controller("playerController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.player = {};

  this.id = $routeParams.id;

  this.loading = true;

  this.getPlayerData = function() {
  $http.get("/api/v1/player/"+this.id+".json").then(
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

  self.getPlayerData();

}]);