var app = angular.module("gamesController", []);

app.controller("gamesController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.games = {};

  this.date = $routeParams.date;

  this.loading = true;

  this.getGames = function(date) {
  $http.get("/api/v1/games/"+date+".json").then(
    function(response) {
        self.games = response.data
        self.loading = false;
      },
      function(error) {
        self.loading = false;
        console.log(error)
      }
    )
  };

  self.getGames("20150324")


}]);