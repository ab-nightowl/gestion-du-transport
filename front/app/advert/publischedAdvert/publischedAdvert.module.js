import AdvertPublischedService from './publischedAdvert.service'
import publischedAdvertComponent from './publichedAdvert.component'
import { route } from '../../app.route'
import AdvertPublischedModalService from './publischedAdvertModal.service'
import AdvertModalCtrl from './publischedAdvertModal.controller'
const advertModule = angular.module('advertModule',[])
.component('advertPublisched',publischedAdvertComponent)
.service(AdvertPublischedService.name,AdvertPublischedService)
.service(AdvertPublischedModalService.name,AdvertPublischedModalService)
.controller(AdvertModalCtrl.name,AdvertModalCtrl)
.config(route)
export default advertModule

