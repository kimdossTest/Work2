describe('testController', function() {
  var $httpBackend, $rootScope, $controller;
  var Url1 = 'data/casting.json',
      Url2 = 'data/story.json';

  beforeEach(module('starwars'));

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    //define for each http service
    $httpBackend.whenGET(Url1).respond('get casting');
    $httpBackend.whenGET(Url2).respond('get story');

    $rootScope = $injector.get('$rootScope');
    $controller = $injector.get('$controller');
    $scope = $rootScope.$new();
    $compile = $injector.get('$compile');
    httpCon = $controller('loadCasting', {$scope: $scope});
  }));
   

  it('should read json file', function(){
    expect($scope.castingList).not.toBeDefined();
    expect($scope.storyLines).not.toBeDefined();
    $httpBackend.flush();
    //fetch data from json via http service
    expect($scope.castingList).toBeDefined();
    expect($scope.castingList).toEqual('get casting');
    expect($scope.storyLines).toBeDefined();
    expect($scope.storyLines).toEqual('get story');
  });

});

