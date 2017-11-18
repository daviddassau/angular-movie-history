"use strict";

app.controller("WishlistCtrl", function ($rootScope, $scope, MovieService) {
    
    const getMovies = () => {
        MovieService.getWishlistMovies($rootScope.uid).then((results) => {
            $scope.movies = results;
        }).catch((error) => {
            console.log("error in getRatedMovies", error);
        });
    };

    getMovies();

    $scope.deleteMovie = (movieId) => {
        MovieService.deleteMovie(movieId).then((result) => {
            getMovies();
        }).catch((error) => {
            console.log("error in deleteMovie", error);
        });
    };

    $scope.switchWatched = (movie) => {
        movie.isWatched = true;
        console.log("movie", movie);
        MovieService.updateMovie(movie, movie.id).then((result) => {
            console.log("result", result);
        }).catch((error) => {
            console.log("error in updateMovie", error);
        });
    };

});