import angular from 'angular';
import '@uirouter/angularjs';

import 'angular/angular-csp.css';
import './index.scss';

const myApp = angular.module('main', ['ui.router']);
require('./home/components');
require('./home/services');

myApp.config(($stateProvider) => {
  const states = [
    { name: 'hello', url: '/hello', component: 'hello' },
    { name: 'about', url: '/about', component: 'about' },
    {
      name: 'people',
      url: '/people',
      component: 'people',
      resolve: {
        people: ['PeopleService', function getAllPeople(PeopleService) {
          return PeopleService.getAllPeople();
        }],
      },
    },
    {
      name: 'people.person',
      url: '/{personId}',
      component: 'person',
      resolve: {
        person: ['people', '$stateParams', function getPerson(people, $stateParams) {
          return people.find(person => person.id === $stateParams.personId);
        }],
      },
    },
  ];

  states.forEach((state) => {
    $stateProvider.state(state);
  });
});

myApp.run(() => {});
