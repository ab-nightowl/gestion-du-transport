import collabBookVehicleSocietyComponent from '../components/collab.book.vehicle.society.component'
import authentificationComponent from '../components/authentification.component'
import reservationsSocietyComponent from '../components/reservations.society.component'

import bookVehicleService from '../services/book.vehicle.service'
import bookVehicleController from '../controllers/book.vehicle.controller'

import authentificationService from '../services/authentification.service'
import authentificationController from '../controllers/authentification.controller'


import urlsService from '../services/urls.service'
import UiBootrap from 'angular-ui-bootstrap'

import ngSessionStorage from 'angular-sessionstorage'
// import uiBootstrapDatetimePicker from 'angular-ui-bootstrap-datetimepicker'
require('angular-ui-bootstrap-datetimepicker')

const tanModule = angular.module('tanModule',[UiBootrap,ngSessionStorage])
.constant('urlsService', urlsService)

.component('reservationsSocietyComponent', reservationsSocietyComponent)
.controller('bookVehicleController', bookVehicleController)

.component('collabBookVehicleSocietyComponent', collabBookVehicleSocietyComponent)
.controller('bookVehicleController', bookVehicleController)
.service('bookVehicleService', bookVehicleService)

.component('authentificationComponent', authentificationComponent)
.controller('authentificationController', authentificationController)
.service('authentificationService', authentificationService)

.config(($routeProvider)=>{
	$routeProvider

	.when('/collaborateur/reservation/societe/creer',{
		template : '<collab-book-vehicle-society-component></collab-book-vehicle-society-component>',
	})

	.when('/connexion',{
		template : '<authentification-component></authentification-component>',
	})

	.when('/collaborateur/reservations/societe',{
		template : '<reservations-society-component></reservations-society-component>'
	})
})
// .run(['$rootScope']){
//
// }


// app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
//     $rootScope.$on('$routeChangeStart', function (event) {
//
//         if (!Auth.isLoggedIn()) {
//             console.log('DENY');
//             event.preventDefault();
//             $location.path('/login');
//         }
//         else {
//             console.log('ALLOW');
//             $location.path('/home');
//         }
//     });
// }]);


export default tanModule
