import advertListService from './advertList.service'
import advertListComponent from './advertList.component'
import advertController from './advertList.controller'
import AdvertListService from './AdvertListModal.service'
import { route } from '../../app.route'
import AdvertListModalCtrl from './AdvertListModal.controller'
const advertListModule = angular.module('advertListModule',[])
.component('advertList',advertListComponent)
.service(advertListService.name,advertListService)
.service(AdvertListService.name,AdvertListService)
.controller(AdvertListModalCtrl.name,AdvertListModalCtrl)
.config(route)
export default advertListModule

