## Preparation & Installation
  - sudo npm i -g typescript
  - sudo npm i -g @angular/cli
  - brew install yarn
  - yarn install

## Local server

`ng serve` - development local server.
`ng serve --prod` - prod local server.
Navigate to `http://localhost:4200/`.

## Build

`ng build` - test environment <br>
`ng build --prod --aot` - production environment <br>
`ng build -c staging` - production environment <br>
<b>The build artifacts will be stored in the `dist/eis-front` directory.</b>

## Generate documentation

`yarn run docs`

## Running unit tests

`yarn test`
