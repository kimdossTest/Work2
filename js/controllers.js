var appCon = angular.module('starwars', []);

appCon.controller('loadCasting', ['$scope', '$http', function($scope, $http){
	
	$scope.showCasting = "Prequel trilogy";
	$scope.showStory = "Episode 1: The Phantom Menace";

	$scope.sendFeedBack = function(){
		alert("Thanks for your comment!")
	}

    $http.get('data/casting.json').then(function(contents) {
      $scope.castingList = contents.data;
    });

    $http.get('data/story.json').then(function(contents) {
      $scope.storyLines = contents.data;
    });
}])




