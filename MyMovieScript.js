'use strict';

angular.module('myApp', [])
  .controller('MovieController', function ($scope, $http, MyMovieService) {
      $scope.$watch('search', function () {
          //fetch();
          $scope.getData();
          getRelatedSearch();
      });

      $scope.search = "Sherlock Holmes";

      function fetch() {
          $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
            .then(function (response) {
                $scope.details = response.data;
            });

          $http.get("https://www.omdbapi.com/?s=" + $scope.search)
            .then(function (response) {
                $scope.related = response.data;
            });
      }

      $scope.update = function (movie) {
          $scope.search = movie.Title;
      };

      $scope.select = function () {
          //this.setSelectionRange(0, this.value.length);
          $scope.getData();
          getRelatedSearch();
      }
      $scope.getData = function () {
          var data = null;
          data = MyMovieService.getMovieTitleDetails($scope.search).then(function (data) {
              $scope.details = data;
            });
      }
      function getRelatedSearch() {
          var data = null;
          data = MyMovieService.getMovieTitleRelatedSearch($scope.search).then(function (data) {
              $scope.related = data;
          });
      }
  });