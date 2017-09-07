export function route ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        template: '<accueil></accueil>'
    })
    .when('/collaborateur/annonces/creer',{
        template : '<advert-publisched></advert-publisched>'
    })
    .otherwise({
        redirectTo: '/collab/book/create'
    });

}
