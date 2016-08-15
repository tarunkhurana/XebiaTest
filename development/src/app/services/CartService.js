'use strict';
angular.module('shoppingCart').
factory('CartService',['CartProductService',function(CartProductService){

 var cart=function cart() {
  this.items=[];
  this.cartName="shopping-cart";
}

var cartItem=CartProductService.cartItem;


cart.prototype.loadItems = function () {

    var items = localStorage != null ? localStorage[this.cartName + "_items"] : null;
    if (items != null) {
            var items = JSON.parse(items);
            for (var i = 0; i < items.length; i++) {
                    var item = items[i];            
                    item = new cartItem(item.id, item.name, item.price, item.qty);
                    this.items.push(item);
              
            }
       
    }
}

cart.prototype.saveItems = function () {
    if (localStorage != null) {
        localStorage[this.cartName + "_items"] = JSON.stringify(this.items);
    }
}

cart.prototype.addItem = function (id, name, price, quantity) {
  
    if (quantity != 0) {
       var found=false;
       if(!found){
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];           
                if(item.id==id){
                    found=true;
               
                item.qty = Number(item.qty + quantity);
                
                if(item.qty<=0){
                      
                      this.items.splice(i,1);

                }

                }
                
                    
                
            }             
        }
       }

        if (!found) {
            var item = new cartItem(id, name, price, quantity);
            this.items.push(item);
        }
        this.saveItems();
    }


cart.prototype.getTotalPrice = function () {
    var total = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
            total += Number(item.qty * item.price);
    }
    return total;
}

cart.prototype.getTotalCount = function () {

    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];       
        count += Number(item.qty);
       
    }
    return count;
}

cart.prototype.clearItems = function () {
    this.items = [];
    this.saveItems();
}

var myCart = new cart();
myCart.loadItems();


return{  
  cart:myCart
}

}]);


