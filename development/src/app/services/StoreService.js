'use strict';
angular.module('shoppingCart').
    factory('StoreService', ['CartProductService', function (CartProductService) {


        var product = CartProductService.product;

        var store = function () {

            this.products = [
                new product(1, "Apple", "Eat one every day to keep the doctor away!",12,1,90,[{'calName':'cartenoid','calType':'Neglegible'},{'calName':'Fiber','calType':'Average'},{'calName':'Folates','calType':'Low'},{'calName':'Potassium','calType':'Neglegible'},{'calName':'Vitamin C','calType':'Average'}]),
                new product(2, "Grapefruit", "Pink or red, always healthy and delicious.",16,1,120,[{'calName':'cartenoid','calType':'Neglegible'},{'calName':'Fiber','calType':'Average'},{'calName':'Folates','calType':'Low'},{'calName':'Potassium','calType':'Neglegible'},{'calName':'Vitamin C','calType':'Average'}]),
                new product(3, "Grape", "Wine is great, but grapes are even better.",20,1,50,[{'calName':'cartenoid','calType':'Neglegible'},{'calName':'Fiber','calType':'Average'},{'calName':'Folates','calType':'Low'},{'calName':'Potassium','calType':'Neglegible'},{'calName':'Vitamin C','calType':'Average'}]),
                new product(4, "Papaya", "Super-popular for breakfast.",8,1,70,[{'calName':'cartenoid','calType':'Neglegible'},{'calName':'Fiber','calType':'Average'},{'calName':'Folates','calType':'Low'},{'calName':'Potassium','calType':'Neglegible'},{'calName':'Vitamin C','calType':'Average'}]),
                new product(5, "Pineapple", "Enjoy it (but don't forget to peel first).",10,1,80,[{'calName':'cartenoid','calType':'Neglegible'},{'calName':'Fiber','calType':'Average'},{'calName':'Folates','calType':'Low'},{'calName':'Potassium','calType':'Neglegible'},{'calName':'Vitamin C','calType':'Average'}])
            ];


        }


        store.prototype.getProduct = function getProduct(id) {
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == id)
                    return this.products[i];
            }
            return null;
        }

        var myStore = new store();



        return {
            store: myStore
        };


    }]);


