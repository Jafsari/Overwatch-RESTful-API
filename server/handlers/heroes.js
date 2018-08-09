const { Hero } = require('../models');

function getHeroes(request, response, next) {
  return Hero.find().populate('heroes abilities').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getHero(request, response, next) {
  return Hero.findById(request.params.id).populate('heroes abilities').exec().then(Hero =>{
           return response.status(200).json(formatResponse(Hero));
          }).catch(err => {
            console.error(err);
          });
}

function updateHero(request, response, next) {
  return Hero.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(Hero =>{
           return response.status(200).json(formatResponse(Hero));
          }).catch(err => {
            console.error(err);
          });
}

function deleteHero(request, response, next) {
  return Hero.findByIdAndRemove(request.params.id).then(Hero =>{
           return response.status(200).json(formatResponse(Hero));
          }).catch(err => {
            console.error(err);
          });
}

function createHero(request, response, next) {
  return Hero.create(request.body).then(Hero =>{
           return response.status(201).json(formatResponse(Hero))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getHeroes,
  getHero,
  createHero,
  updateHero,
  deleteHero, 
};