import collabBookVehicleSocietyComponent from '../components/collab.book.vehicle.society.component'
import authentificationComponent from '../components/authentification.component'

import bookVehicleService from '../services/book.vehicle.service'
import bookVehicleController from '../controllers/book.vehicle.controller'

import authentificationService from '../services/authentification.service'
import authentificationController from '../controllers/authentification.controller'


import urlsService from '../services/urls.service'
import UiBootrap from 'angular-ui-bootstrap'

import ngSessionStorage from 'angular-sessionstorage'
// import momentPicker from 'angular-moment-picker'
// import moment from 'moment'

const tanModule = angular.module('tanModule',[UiBootrap,ngSessionStorage])
.constant('urlsService', urlsService)

.component('collabBookVehicleSocietyComponent', collabBookVehicleSocietyComponent)
.controller('bookVehicleController', bookVehicleController)
.service('bookVehicleService', bookVehicleService)

.component('authentificationComponent', authentificationComponent)
.controller('authentificationController', authentificationController)
.service('authentificationService', authentificationService)

.config(($routeProvider)=>{
	$routeProvider

	.when('/collab/book/create',{
		template : '<collab-book-vehicle-society-component></collab-book-vehicle-society-component>',
	})

	.when('/connexion',{
		template : '<authentification-component></authentification-component>',
	})
})



export default tanModule
