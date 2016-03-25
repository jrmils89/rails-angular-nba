(function() {
  var app = angular.module('nba', ['ngRoute','teams-directive','team-directive','player-directive','games-directive','plays-directive']);

  //sets up angular routing
  app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
    $routeProvider.
        when('/', {
          templateUrl: 'views/pages/home.html',
        }).
        when('/team/:id', {
            templateUrl: 'views/pages/team.html',
        }).
        when('/games', {
            templateUrl: 'views/pages/games.html',
        }).
        when('/playbyplay/:id', {
            templateUrl: 'views/pages/play-by-play.html',
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

  app.config(['$compileProvider', function ($compileProvider) {
      $compileProvider.debugInfoEnabled(false);
  }]);

})()