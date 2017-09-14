import planningService from './planning.service'
import planningComponent from './planning.component'
import planningModalService from './planningModal.service'
import planningModalController from './planningModal.controller'
import { route } from '../../app.route'
const planningModule = angular.module('planningModule',[])
.component('planningCmp',planningComponent)
.service(planningService.name,planningService)
.service(planningModalService.name,planningModalService)
.controller(planningModalController.name,planningModalController)
.config(route)
export default planningModule

