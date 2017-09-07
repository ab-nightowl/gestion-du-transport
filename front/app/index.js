import angular from 'angular';
import RouteModule from 'angular-route';
import google from 'angular-google-places-autocomplete'
import 'angular-google-places-autocomplete/src/autocomplete.css'
import date from 'angular-ui-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import './common/input.css'
import advertModule from './advert/advert.module'
import UiBootrap from 'angular-ui-bootstrap'
import tanModule from './modules/tan.module'


import headerComponent  from './header/header.component'

angular.module('app', [RouteModule, 'tanModule',advertModule.name,google,date])

.value( 'apiUrl', API_URL)
.component('accueil', AccueilComponent)
.component ('headerComponent', headerComponent)

.config(route);
