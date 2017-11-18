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
        let updatedMovie = MovieService.createMovieObject(movie);
        MovieService.updateMovie(updatedMovie, movie.id).then((result) => {
            getMovies();
        }).catch((error) => {
            console.log("error in updateMovie", error);
        });
    };

});