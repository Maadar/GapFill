(function() {
  'use strict';

  angular
    .module('cartProject')
    .factory('Item', ItemModel);

  /** @ngInject */
  function ItemModel() {

    var Item = function(id, answer, inputType, options, inputValue) {
      this.id = id || 0;
      this.inputValue = inputValue || "";
      this.evaluated = false;
      this.isCorrect = false;
      this.answer = answer || "";
      this.inputType = inputType;
      this.options = options;
    }

    Item.prototype = {
      setId: function(id) {
        this.id = id;
      },

      setAnswers: function(answer) {
        this.answer = answer;
      },

      setOptions: function(options) {
        this.options = options;
      },

      setInputType: function(inputType) {
        this.inputType = inputType;
      },

      reset: function() {
        this.inputValue = "";
        this.evaluated = false;
        this.isCorrect = false;
      },

      evaluate: function() {
        this.evaluated = true;
        this.isCorrect = this.answer.find(function(answer) {
          return answer.toLowerCase() === this.inputValue.toLowerCase();
        }, this);
      }
    };
    return Item;
  }
})();
