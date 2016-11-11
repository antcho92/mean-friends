app.controller('friendController', function($scope, friendFactory, $routeParams) {
  console.log('friendController loaded')
  console.log($routeParams.friendId);
  var self = this;
  self.friend = {};
  friendFactory.getFriend($routeParams.friendId, function(friend) {
    self.friend = friend;
    console.log(self.friend);
  })
});
