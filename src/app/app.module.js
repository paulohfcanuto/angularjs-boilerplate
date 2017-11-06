import * as angular from 'angular';

import { appComponent, appSelector } from './app.component';

import { default as uiRouter } from '@uirouter/angularjs';
import { routeConfig } from './app-routing.config';

export const appModule = 'app';

angular.module(appModule, [uiRouter])
  .component(appSelector, appComponent)
  .config(routeConfig);
