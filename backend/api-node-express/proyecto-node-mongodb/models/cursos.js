const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    }, 
    profesor:{
        type: String,
        required: true
    }, 
    precio:{
        type: Number,
        
    }
});

module.exports = mongoose.model('Curso', userSchema);
