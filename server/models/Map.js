const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    Type:{
        type: Schema.Types.ObjectId, ref: 'mapType'
    },
    Location:{
        type:String
    },
    Terrain:{
        type:String
    },
    officialDescription:{
        type:String
    },
    Strategy:{
        Attack:{
            type:String
        },
        Defense:{
            type:String
        }
    }
});

const MapL = mongoose.model('Map', mapSchema);
module.exports = MapL;