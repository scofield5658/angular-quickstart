import angular from 'angular';

angular.module('main').component('hello', {
  template: '<h3>{{$ctrl.greeting}} galaxy!</h3>'
             + '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

  controller() {
    this.greeting = 'hello';

    this.toggleGreeting = function toggleGreeting() {
      this.greeting = (this.greeting === 'hello') ? 'whats up' : 'hello';
    };
  },
});
