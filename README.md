# angular2-canlendar-todo
### 개요
![enter image description here](http://i65.tinypic.com/v8m0qt.png)
angular2 를 이용한 달력 Todo 리스트 입니다.  기본적인 angular2 의 데이터 흐름을 지켜볼 수 있습니다. input, output, EventEmitter, Template Local Variable, ng-if, ng-for, ng-class 등 을 사용하였습니다.

### 사용법
아래 명령어를 사용하면 http://localhost:3000 에서 동작합니다.
```
npm install
npm start
```
>npm 과 bower 가 설치 되어 있어야 합니다.

### 의존
```
  "dependencies": {
    "@angular/common": "^2.0.0-rc.3",
    "@angular/compiler": "^2.0.0-rc.3",
    "@angular/core": "^2.0.0-rc.3",
    "@angular/forms": "^0.1.1",
    "@angular/http": "^2.0.0-rc.3",
    "@angular/platform-browser": "^2.0.0-rc.3",
    "@angular/platform-browser-dynamic": "^2.0.0-rc.3",
    "@angular/router": "3.0.0-alpha.7",
    "@angular/router-deprecated": "2.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.3",
    "angular2-in-memory-web-api": "0.0.12",
    "bootstrap": "^4.0.0-alpha.2",
    "core-js": "^2.4.0",
    "font-awesome": "^4.6.3",
    "fuel-ui": "^0.3.6",
    "reflect-metadata": "^0.1.3",
    "rxjs": "5.0.0-beta.6",
    "systemjs": "0.19.27",
    "zone.js": "^0.6.12"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.2.0",
    "typescript": "^1.8.10",
    "typings": "^1.0.4"
  },
```

### 참조
- [angular2 document](https://angular.io/docs/ts/latest/) 를 참조하였습니다.
-  UI 를 위해 [fuel-ui](https://github.com/FuelInteractive/fuel-ui) 의 Component 와 Bootstrap UI 를 참조 하였습니다.
- 그 외 구글링 을 통하여 정보를 수집하였습니다.
