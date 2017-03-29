(function(){
    'use strict';

    //initi controller to angular
    angular.module('LunchMe',[]).
        controller('LucnhWarnController',function($scope){
            $scope.LunchListComma = "";
            $scope.Message = "";
            $scope.class = "";
            $scope.CheckLunch = function() {
               var listArrray  = $scope.LunchListComma.replace(/[, ]+/g, " ").trim().split(' ');
               alert(listArrray);
               if(!$scope.LunchListComma){
                    $scope.Message = "Please enter data first";
                    $scope.class = " alert-danger";
               }
               else if(listArrray.length < 4 ){
                    $scope.Message = "Enjoy!";
                    $scope.class = " alert-success";
               }else{
                          $scope.Message = "Too much!";
                    $scope.class = " alert-danger";
               }
               
            }
    });
})();