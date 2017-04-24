var TicketGenerator = require('../src/index.js');
var assert = require('assert');

const data1 = require('./config1/items');
const config1 = require('./config1/config');

const data2 = require('./config2/items');
const config2 = require('./config2/config');



/**
 * Configuration tests.
 */
describe("Configuration", function() {
  it("Test currency configuration", function() {
    assert.equal(config1.currency, 'p');
  });

  it("Test product availability", function() {
    assert.notDeepEqual(config1.availableItems.Apple, undefined);
    assert.notDeepEqual(config1.availableItems.Orange, undefined);
    assert.notDeepEqual(config1.availableItems.Orange, undefined);
    assert.equal(config1.availableItems.NonAvailable, undefined);
  });

  it("Test product solded", function() {
    assert.notDeepEqual(config1.availableItems.Papaya.solded, undefined);
    assert.equal(config1.availableItems.Orange.solded, undefined);
  });
});

/**
 * Test the ticket generation.
 */
describe("Ticket generator 1", function() {
  var ticketGenerator = new TicketGenerator(data1.items, config1);
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

describe("Ticket generator 2", function() {
  var ticketGenerator = new TicketGenerator(data2.items, config2);
  ticketGenerator.generateTicket();
  assert.equal(ticketGenerator.ticket.Apple, '20');
  assert.equal(ticketGenerator.ticket.Orange, '40');
});

/**
 * Test errors.
 */
describe("Test errors", function() {
  const dataError = require('./configError/itemsThrowError');
  var ticketGenerator = new TicketGenerator(dataError.items, config1);

  it("Test elements not in the store", function() {
    assert.throws(function() {
      ticketGenerator.generateTicket()
    },
    Error,
    'Element : ItemNotInTheStore, non existent in the store.'
    );
  });
});