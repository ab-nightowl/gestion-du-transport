export function route($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/", {
      template: "<accueil></accueil>"
    })
    .when("/collaborateur/reservations/creer", {
      template: "<advert-booking-cmp></advert-booking-cmp>"
    })
    .otherwise({
      redirectTo: "/"
    });
}
