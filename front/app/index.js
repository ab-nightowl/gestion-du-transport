import angular from 'angular';
import RouteModule from 'angular-route';
import google from 'angular-google-places-autocomplete'
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import 'angular-google-places-autocomplete/src/autocomplete.css'
import advertModule from './advert/advert.module'
angular.module('app', [RouteModule,advertModule.name,google])
.value( 'apiUrl', API_URL)
.component('accueil', AccueilComponent)
.config(route)


