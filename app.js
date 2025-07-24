var app = angular.module('myApp' , []);

var controller = function($scope){
    $scope.register = function(){
        $scope.msg = 'Welcome ' + $scope.user.firstname + ' ! You have signed in';
    }
};

app.controller('FormController' , controller);