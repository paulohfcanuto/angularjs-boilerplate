export const routeConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', { url: '/' });

    // no hashbang in urls
    $locationProvider.html5Mode(true);
};

routeConfig.$inject = [ '$stateProvider', '$urlRouterProvider', '$locationProvider' ];
