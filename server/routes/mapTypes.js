const express = require('express');
const { mapTypesHandler } = require('../handlers');
const router = express.Router();

router
  .route('')
    .get(mapTypesHandler.getMapTypes)
    .post(mapTypesHandler.createMapType);
    

router
  .route('/:id')
    .get(mapTypesHandler.getMapType)
    .patch(mapTypesHandler.updateMapType)
    .delete(mapTypesHandler.deleteMapType);

module.exports = router;