const mongoose = require('mongoose');

const mapTypeSchema = new mongoose.Schema({
    Type: String,
    map:[{
        type: Schema.Types.ObjectId, ref: 'Map'
    }]
});

const MapT = mongoose.model('MapType', mapSchema);
module.exports = MapT;