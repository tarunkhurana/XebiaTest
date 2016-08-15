'use strict';

angular.module('shoppingCart').
controller('productCtrl',['$rootScope','$scope','$routeParams','StoreService','CartService',function($rootScope,$scope,$routeParams,StoreService,CartService){

var store=StoreService.store;
 var init = function(){
    
   $scope.product = store.getProduct($routeParams.productid);
    $scope.cart=CartService.cart;

};

    init();

}])


