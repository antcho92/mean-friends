app.factory('friendFactory', ['$http', function($http) {
  console.log('Friend Factory loaded');
  var factory = {};
  factory.friends = [];

  factory.index = function(callback) {
    $http.get('/friends').then(function(returned_data) {
      factory.friends = returned_data.data;
      callback(factory.friends);
    });
  }
  factory.getFriends = function(callback) {
    callback(factory.friends);
  }
  factory.create = function(newFriend, callback) {
    $http.post('/friends', newFriend).then(function(addedUser) {
      if (typeof(callback) == 'function') {
          callback(addedUser.data);
        }
    })
  }
  factory.getFriend = function(id, callback) {
    for (let friend of factory.friends) {
      if (friend._id === id) {
        callback(friend);
      }
    }
  }
  factory.delete = function(id, callback) {
    $http.delete(`friends/${id}`).then(function(response) {
      console.log(response.data);
    });
  }
  factory.update = function(friend, callback) {
    $http.put(`/friends`, friend).then(function(response) {
      console.log(response.data);
      callback();
    })
  }
  console.log(factory);
  return factory;
}]);
