var app = angular.module('myApp');
app.directive('aGreatEye', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<h1>lidless, wreathed in flame, 1 times</h1>'
    };
});
