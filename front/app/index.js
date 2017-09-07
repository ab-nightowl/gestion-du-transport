import angular from "angular";
import RouteModule from "angular-route";
import "bootstrap/dist/css/bootstrap.css";
import "angular-ui-bootstrap";
import google from "angular-google-places-autocomplete"
import "angular-google-places-autocomplete/src/autocomplete.css"
import { route } from "./app.route";

import advertBookingModule from "./advertBooking/advertBooking.module";
import { AccueilComponent } from "./accueil/accueil.component";

angular
  .module("app", ['ui.bootstrap', google, RouteModule, advertBookingModule.name])
  .value("apiUrl", API_URL)
  .component("accueil", AccueilComponent)
  .config(route);
