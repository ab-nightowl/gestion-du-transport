import advertService from './advert.service'
import publischedAdvertComponent from './publichedAdvert.component'
import advertController from './advert.controller'
import { route } from '../app.route'

const advertModule = angular.module('advertModule',[])
.component('advertPublisched',publischedAdvertComponent)
.service(advertService.name,advertService)
.config(route)
export default advertModule

