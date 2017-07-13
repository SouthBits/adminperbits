'use strict';

/**
 * @ngdoc function
 * @name peradminApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the peradminApp
 */
angular.module('peradminApp')
  .controller('LoginCtrl', function ($scope,session,$cookieStore,login) {
    $scope.user = {
      app_admin: null,
      email: null,
      pass: null
    };
    session.setSession();
    console.log(session.getSession().company)

    $scope.startSession = function (user) {
      login.loginAdmin(user,session.getSession().app)
    }

  });
