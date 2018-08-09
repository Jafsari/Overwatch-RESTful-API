const { Role} = require('../models');

function getRoles(request, response, next) {
  return Role.find().populate('Roles abilities').exec().then(companies => {
            return response.status(200).json(formatResponse(companies));
          }).catch(err => {
            console.error(err);
          });
}

function getRole(request, response, next) {
  return Role.findById(request.params.id).populate('Roles abilities').exec().then(Role =>{
           return response.status(200).json(formatResponse(Role));
          }).catch(err => {
            console.error(err);
          });
}

function updateRole(request, response, next) {
  return Role.findByIdAndUpdate(request.params.id, request.body, {new: true}).then(Role =>{
           return response.status(200).json(formatResponse(Role));
          }).catch(err => {
            console.error(err);
          });
}

function deleteRole(request, response, next) {
  return Role.findByIdAndRemove(request.params.id).then(Role =>{
           return response.status(200).json(formatResponse(Role));
          }).catch(err => {
            console.error(err);
          });
}

function createRole(request, response, next) {
  return Role.create(request.body).then(Role =>{
           return response.status(201).json(formatResponse(Role))
          }).catch(err => {
            console.error(err);
          });
}

module.exports = {
  getRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole, 
};