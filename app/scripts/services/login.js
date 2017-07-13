'use strict';

/**
 * @ngdoc service
 * @name peradminApp.login
 * @description
 * # login
 * Factory in the peradminApp.
 */
angular.module('peradminApp')
  .factory('login', function ($http,$base64,session,$location) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {   // /FCbits/AdminAPP/login
      loginAdmin : function (user,app){
        var logind_send =  {
          app_admin:$base64.encode(user.app_admin),
          email: user.email,
          pass: $base64.encode(user.pass),
          idapp: app
        }
        console.log(logind_send);
        $http({
                url: 'https://www.mimorton.com/FCbits/AdminAPP/login',
                method: "POST",
                headers : {'Content-Type': 'application/json'},
                data:logind_send
              })
        .then(function(response) {
            Object.keys(response).forEach(function(key){
              session.setLogin({useradmin:response[key].useradmin,
                                email:response[key].email,
                                session: response[key].session});
              if(response[key].session==true){
                $location.path('/Admin');
              }
            })


          },
          function(response) { // optional
            console.log("%j",response);
          });
        }

    };
  });
