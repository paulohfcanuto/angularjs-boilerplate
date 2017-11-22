# AngularJS Boilerplate

### Dependencies

```
yarn install
```

### Launch the App in development mode
```
yarn run start
```

### Build

| Build Mode        | Command(s)     | Output   | Uglify |
| ----------------- | -------------- | -------  | ------ |
| Dev               | build          | dev      | false  |
|                   | start          |          |        |
| Prod              | build:prod     | dist     | true   |
|                   | start:prod     |          |        |

```
yarn run start
yarn run start:prod
```

### Test

Support is built-in for unit testing with Karma
Unit tests should be added to a file named **.spec.js somewhere in the app directory tree. To run the tests:

```
yarn run test:unit
```
