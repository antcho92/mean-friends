var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/list.html',
      controller: 'friendsController',
      controllerAs: 'FC'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'friendsController',
      controllerAs: 'FC'
    })
    .when('/edit/:friendId', {
      templateUrl: 'partials/edit.html',
      controller: 'friendsController',
      controllerAs: 'FC'
    })
    .when('/show/:friendId', {
      templateUrl: 'partials/show.html',
      controller: 'friendController',
      controllerAs: 'FC'
    })
    .otherwise('/');
})
