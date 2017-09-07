import AdvertBookingService from "./advertBooking.service";
import AdvertBookingCmp from "./advertBooking.component";
import AdvertModalService from "./advertModal.service";
import AdvertModalCtrl from "./advertModal.controller";
import advertBookingFilter from "./advertBooking.filter";
import { route } from "../app.route";

const advertBookingModule = angular
  .module("advertBookingModule", [])
  .component("advertBookingCmp", AdvertBookingCmp)
  .controller(AdvertModalCtrl.name, AdvertModalCtrl)
  .service(AdvertBookingService.name, AdvertBookingService)
  .service(AdvertModalService.name, AdvertModalService)
  .filter('addressFilter', advertBookingFilter)
  .config(route);

export default advertBookingModule;
