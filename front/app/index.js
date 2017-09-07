import angular from 'angular';
import RouteModule from 'angular-route';
import 'bootstrap/dist/css/bootstrap.css';
import { route } from './app.route';
import { AccueilComponent } from './accueil/accueil.component';
import UiBootrap from 'angular-ui-bootstrap'

import tanModule from './modules/tan.module'
import headerComponent  from './header/header.component'

angular.module('app', [RouteModule, 'tanModule'])

.value( 'apiUrl', API_URL)
.component('accueil', AccueilComponent)
.component ('headerComponent', headerComponent)

.config(route);
