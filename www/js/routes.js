angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('myReportSubmission', {
      url: '/home',
      templateUrl: 'templates/myReportSubmission.html',
      controller: 'myReportSubmissionCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('newReport', {
      url: '/new',
      templateUrl: 'templates/newReport.html',
      controller: 'newReportCtrl'
    })
        
      
    
      
        
    .state('checklist', {
      url: '/checks',
      templateUrl: 'templates/checklist.html',
      controller: 'checklistCtrl'
    })
        
      
    
      
        
    .state('summary', {
      url: '/summary',
      templateUrl: 'templates/summary.html',
      controller: 'summaryCtrl'
    })
        
      
    
      
        
    .state('alert', {
      url: '/alert',
      templateUrl: 'templates/alert.html',
      controller: 'alertCtrl'
    })
        
      
    
      
        
    .state('thanks', {
      url: '/done',
      templateUrl: 'templates/thanks.html',
      controller: 'thanksCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});