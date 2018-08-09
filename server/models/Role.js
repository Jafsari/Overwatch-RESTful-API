const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    Hero:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Hero'
    }]
});