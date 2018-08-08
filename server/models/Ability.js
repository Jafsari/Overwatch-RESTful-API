const heroSchema = new mongoose.Schema({
Hero:{
     type: Schema.Types.ObjectId, ref: 'Hero' 
},
Name:{
    type:String
},
Description:{
    type:String
},
MaxRange:{
    type:Number
},
Duration:{
    type:Number
},
Cooldown:{
    type:Number
},
Damage:{
    type:Number
},
moveSpeed:{
    type:Number
},
projectileSpeed:{
    type:Number
},
areaofEffect:{
    type:Number
},
rateofFire:{
    type:Number
},
Ammo:{
    type:Number
},
Type:{
    type:String
},
castingTime:{
    type:Number
},
chargeRequired:{
    type:Number
},
reloadTime:{
    type:Number
}
});

const Hero = mongoose.model('Ability', abilitySchema);
module.exports = Ability;