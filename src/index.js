'use strict';

/**
 * This class is reponsible to generate a ticket
 * for a shopping basket.
 */
module.exports = class TicketGenerator {

   /**
    * Contstructor of our ticket generator.

    * @param {Array} Products, that the basket contains
    * @param {Object} The configuration of our store, the price of each
    * product + the sold parameters if the the product is solded.
    */
   constructor(items, config) {
       this.items = items;
       this.config = config.availableItems;
       this.currency = config.currency;
       this.elementsCounted = {};
       this.ticket = {};
   }

   /**
    * The method counts the elements in shopping basket,
    * the result is a javascript object that contains all
    * the information.
    */
   countItems() {
        this.elementsCounted = {};
   	    for(let name of this.items) {
    		this.elementsCounted[name] = this.elementsCounted[name] ? this.elementsCounted[name] + 1 : 1;
        }
   }

   /**
    * The method computes the price of each product in the
    * shopping basket.
    *
    * this method pre-requisit is to have already lunched the
    * countItems method.
    *
    * It is required to run countItems before running
    * caculatePrice otherwise, you wont have a solution.
    */
   calculatePrice() {
   		for (let key in this.elementsCounted) {
   			const count = this.elementsCounted[key];
   			const elementConfig = this.config[key];
   			var price = 0;
   			if (elementConfig === undefined) {
   				throw new Error('Element : ' + key + ', non existent in the store.');
   			} else if (elementConfig.solded === undefined) {
   				price = count * elementConfig.unitPrice;
   			} else {
   				let countSoldedLots = Math.floor(count / elementConfig.solded.FOR);
   				let priceSoldedLot = elementConfig.unitPrice * elementConfig.solded.AS;
   				let leftItems = count % elementConfig.solded.FOR;
   				price = countSoldedLots * priceSoldedLot +  leftItems * elementConfig.unitPrice;
   			}
   			this.ticket[key] = price
   		}
   }

   /**
    * This method generate the ticket.
    * The generated ticket is stored in the ticket object
    */
   generateTicket() {
   		this.countItems();
		this.calculatePrice();
   }

   /**
    * the method displays the ticket in the console.
    */
   display() {
   		for (let key in this.ticket) {
   			console.log(key  + ' : ' + this.ticket[key] + this.currency);
   		}
   }
}
