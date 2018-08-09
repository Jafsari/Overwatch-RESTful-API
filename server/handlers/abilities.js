const { Abilities } = require('../models');

function getAbilities(request, response, next) {
  return Hero.find().populate('heroes abilities').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getAbility(request, response, next) {
  return Ability.findById(request.params.id).populate('Abilityes abilities').exec().then(Ability =>{
           return response.status(200).json(formatResponse(Ability));
          }).catch(err => {
            console.error(err);
          });
}

function updateAbility(request, response, next) {
  return Ability.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(Ability =>{
           return response.status(200).json(formatResponse(Ability));
          }).catch(err => {
            console.error(err);
          });
}

function deleteAbility(request, response, next) {
  return Ability.findByIdAndRemove(request.params.id).then(Ability =>{
           return response.status(200).json(formatResponse(Ability));
          }).catch(err => {
            console.error(err);
          });
}

function createAbility(request, response, next) {
  return Ability.create(request.body).then(Ability =>{
           return response.status(201).json(formatResponse(Ability))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getAbilities,
  getAbility,
  createAbility,
  updateAbility,
  deleteAbility, 
};