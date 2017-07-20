const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req,res) => {
  queries
  .showStickers
  .getAll()
  .then(stickers => {
    res.json(stickers);
  });
})
router.get('/api', (req, res) => {
  queries
  .showStickers
  .getAll()
  .then(stickers => {
    res.json(stickers);
  });
  res.send('hi');
});

module.exports = router;
