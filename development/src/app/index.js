'use strict';
  angular.module('shoppingCart', [
  'ngRoute'
])
  .run(['$route', '$rootScope', '$location', function ($route, $rootScope) {
   
}]).config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/store', {
        templateUrl: 'app/views/pages/store/store.html',
        controller: 'storeCtrl',
        resolve:{
         store:['StoreService',function(StoreService){

           return StoreService.store;

         }],
          cart:['CartService',function(CartService){

           return CartService.cart;

         }]

        }
        
      }).
      when('/product/:productid',{
        templateUrl:'app/views/pages/product/product.html',
        controller:'productCtrl'
      }).
      when('/cart',{
        templateUrl:'app/views/pages/cart/cart.html',
        controller:'cartCtrl'
      })

      .otherwise({
        redirectTo: '/store'
      });
  }])



