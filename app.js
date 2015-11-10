
var data;
var baseUrl = 'https://api.spotify.com/v1/artists/';
var myApp = angular.module('myApp', []);

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.getSongs = function() {
    $http.get('https://api.spotify.com/v1/search?type=track&query=' + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items
    });

    $('#search').css('background-color', 'white');
  }

  $scope.select = function(song) {
    $http.get(baseUrl + song + '/related-artists').success(function(response) {
      data = $scope.relateds = response.artists
    });
  }

  $scope.hoverIn = function(){
    this.hoverEdit = true;
  };

  $scope.hoverOut = function(){
    this.hoverEdit = false;
  };
})

// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});
