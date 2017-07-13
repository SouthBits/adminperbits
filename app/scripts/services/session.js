'use strict';

/**
 * @ngdoc service
 * @name peradminApp.session
 * @description
 * # session
 * Factory in the peradminApp.
 */
angular.module('peradminApp')
  .factory('session', function ($cookieStore) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      setSession: function () {
        var adpp_admin_session = {
          "company": "Mg==",
          "address_locale": "MQ==",
          "admin_locale": "T1NFU0Ex",
          "app": "MQ=="

        }
        $cookieStore.put('essentials',adpp_admin_session);
      },
      getSession: function () {
        return $cookieStore.get('essentials');
      },
      setLogin: function (user) {
        var app_admin_log = {
          app_admin:user.app_admin,
          email: user.email,
          session: user.session
        }
        $cookieStore.put('login',app_admin_log);
      },

    };
  });
