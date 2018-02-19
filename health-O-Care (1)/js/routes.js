angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('makeAnAppointment', {
    url: '/maa',
    templateUrl: 'templates/makeAnAppointment.html',
    controller: 'makeAnAppointmentCtrl'
  })

  .state('buyMedicines', {
    url: '/buymed',
    templateUrl: 'templates/buyMedicines.html',
    controller: 'buyMedicinesCtrl'
  })

  .state('firstAid', {
    url: '/page6',
    templateUrl: 'templates/firstAid.html',
    controller: 'firstAidCtrl'
  })

  .state('reminder', {
    url: '/rem',
    templateUrl: 'templates/reminder.html',
    controller: 'reminderCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});