'use strict';

angular.module('shoppingCart').
controller('storeCtrl',['$rootScope','$scope','store','cart',function($rootScope,$scope,store,cart){
  

 var reset=function(){

 	

 }

 var init=function(){       
   $scope.store = store;
   $scope.cart=cart;
 }

 init();


}])


