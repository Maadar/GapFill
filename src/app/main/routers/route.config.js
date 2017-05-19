(function() {
  'use strict';

  angular
    .module('cartProject')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('task', {
          url: '/task/:id',
          templateUrl: 'app/main/views/task1.html',
          controller: 'MainController',
          resolve: {
            ExerciseJSON: function(GetJson, $stateParams) {
              return GetJson.loadJson($stateParams.id);
            }
          }
        });
       $urlRouterProvider.otherwise('/task/1');
    });
})();
