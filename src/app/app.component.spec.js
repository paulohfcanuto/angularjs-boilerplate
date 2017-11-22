import { appModule } from './app.module';

describe('app', () => {

    let subjectElement;
    let subjectController;
    let scope;

    beforeEach(() => {       
        angular.mock.module(appModule.name);
        angular.mock.inject(($compile, $rootScope) => {
            subjectElement = $compile(`<my-app></my-app>`)($rootScope.$new());
            subjectController = subjectElement.controller('myApp');
            scope = subjectElement.isolateScope();
        });
    });

    it('should create component', () => {
        expect(subjectElement).toBeTruthy();
        expect(subjectController).toBeTruthy();
    });

});