/* globals angular */

'use strict'

angular.module('todoListApp')

.controller('mainCtrl', function ($scope, dataService) { // dataService here is a dependency injection
  $scope.addTodo = function () {
    var todo = { name: 'This is a new todo', completed: false }
    $scope.todos.unshift(todo)
  }

  $scope.helloConsole = dataService.helloConsole

  $scope.helloWorld = function () {
    console.log('Hello there! This is the helloWorld controller function in the main Ctrl!')
  }

  function addDataToScope (response) {
    // console.log(response.data)
    $scope.todos = response.data
  }

  dataService.getTodos(addDataToScope)

  // $scope.todos = [
  //   { name: 'walk the dog' },
  //   { name: 'pay the bills' },
  //   { name: 'make travel arrangements' },
  //   { name: 'buy groceries' },
  //   { name: 'do homework' },
  //   { name: 'prepare dinner' }
  // ]

  $scope.deleteTodo = function (todo, index) {
    $scope.todos.splice(index, 1)
    dataService.deleteTodo(todo)
  }

  $scope.saveTodos = function () {
    var filteredTodos = $scope.todos.filter(function (todo) {
      return todo.edited
    })
    dataService.saveTodos(filteredTodos)
  }
})
