import angular from "angular";
import RouteModule from "angular-route";
import google from "angular-google-places-autocomplete";
import "angular-google-places-autocomplete/src/autocomplete.css";
import date from "angular-ui-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { route } from "./app.route";
import { AccueilComponent } from "./accueil/accueil.component";
import "./common/input.css";
import advertModule from "./advert/publischedAdvert/publischedAdvert.module";
import UiBootrap from "angular-ui-bootstrap";
import tanModule from "./modules/tan.module";
import advertBookingModule from "./advertBooking/advertBooking.module";
import advertListModule from "./advert/advertList/advertList.module";
import headerComponent from "./header/header.component";
import carpoolingListModule from "./carpoolingList/carpoolingList.module";
angular
  .module("app", [
    RouteModule,
    "tanModule",
    advertBookingModule.name,
    advertModule.name,
    google,
    date,
    advertListModule.name,
    carpoolingListModule.name,
  ])
  .value("apiUrl", API_URL)
  .component("accueil", AccueilComponent)
  .component("headerComponent", headerComponent)
  .config(route);
