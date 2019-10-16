import angular from 'angular';

angular.module('main').component('about', {
  template: require('./about.html'),
  controller($state) {
    this.jumpToPeople = function jumpToPeople() {
      $state.go('people');
    };
  },
});
