const express = require('express');
const { abilitiesHandler } = require('../handlers');
const router = express.Router();

router
  .route('')
    .get(abilitiesHandler.getAbilities)
    .post(abilitiesHandler.createAbility);
    

router
  .route('/:id')
    .get(abilitiesHandler.getAbility)
    .patch(abilitiesHandler.updateAbility)
    .delete(abilitiesHandler.deleteAbility);

module.exports = router;