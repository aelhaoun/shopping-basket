module.exports = {
	// The currency
    currency : 'p',

    // Configuration ot the available items in the store.
    // The products that are solded, have 'solded' attribute.
    availableItems : {
		'Apple' : {
	    	unitPrice : 10,
	    	solded : {
	    		FOR : 4,
	    		AS : 2
	    	}
	    },
	    'Orange' : {
	    	unitPrice : 20,
	    	solded : {
	    		FOR : 3,
	    		AS : 2
	    	}
	    }
    }
};
