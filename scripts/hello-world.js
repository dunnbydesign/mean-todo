/* globals angular */

angular.module('todoListApp')
.directive('helloWorld', function () {
  console.log('This is a custom directive!')
  return {
    template: 'This is the hello world directive.',
    restrict: 'E' // allows Angular to only use directive as an Element
  }
})
