const knex = require('./knex'); // the connection!

module.exports = {
  showStickers: {
    getAll: function() {
      return knex('sticker');
    }
  },
  getOne(id) {
  },
  create(sticker) {
  },
  update(id, sticker) {
  },
  delete(id) {
  }
}
