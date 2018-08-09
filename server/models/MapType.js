const mongoose = require('mongoose');

const mapTypeSchema = new mongoose.Schema({
    Type: String,
    map:[{
        type: mongoose.Schema.Types.ObjectId, ref: 'Map'
    }]
});

const MapT = mongoose.model('MapType', mapTypeSchema);
module.exports = MapT;