	var app = angular.module("myApp", ["xeditable"]);
	app.run(function(editableOptions) {
		editableOptions.theme = 'bs3'; 
	});
	app.controller('myController',function($scope,$http)
	{
		
		$http.get('data.json').success(function(response)
		{
			$scope.Data=response;
		});


		$scope.AddSummary=function()
		{
				$scope.Data[1].push({Summary:$scope.summary});
				$scope.summary="";
		
		};


			$scope.AddExperience=function()
		{
			$scope.Data[5].push({Experience:$scope.experience});
			$scope.experience="";
		};


			$scope.AddProject=function()
		{
			$scope.Data[2].push({Project:$scope.project});
			$scope.project="";
		};


			$scope.AddSkill=function()
		{
			$scope.Data[3].push({Skill:$scope.skill});
			$scope.skill="";
		};


			$scope.AddEducation=function()
		{
			$scope.Data[6].push({Education:$scope.education});
			$scope.education="";
		};
				
			
		
	});