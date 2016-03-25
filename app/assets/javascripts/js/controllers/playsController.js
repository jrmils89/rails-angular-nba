var app = angular.module("playsController", []);

app.controller("playsController", ["$http", "$routeParams", function($http, $routeParams) {
  var self = this;

  this.plays = {};

  this.loading = true;
  this.game_id = $routeParams.id;

  // Set some defualt chart creation options to make it respond better
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.maintainAspectRatio = false;

  // Generates a random hex color
  this.randomColorGenerator = function () {
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
  };

  this.options = {
    segmentStrokeWidth : 1,
    segmentStrokeColor : "black",
    scaleShowLabelBackdrop : false,
    scaleBeginAtZero : true,
    animateScale: true,
    percentageInnerCutout: 20
  };

  this.loading = false;

  this.getActivity = function() {
    self.plays = {};
    self.loading = true;
    $http.get("/api/v1/activity/"+self.game_id+"/1/10.json").then(
      function(response) {
          var myData = [];
          var data = response.data;
          for (var k in data) {
            var obj = {
              value: data[k],
              color: self.randomColorGenerator(),
              highlight: "#A8B3C5",
              label: k
            }
            myData.push(obj);
          };
          this.ctx = document.getElementById("myChart").getContext("2d");
          var myPieChart = new Chart(ctx).Pie(myData,self.options);
          self.loading = false;
        },
        function(error) {
          self.loading = false;
          console.log(error)
        }
      )
  };

  self.getActivity();

}]);