const { MapL } = require('../models');

function getMaps(request, response, next) {
  return Hero.find().populate('heroes abilities').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getMap(request, response, next) {
  return Map.findById(request.params.id).populate('Mapes abilities').exec().then(Map =>{
           return response.status(200).json(formatResponse(Map));
          }).catch(err => {
            console.error(err);
          });
}

function updateMap(request, response, next) {
  return Map.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(Map =>{
           return response.status(200).json(formatResponse(Map));
          }).catch(err => {
            console.error(err);
          });
}

function deleteMap(request, response, next) {
  return Map.findByIdAndRemove(request.params.id).then(Map =>{
           return response.status(200).json(formatResponse(Map));
          }).catch(err => {
            console.error(err);
          });
}

function createMap(request, response, next) {
  return Map.create(request.body).then(Map =>{
           return response.status(201).json(formatResponse(Map))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getMaps,
  getMap,
  createMap,
  updateMap,
  deleteMap, 
};