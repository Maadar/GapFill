(function() {
  'use strict';

  angular
    .module('cartProject')
    .service('ExerciseModel', ExerciseModelService);

  /** @ngInject */
  function ExerciseModelService() {
    var _list = [];
    var sum = 0;

    return {
      getList: function() {
        return _list;
      },

      getSum:function() {
        return sum;
      },

      addItem: function(model) {
        return _list.push(model);
      },

      evaluateItems: function() {
        _list.forEach(function(element) {
          element.evaluate();
        });
        return _list;
      },

      resetValues: function() {
        _list.forEach(function(element) {
          element.reset();
        });
        return _list;
      },

      getScore: function() {
        _list.forEach(function(element) {
        });
        return _list.reduce(function(sum, element) {
          return sum + ((element.isCorrect) ? 1 : 0);
        }, 0);
      }
    }
  }
})();
