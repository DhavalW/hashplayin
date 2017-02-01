angular.module("hashplayin")

.controller("mainController",["$scope", mainController]);

function mainController ($scope){

	$scope.visitor = {
		artisteName : "",
		firstName :'',
		emailId:''
	};

	$scope.display = {
		showEmailInput : false
	};

	var siteState = {
		artisteNameEntered : false
	};

	$scope.inputChangeArtiste = function(){
		siteState.artisteNameEntered = !!$scope.visitor.artisteName.trim();
		if(!siteState.artisteNameEntered)
			$scope.display.showEmailInput = false;
	};

	$scope.keypressActionArtiste = function(keyEvent) {

		if (keyEvent.which === 13){
			$scope.display.showEmailInput = siteState.artisteNameEntered;

		}
	};

	$scope.blurActionArtiste = function(){
		$scope.display.showEmailInput = siteState.artisteNameEntered;
	};

};
