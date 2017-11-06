# AngularJS Material Dashboard


The master branch contains:
* angularJS
* webpack
* sass
* component-based routing (@uirouter/angularjs)
* ES6 support (babel)
* unit testing with karma
* end-to-end testing with protractor
* linting with eslint


### Dependencies

```
yarn install
```

### Launch the App

To run the app in development mode:

```
npm run start
```

### Build

| Build Mode        | Command(s)     | Output   | Uglify |
| ----------------- | -------------- | -------  | ------ |
| Dev               | build          | dev      | false  |
|                   | start          |          |        |
| Prod              | build:prod     | dist     | true   |
|                   | start:prod     |          |        |

```
npm run start
npm run start:prod
```

### Test

Support is built-in for unit testing with Karma 
Unit tests should be added to a file named **.spec.js somewhere in the app directory tree. To run the tests:

```
npm run test:unit
```
