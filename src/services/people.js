import angular from 'angular';

angular.module('main').service('PeopleService', ['$http', ($http) => {
  const service = {
    getAllPeople() {
      return $http.get('mock/people.json', { cache: true }).then(resp => resp.data);
    },

    getPerson(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }

      return service.getAllPeople().then(people => people.find(personMatchesParam));
    },
  };

  return service;
}]);
