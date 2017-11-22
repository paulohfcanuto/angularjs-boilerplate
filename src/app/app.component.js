class AppController {}

// styles
import './app.component.scss';

export const appSelector = 'myApp';

export const appComponent = {
    template: require('./app.component.html'),
    controller: AppController,
    controllerAs: 'vm'
};
