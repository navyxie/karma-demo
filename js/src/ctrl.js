var myApp = angular.module('myApp',[]);
	myApp.controller('MyController', function($scope) {
	$scope.spices = [
		{"name":"pasilla", "spiciness":"mild"},
		{"name":"jalapeno", "spiciness":"hot hot hot!"},
		{"name":"habanero", "spiciness":"LAVA HOT!!"}
	];
	$scope.spice = "hello feenan!";
});