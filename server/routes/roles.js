const express = require('express');
const { rolesHandler } = require('../handlers');
const router = express.Router();

router
  .route('')
    .get(rolesHandler.getRoles)
    .post(rolesHandler.createRole);
    

router
  .route('/:id')
    .get(rolesHandler.getRole)
    .patch(rolesHandler.updateRole)
    .delete(rolesHandler.deleteRole);

module.exports = router;