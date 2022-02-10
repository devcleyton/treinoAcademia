var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/treinoA", {
            templateUrl: "treinoA.html"
        })
        .when("/treinoB", {
            templateUrl: "treinoB.html"
        });
});