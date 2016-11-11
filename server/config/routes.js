console.log('routes');
var friends = require('./../controllers/friendsController.js');

module.exports = function(app) {
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends/', friends.create);
  app.delete('/friends/:id', friends.delete);
  app.put('/friends', friends.edit);
}
