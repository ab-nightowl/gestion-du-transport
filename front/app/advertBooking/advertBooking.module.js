import AdvertBookingService from "./advertBooking.service";
import AdvertBookingCmp from "./advertBooking.component";
import AdvertModalService from "./advertModal.service";
import AdvertModalCtrl from "./advertModal.controller"
import { route } from "../app.route";

const advertBookingModule = angular
  .module("advertBookingModule", [])
  .component("advertBookingCmp", AdvertBookingCmp)
  .controller(AdvertModalCtrl.name, AdvertModalCtrl)
  .service(AdvertBookingService.name, AdvertBookingService)
  .service(AdvertModalService.name, AdvertModalService)
  .config(route);

export default advertBookingModule;
