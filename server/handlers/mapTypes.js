const { MapT } = require('../models');

function getMapTypes(request, response, next) {
  return Hero.find().populate('heroes abilities').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getMapType(request, response, next) {
  return MapType.findById(request.params.id).populate('MapTypees abilities').exec().then(MapType =>{
           return response.status(200).json(formatResponse(MapType));
          }).catch(err => {
            console.error(err);
          });
}

function updateMapType(request, response, next) {
  return MapType.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(MapType =>{
           return response.status(200).json(formatResponse(MapType));
          }).catch(err => {
            console.error(err);
          });
}

function deleteMapType(request, response, next) {
  return MapType.findByIdAndRemove(request.params.id).then(MapType =>{
           return response.status(200).json(formatResponse(MapType));
          }).catch(err => {
            console.error(err);
          });
}

function createMapType(request, response, next) {
  return MapType.create(request.body).then(MapType =>{
           return response.status(201).json(formatResponse(MapType))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getMapTypes,
  getMapType,
  createMapType,
  updateMapType,
  deleteMapType, 
};