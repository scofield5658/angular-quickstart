import angular from 'angular';

angular.module('main').component('hello', {
  template: require('./hello.html'),
  controller() {
    this.greeting = 'hello';
    this.toggleGreeting = function toggleGreeting() {
      this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello';
    };
  },
});
