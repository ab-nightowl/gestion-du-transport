export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
         template: '<accueil></accueil>'
    })
    .otherwise({
        redirectTo: '/home'
    });

}
