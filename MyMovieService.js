(function () {
    angular.module('myApp').factory("MyMovieService", MyMovieService);

    MyMovieService.$inject = ['$http'];
    function MyMovieService($http) {
        return {
            getMovieTitleDetails: getMovieTitleDetails,
            getMovieTitleRelatedSearch: getMovieTitleRelatedSearch
        };
        function getMovieTitleDetails(searchTerms) {
            return $http.get("https://www.omdbapi.com/?t=" + searchTerms + "&tomatoes=true&plot=full")
               .then(function (response) {
                   return response.data;
               });
        };
        function getMovieTitleRelatedSearch(searchTerms) {
            return $http.get("https://www.omdbapi.com/?s=" + searchTerms)
               .then(function (response) {
                   return response.data;
               });
        };
    };
}());


