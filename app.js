var app = angular.module('donationApp', ['ui.bootstrap']);

/*app.config(function($authProvider) {
  $authProvider.twitter({
  url: '/auth/twitter',
  authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
  redirectUri: window.location.origin,
  oauthType: '1.0', 
  popupOptions: { width: 495, height: 645 } 
});
})
*/ 
app.controller('homeCtrl', ['$scope', function($scope) {
  $scope.donation = {};
  $scope.donation.max = 1000;
  $scope.donation.totalDonation = 5;
  $scope.donation.amount = 5;
  $scope.donation.members = 0;
  $scope.donation.save = false;
  $scope.acceptDonation = function() {
    $scope.donation.totalDonation += parseInt($scope.donation.amount, 10);
    $scope.donation.members++;
  }
  $scope.tellFriends = function() {
    $scope.postToTwitter(); 
  }
  $scope.saveForLater = function(){
    swal("Saved!")
  }
}])