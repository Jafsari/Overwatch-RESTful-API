const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    Hero:[{
        type: Schema.Types.ObjectId, ref: 'Hero'
    }]
});