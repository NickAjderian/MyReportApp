angular.module('app.controllers', [])

.controller('myReportSubmissionCtrl', function($scope) {

})

.controller('loginCtrl', function($scope, ModelSvc, $state) {
  $scope.model = ModelSvc;
  $scope.onLogin = function(){
    if($scope.model.username === "nick" && $scope.model.password==="nick"){
      //ok we are good to go to the next page
      //alert('Hello ' + $scope.model.username + ' and welcome to My Report App');
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
    //alert(msg);
    $state.go("summary");
    //SKIP CHECKLIST FOR NOW $state.go("checklist"); //go to the NAME of the state
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

.controller('summaryCtrl', function($scope, ModelSvc, $state) {
  $scope.model = ModelSvc;
  $scope.items = [];
  $scope.items.push({key:'Report Name', value:$scope.model.newReport.reportName});
  $scope.items.push({key:'Staff Name', value:$scope.model.newReport.staffName});
  $scope.items.push({key:'Date Submitted', value:$scope.model.newReport.dateSubmitted});
  $scope.items.push({key:'Comments', value:$scope.model.newReport.comments});
  $scope.items.push({key:'Quality Checks', value:$scope.model.newReport.qualityChecksOk ? 'OK' : 'Not done'});
  $scope.items.push({key:'Printable', value:$scope.model.newReport.printableOk ? 'PRINTABLE': 'Not done'});
  $scope.items.push({key:'Security Checks', value:$scope.model.newReport.securityOk ? 'OK': 'Not done'});
  $scope.items.push({key:'Sign Off', value:$scope.model.newReport.signOffNeeded ? 'Required': 'Not required'});

  //signOffNeeded
  $scope.onNext = function(){
    var msg = JSON.stringify($scope.model.newReport);
    alert(msg);
    $state.go("thanks");
  }

})

.controller('alertCtrl', function($scope) {

})

.controller('thanksCtrl', function($scope) {

})
