import angular from "angular";
import RouteModule from "angular-route";
import ngResource from "angular-resource";
import "bootstrap/dist/css/bootstrap.css";
import "angular-ui-bootstrap";
import { route } from "./app.route";

import advertBookingModule from "./advertBooking/advertBooking.module";
import { AccueilComponent } from "./accueil/accueil.component";

angular
  .module("app", ['ui.bootstrap', "ngResource", RouteModule, advertBookingModule.name])
  .value("apiUrl", API_URL)
  .component("accueil", AccueilComponent)
  .config(route);
