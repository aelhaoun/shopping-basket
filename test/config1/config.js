module.exports = {
	// The currency
    currency : 'p',

    // Configuration ot the available items in the store.
    // The products that are solded, have 'solded' attribute.
    availableItems : {
		'Apple' : {
	    	unitPrice : 25
	    },
	    'Orange' : {
	    	unitPrice : 30
	    },
	    'Garlic' :{
	    	unitPrice : 15
	    },
	    'Papaya' : {
	    	unitPrice : 50,
	    	solded : {
	    		FOR : 3,
	    		AS : 2
	    	}
	    }
    }
};
