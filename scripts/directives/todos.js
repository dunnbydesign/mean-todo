/* globals angular */

'use strict'

angular.module('todoListApp')

.directive('todos', function () {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true // replaces the todos directive tag with the template located at the templateUrl
  }
})
