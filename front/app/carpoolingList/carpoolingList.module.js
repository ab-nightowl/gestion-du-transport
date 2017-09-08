import CarpoolingListService from "./carpoolingList.service";
import carpoolingListCmp from "./carpoolingList.component";
import CarpoolingModalService from "./carpoolingModal.service";
import CarpoolingModalCtrl from "./carpoolingModal.controller";
import { route } from "../app.route";

const carpoolingListModule = angular
.module("carpoolingListModule", [])
.component("carpoolingListCmp", carpoolingListCmp)
.controller(CarpoolingModalCtrl.name, CarpoolingModalCtrl)
.service(CarpoolingListService.name, CarpoolingListService)
.service(CarpoolingModalService.name, CarpoolingModalService)
.config(route);

export default carpoolingListModule;