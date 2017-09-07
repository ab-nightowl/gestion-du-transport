import advertService from './publischedAdvert.service'
import publischedAdvertComponent from './publichedAdvert.component'
import advertController from './publischedAdvert.controller'
import { route } from '../../app.route'

const advertModule = angular.module('advertModule',[])
.component('advertPublisched',publischedAdvertComponent)
.service(advertService.name,advertService)
.config(route)
export default advertModule

