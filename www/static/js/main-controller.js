angular.module("hashplayin")

.controller("mainController",["$scope", mainController]);

function mainController ($scope){

	// $scope.visitor = {
	// 	artisteName : '',
	// 	firstName :'',
	// 	emailId:''
	// };
	$scope.visitor = {
		artisteName : 'Indian Ocean',
		firstName :'Dhaval',
		emailId:'dwathare@gmail.com',
		fanCount:100000

	};


	$scope.frames = {
		number:1
	};

	$scope.story = {
		track:'createABuzz',
		version:1
	};

	$scope.setStory= function(trk,ver){
		$scope.story = {
			track:trk,
			version:ver
		};
		$scope.frames.number = 3;
	};

	var nextStory = function(){
		switch($scope.story.track){
			case 'createABuzz':
				$scope.setStory('planATour',1);
				break;
			case 'planATour':
				$scope.setStory('tapSuperfans',1);
				break;
			case 'tapSuperfans':
				$scope.setStory('raiseFunds',1);
				break;
			case 'raiseFunds':
				$scope.setStory('growFanbase',1);
				break;
		}

	};

	var nextFrame = function(){
		$scope.frames.number++;
	};
	var prevFrame = function(){
		$scope.frames.number--;
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

	$scope.onGoClick = function(){
		if ( ($scope.visitor.firstName.length >0 && $scope.visitor.firstName.trim() !="")
			&& ( $scope.visitor.emailId.length >0 && $scope.visitor.emailId.trim() !="") ) {

			nextFrame();
		}
	};

	$scope.fanCountKeyPress = function(keyEvent){
		if(keyEvent.which == 13 && $scope.story.version == 0){
			$scope.setStory("createABuzz",1);
		}
	};

	$scope.fanCountBlur = function(){
		$scope.setStory("createABuzz",1);
	};

	$scope.cycleStage2Frames = function(keyEvent){
		if (keyEvent.which === 32){
			if($scope.frames.number >= 3 && $scope.story.version >0){
				nextFrame();
				if ($scope.frames.number >7)
					nextStory();
			}

			if ($scope.story.version == 0){
				$scope.setStory('createABuzz',1);
			}
		}
		if(keyEvent.which === 13){
			if($scope.frames.number > 3 && $scope.story.version >0){
				prevFrame();
			}
		}

	};

	$scope.onFrameClick = function(){
		if($scope.frames.number >= 3 && $scope.story.version >0){
			nextFrame();
			if ($scope.frames.number >7)
				nextStory();
		}
	}
};
