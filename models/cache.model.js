var mongoose = require('mongoose');

//table=> collection
//row=> document

var cacheSchema = mongoose.Schema({
    key: {
        type: String,        
    },
    value: { 
        type: String 
    },
    created: {
        type: Date,
        default: () => { return new Date() }
    }
});

module.exports = mongoose.model("cache", cacheSchema); 
