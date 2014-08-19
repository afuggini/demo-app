angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('ContactsCtrl', function($scope, Contacts) {
  $scope.contacts = Contacts.all();
})

.controller('ContactDetailCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('ChatsCtrl', function($scope, $stateParams) {
})

.controller('ChatSingleCtrl', function($scope, $stateParams, $ionicScrollDelegate) {
  setTimeout(function() {
    $ionicScrollDelegate.$getByHandle('mainScroll').scrollBottom();
  },50);
})

.controller('SettingsCtrl', function($scope) {
});
