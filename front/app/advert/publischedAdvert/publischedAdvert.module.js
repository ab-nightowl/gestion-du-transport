import AdvertPublischedService from './publischedAdvert.service'
import publischedAdvertComponent from './publichedAdvert.component'
import { route } from '../../app.route'
import AdvertPublischedModalService from './publischedAdvertModal.service'
import PublischedAdvertModalCtrl from './publischedAdvertModal.controller'
const advertModule = angular.module('advertModule',[])
.component('advertPublisched',publischedAdvertComponent)
.service(AdvertPublischedService.name,AdvertPublischedService)
.service(AdvertPublischedModalService.name,AdvertPublischedModalService)
.controller(PublischedAdvertModalCtrl.name,PublischedAdvertModalCtrl)
.config(route)
export default advertModule

