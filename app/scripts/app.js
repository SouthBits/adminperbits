'use strict';

/**
 * @ngdoc overview
 * @name peradminApp
 * @description
 * # peradminApp
 *
 * Main module of the application.
 */
angular
  .module('peradminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'base64'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/Admin', {
        templateUrl: 'views/main.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/Almacen', {
        templateUrl: 'views/almacen.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        //redirectTo: '/'
      });
    $locationProvider.hashPrefix('');
  });
