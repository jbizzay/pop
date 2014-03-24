angular.module('app', [
  'ngResource', 'ngRoute', 'ngAnimate', 'ngTable', 'angular-growl',
  'checklist-model'
])

.config(function (growlProvider) {
  growlProvider.globalTimeToLive(5000);
})

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/views/home.html'
    })
    .when('/about', {
      controller: 'AboutCtrl',
      templateUrl: '/views/about.html'
    })
    .when('/contact', {
      controller: 'ContactCtrl',
      templateUrl: '/views/contact.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: '/views/login.html'
    })
    .when('/user/:username', {
      controller: 'UserCtrl',
      templateUrl: '/views/user.html'
    })
    .when('/admin', {
      controller: 'AdminCtrl',
      templateUrl: '/views/admin/dashboard.html'
    })
    .when('/admin/users', {
      controller: 'AdminUsersCtrl',
      templateUrl: '/views/admin/users.html',
      resolve: {
        users: function (UserService) {
          return UserService.query();
        }
      }
    })
    .when('/admin/users/:id/edit', {
      controller: 'AdminUsersEditCtrl',
      templateUrl: '/views/admin/users-edit.html',
      resolve: {
        user: function ($route, UserService) {
          return UserService.get($route.current.params.id);
        },
        roles: function ($route, Api) {
          return Api.Roles.query().$promise;
        }
      }
    })
    .when('/admin/roles', {
      controller: 'AdminRolesCtrl',
      templateUrl: '/views/admin/roles.html',
      resolve: {
        roles: function (Api) {
          return Api.Roles.query().$promise;
        }
      }
    })
    .when('/admin/roles/:id/edit', {
      controller: 'AdminRolesEditCtrl',
      templateUrl: '/views/admin/roles-edit.html',
      resolve: {
        role: function ($route, Api) {
          return Api.Roles.get({ id: $route.current.params.id });
        }
      }
    })
    .otherwise({
      redirectTo: '/'
    });
})

.run(function ($rootScope, AuthService, Flash) {
  $rootScope.greeting = 'Hello world!';
  // Load up the currently logged in user from the server
  // @todo: Load from local storage first for quicker page draw?
  AuthService.loadCurrentUser();
  $rootScope.$on('$routeChangeStart', function () {
    //FlashService.clear();
  });
});
