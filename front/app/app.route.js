export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
         template: '<accueil></accueil>'
    })
    .when('/collaborateur/annonces/creer',{
        template : '<advert-publisched></advert-publisched>'
    })
    .when('/collaborateur/annonces',{
        template: '<advert-list></advert-list>'
    })
    .otherwise({
        redirectTo: '/home'
    });

}
