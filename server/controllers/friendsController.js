console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model("Friend");

module.exports = {
  index: function(req, res) {
    Friend.find({}, function(err, data) {
      if (err) {
        console.log(err);
        throw err;
      }
      res.json(data);
    });
  },
  create: function(req, res) {
    var friendInstance = new Friend(req.body);
    friendInstance.save(function(err, addedFriend) {
      if (err) {
        throw err;
      }
      console.log('person successfully added to db');
      res.json(addedFriend);
    });
  },
  show: function(req, res) {
    Friend.findOne({_id: req.params.id}, function(err, person) {
      if (err) { throw err }
      res.json(person);
    })
  },
  delete: function(req, res) {
    console.log('running delete request');
    Friend.remove({_id: req.params.id}, function(err) {
      if (err) {
        console.log('err deleting friend');
        throw err;
      }
      res.json("Friend successfully deleted");
    })
  },
  edit: function(req, res) {
    Friend.findOne({_id: req.body._id}, function(err, friend) {
      if (err) {throw err}
      console.log(friend);
      friend.firstName = req.body.firstName;
      friend.lastName = req.body.lastName;
      friend.birthday = req.body.birthday;
      friend.save(function(err) {
        if (err) {throw err}
        res.json('Friend successfully edited');
      })
    })
  }
}
