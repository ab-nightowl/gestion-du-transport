import CarpoolingListService from "./carpoolingList.service";
import carpoolingListCmp from "./carpoolingList.component";
import CarpoolingModalService from "./carpoolingModal.service";
import CarpoolingModalCtrl from "./carpoolingModal.controller";
import statusFilter from "./status.filter";
import { route } from "../app.route";

const carpoolingListModule = angular
.module("carpoolingListModule", [])
.component("carpoolingListCmp", carpoolingListCmp)
.controller(CarpoolingModalCtrl.name, CarpoolingModalCtrl)
.service(CarpoolingListService.name, CarpoolingListService)
.service(CarpoolingModalService.name, CarpoolingModalService)
.filter('statusFilter', statusFilter)
.config(route);

export default carpoolingListModule;