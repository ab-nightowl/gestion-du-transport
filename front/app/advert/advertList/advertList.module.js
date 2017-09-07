import advertListService from './advertList.service'
import advertListComponent from './advertList.component'
import advertController from './advertList.controller'
import { route } from '../../app.route'

const advertListModule = angular.module('advertListModule',[])
.component('advertList',advertListComponent)
.service(advertListService.name,advertListService)
.config(route)
export default advertListModule

