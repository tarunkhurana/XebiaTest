'use strict';

angular.module('shoppingCart').
controller('cartCtrl',['$rootScope','$scope','CartService',function($rootScope,$scope,CartService){

 var init = function(){
  
    $scope.cart=CartService.cart;

};

    init();

}])


