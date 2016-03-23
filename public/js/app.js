(function() {
  var app = angular.module('nba', ['ngRoute']);

  //sets up angular routing
app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
    $routeProvider.
        // when on home page, render home.html page
        when('/', {
          templateUrl: 'views/pages/home.html',
        }).
        // when on a categories name page, render concept-page.html
        when('/nba', {
            templateUrl: 'views/pages/nba.html',
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

})()