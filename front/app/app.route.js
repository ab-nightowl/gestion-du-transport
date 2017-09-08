export function route($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/home", {
      template: "<accueil></accueil>"
    })
    .when("/collaborateur/annonces/creer", {
      template: "<advert-publisched></advert-publisched>"
    })
    .when("/collaborateur/reservations", {
      template: "<carpooling-list-cmp></carpooling-list-cmp>"
    })
    .when("/collaborateur/reservations/creer", {
      template: "<advert-booking-cmp></advert-booking-cmp>"
    })
    .otherwise({
      redirectTo: "/home"
    });
}
