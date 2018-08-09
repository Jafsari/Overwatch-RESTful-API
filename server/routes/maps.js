const express = require('express');
const { mapsHandler } = require('../handlers');
const router = express.Router();

router
  .route('')
    .get(mapsHandler.getMaps)
    .post(mapsHandler.createMap);
    

router
  .route('/:id')
    .get(mapsHandler.getMap)
    .patch(mapsHandler.updateMap)
    .delete(mapsHandler.deleteMap);

module.exports = router;