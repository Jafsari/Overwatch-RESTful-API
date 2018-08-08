const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    Hero:[{
        type: Schema.Types.ObjectId, ref: 'Hero'
    }]
});