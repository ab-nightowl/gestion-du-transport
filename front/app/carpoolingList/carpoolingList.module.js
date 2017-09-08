import carpoolingListService from "./carpoolingList.service";
import carpoolingListCmp from "./carpoolingList.component";
import carpoolingModalService from "./carpoolingModal.service";
import carpoolingModalCtrl from "./carpoolingModal.controller";
import { route } from "../app.route";

const carpoolingListModule = angular
.module("advertListModule", [])
.component("carpoolingListCmp", carpoolingListCmp)
.controller(carpoolingModalCtrl.name, carpoolingModalCtrl)
.service(carpoolingListService.name, carpoolingListService)
.service(carpoolingModalService.name, carpoolingModalService)
.config(route);

export default carpoolingListModule;