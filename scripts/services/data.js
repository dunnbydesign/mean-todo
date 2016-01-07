/* globals angular */

'use strict'

angular.module('todoListApp')

.service('dataService', function ($http) { // $http here is a dependency injection
  this.helloConsole = function () { // this refers to 'dataService'
    console.log('This is the hello console service!')
  }

  this.getTodos = function (addDataToScope) {
    $http.get('mock/todos.json')
    .then(addDataToScope)
  }

  this.deleteTodo = function (todo) {
    console.log('The ' + todo.name + ' has been deleted!')
  }

  this.saveTodos = function (todos) {
    console.log(todos.length + ' todos has been saved!')
  }
})
