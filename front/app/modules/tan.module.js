import collabBookVehicleSocietyComponent from '../components/collab.book.vehicle.society.component'

import bookVehicleService from '../services/book.vehicle.service'
import bookVehicleController from '../controllers/book.vehicle.controller'
import urlsService from '../services/urls.service';
 import UiBootrap from 'angular-ui-bootstrap'

const tanModule = angular.module('tanModule',[UiBootrap])

.controller('bookVehicleController', bookVehicleController)
.service('bookVehicleService', bookVehicleService)
.constant('urlsService', urlsService)
// <rag-user-create></rag-user-create>
.component('collabBookVehicleSocietyComponent', collabBookVehicleSocietyComponent)


.config(($routeProvider)=>{
	$routeProvider

	.when('/collab/book/create',{
		template : '<collab-book-vehicle-society-component></collab-book-vehicle-society-component>',
	})
})



export default tanModule
