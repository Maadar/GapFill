(function() {
  'use strict';

  angular
    .module('cartProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, Item, GetJson, ExerciseModel, $compile, $stateParams) {

    $scope.showProgress = 0;

    angular.element(".content").html(GetJson.getContent());
    $compile(angular.element(".content").contents())($scope);

    $scope.displayButtons = function() {
      $scope.checkButtonVisibility = false;
      $scope.getScoreButtonVisibility = false;
    };

    $scope.checkAnswers = function() {
      ExerciseModel.evaluateItems();

    };

    $scope.reset = function() {
      $scope.showProgress = 0;
      $scope.displayButtons();
      ExerciseModel.resetValues();
    };

    $scope.getScore = function() {
      var sum = ExerciseModel.getScore();
      $scope.showProgress = sum;
      if ($scope.showProgress === 5) {
        $scope.checkButtonVisibility = true;
        $scope.getScoreButtonVisibility = true;
      }
    }

  }
})();
