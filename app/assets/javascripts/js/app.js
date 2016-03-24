(function() {
  var app = angular.module('nba', ['ngRoute','teams-directive','team-directive']);

  app.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    }
  });

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
        when('/nba', {
            templateUrl: 'views/pages/nba.html',
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})()