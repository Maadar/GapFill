(function() {
  'use strict';

  angular
    .module('cartProject')
    .directive('gap', Gap);

  function Gap(Item, GetJson, ExerciseModel, $stateParams) {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'app/main/directive/html/gap.directive.html',
      link: function($scope, element, attrs) {
        var Model = new Item();
        Model.setId(attrs.id);
        $scope.Model = Model;
        ExerciseModel.addItem(Model);
        var containThisView = "";

        for (var key in containThisView) {
          if (Model.id == key) {
            $scope.Model.inputValue = containThisView[key];
          }
        }

        GetJson.getAnswers().forEach(function(answer) {
          if (Model.id === answer.id) {
            Model.setOptions(answer.options);
            Model.setAnswers(answer.answers);
            Model.setInputType(answer.type);
          }
        });
      }
    };
  };
})();
