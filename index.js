'use strict';

import TicketGenerator from './src/index.js';
import config from './config';
import data from './items';

var ticketGenerator = new TicketGenerator(data.items, config);

// Generate the ticket.
ticketGenerator.generateTicket();

// Display the ticket.
ticketGenerator.display();