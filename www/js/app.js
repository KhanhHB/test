// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
    angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
       cache: false,
       url: '/jobs',
       views: {
        'jobs-tab': {
          templateUrl: 'templates/job-index.html',
          controller: 'JobIndexCtrl'
       }
      }
    })

    .state('tab.pet-detail', {
      url: '/pet/:petId',
      views: {
        'pets-tab': {
          templateUrl: 'templates/pet-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'adopt-tab': {
          templateUrl: 'templates/job-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/job-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })
    
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
    })

    .state('menu', {
        url: '/menu',
        abstract: true,
        templateUrl: 'templates/menu.html',
    })

    .state('menu.general', {
      url: '/general/:jobId',
      views: {
        'menuContent' : {
          templateUrl: "templates/general.html",
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('menu.quote', {
      url: '/quote/:jobId',
        views: {
            'menuContent' : {
                templateUrl: "templates/quote.html",
                controller: 'PetDetailCtrl'
            }    
        }
    })

    .state('menu.report', {
      url: '/report/:jobId',
        views: {
            'menuContent' : {
                templateUrl: "templates/report.html",
                controller: 'PetDetailCtrl'
            }
        }
    })

   .state('menu.about', {
     url: '/pets/:petId',
     views: {
      'menuContent' : {
        templateUrl: "templates/pet-detail.html",
        controller: 'PetDetailCtrl'
      }
     }
    })

    .state('new-job', {
        url: '/new-job',
        templateUrl: 'templates/new-job.html',
        controller: 'JobCreationCtrl'
    })

    .state('new-quote', {
      url: '/new-quote/:jobId',
      templateUrl: "templateUrl/quote.html",
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('home');
});


