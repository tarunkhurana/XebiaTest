'use strict';
angular.module('shoppingCart').
factory('CartProductService',function(){

 var cartItem=function(id, name,price,qty) {
    this.id = id; 
    this.name = name;
    this.price = price;
    this.qty = qty;
}

 var product=function(id, name, description, price,qty,cal,calories) {
    this.id = id; 
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal =cal;
    this.calories=calories;
    this.qty=qty;
}

return{  
  product:product,
  cartItem:cartItem
}


});


