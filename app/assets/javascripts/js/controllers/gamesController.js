var app = angular.module("gamesController", []);

app.controller("gamesController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.games = {};

  this.loading = true;

  this.getDate = function() {
    month = $("#month").val();
    day = $("#day").val();
    year = $("#year").val();
    return ""+year+month+day;
  };

  this.getGames = function() {
    var date = self.getDate();
    self.games = {};
    self.loading = true;
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

  this.loading = false;

}]);