const mongoose = require('mongoose');
const URI = require('../config.js')
mongoose.Promise = Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/overwatch-api2').then(function(){
    console.log('Connected to MongoDB')
}).catch(function(err){
    console.log(err)
});

exports.Hero = require('./Hero');
exports.Ability = require('./Ability');
exports.Role = require('./Role');
exports.MapL = require('./Map');
exports.MapT = require('./MapType');