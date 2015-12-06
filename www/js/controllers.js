angular.module('app.controllers', [])

.controller('myReportSubmissionCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, ModelSvc, $state) {
  $scope.model = ModelSvc;
  $scope.onLogin = function(){
    if($scope.model.username === "nick" && $scope.model.password==="nick"){
      //ok we are good to go to the next page
      alert('Hello ' + $scope.model.username + ' and welcome to My Report App');
      $scope.model.newReport = {
        reportName:'new report'
      };
      $state.go("newReport");
    }else{
      alert("Incorrect user name or password");
    }
  }

})

.controller('newReportCtrl', function($scope,ModelSvc, $state) {
  $scope.model = ModelSvc;
  $scope.onNext = function(){
    var msg = JSON.stringify($scope.model.newReport);
    alert(msg);
    $state.go("checklist"); //go to the NAME of the state
    //when you use href="xx" in the html this goes to the URL
  }
  //$scope.model.newReport.reportName === 'new report' I hope!
})

.controller('checklistCtrl', function($scope,ModelSvc, $state) {
  $scope.model = ModelSvc;
  $scope.onNext = function(){
    var msg = JSON.stringify($scope.model.newReport);
    alert(msg);
    $state.go("summary");
  };

})

.controller('summaryCtrl', function($scope) {

})

.controller('alertCtrl', function($scope) {

})

.controller('thanksCtrl', function($scope) {

})
