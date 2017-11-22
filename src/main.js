import { appModule } from './app/app.module';

angular.bootstrap(document.body, [ appModule.name ], { strictDi: true });
