'use strict';

describe('Controller: AlmacenCtrl', function () {

  // load the controller's module
  beforeEach(module('peradminApp'));

  var AlmacenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlmacenCtrl = $controller('AlmacenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlmacenCtrl.awesomeThings.length).toBe(3);
  });
});
