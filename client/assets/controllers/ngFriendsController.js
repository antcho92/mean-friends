app.controller('friendsController', ['$scope', 'friendFactory', '$location', '$routeParams', function($scope, friendFactory, $location, $routeParams) {
  console.log('friendsController loaded');
  var self = this;
  self.friends = [];
  self.newFriend = {};
  self.friend = {};
  function updateFriends(data) {
    self.friends = data;
    self.newFriend = {};
  }
  // loads data from db
  friendFactory.index(updateFriends);
  self.refresh = function() {
    friendFactory.getFriends(updateFriends);
  }
  // Create function
  self.create = function() {
    console.log('create function pressed');
    if (!self.newFriend.firstName || !self.newFriend.lastName || !self.newFriend.birthday) {
      console.log('required fields not present');
      return;
    }
    friendFactory.create(self.newFriend, function() {
      $location.url('/');
    });
  }
  self.delete = function(id) {
    friendFactory.delete(id, updateFriends);
    friendFactory.index(updateFriends);
  }
  self.getFriend = function() {
    console.log('getting friend');
    friendFactory.getFriend($routeParams.friendId, function(friend) {
      self.friend = friend;
    })
  }
  self.update = function() {
    self.editFriend._id = $routeParams.friendId;
    friendFactory.update(self.editFriend, function() {
      $location.url(`/show/${$routeParams.friendId}`);
      friendFactory.index(updateFriends);
    });
  }
}])
