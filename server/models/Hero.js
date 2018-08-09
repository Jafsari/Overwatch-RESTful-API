const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    RealName:{
        type:String
    },
    Age:{
        type:Number
    },
    Nationality:{
        type:String
    },
    Occupation:{
        type:String
    },
    Base:{
        type:String
    },
    Affiliation:{
        type:String
    },
    Voice:{
        type:String
    },
    Health:{
        type:Number
    },
    Armor:{
        type:Number
    },
    Role:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role'
    }],
    Abilities:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Ability'
    }],
    Strategy:{
        type:String
    }
  });

  const Hero = mongoose.model('Hero', heroSchema);
  module.exports = Hero;