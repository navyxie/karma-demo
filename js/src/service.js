var app = angular.module('Application', []);

app.controller('MainCtrl', function($scope, $http) {
    $http.get('Users/users.json').success(function(data){
        $scope.users = data;
    });
    $scope.text = 'Hello World!';
});