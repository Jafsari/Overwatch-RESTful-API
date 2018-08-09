const express = require('express');
const { heroesHandler } = require('../handlers');
const router = express.Router();

router
  .route('')
    .get(heroesHandler.getHeroes)
    .post(heroesHandler.createHero);
    

router
  .route('/:id')
    .get(heroesHandler.getHero)
    .patch(heroesHandler.updateHero)
    .delete(heroesHandler.deleteHero);

module.exports = router;