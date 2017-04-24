var TicketGenerator = require('../src/index.js');
const data = require('./items1');
const config = require('./config');
var assert = require('assert');

/**
 * Configuration tests.
 */
describe("Configuration", function() {
  it("Test currency configuration", function() {
    assert.equal(config.currency, 'p');
  });

  it("Test product availability", function() {
    assert.notDeepEqual(config.availableItems.Apple, undefined);
    assert.notDeepEqual(config.availableItems.Orange, undefined);
    assert.notDeepEqual(config.availableItems.Orange, undefined);
    assert.equal(config.availableItems.NonAvailable, undefined);
  });

  it("Test product solded", function() {
    assert.notDeepEqual(config.availableItems.Papaya.solded, undefined);
    assert.equal(config.availableItems.Orange.solded, undefined);
  });
});

/**
 * Test the ticket generation.
 */
describe("Ticket generator", function() {
  var ticketGenerator = new TicketGenerator(data.items, config);
  ticketGenerator.countItems();

  it("Test count elements", function() {
    assert.equal(ticketGenerator.elementsCounted.Apple, 2);
    assert.equal(ticketGenerator.elementsCounted.Orange, 2);
    assert.equal(ticketGenerator.elementsCounted.Garlic, 2);
    assert.equal(ticketGenerator.elementsCounted.Papaya, 6);
  });

  ticketGenerator.generateTicket();

  it("Test calculatePrice method", function() {
    assert.equal(ticketGenerator.ticket.Apple, '50');
    assert.equal(ticketGenerator.ticket.Orange, '60');
    assert.equal(ticketGenerator.ticket.Garlic, '30');
    assert.equal(ticketGenerator.ticket.Papaya, '200');
  });
});



// assert.throws(myFunction, 'missing foo', 'did not throw with expected message');

