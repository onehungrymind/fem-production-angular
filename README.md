# Angular Production Course

![Angular Production Course App](apps/dashboard/src/assets/screenshots/app.png)

This is the sample project for the Angular Production course for Frontend Masters.

The sample project includes an Angular web application and a mock RESTful API within an Nx workspace by NRWL. The Angular application uses state and data libs to manage state and handle server communication. The state lib is built around NgRx and the application is entirely reactive.

## Prerequisites

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Node.js and NPM – we recommend using [NVM (Linux/Mac)](https://github.com/creationix/nvm) or [NVM-Windows (Windows)](https://github.com/coreybutler/nvm-windows)
- Install Angular CLI via `npm i -g @angular/cli`

## Web: Getting Started

```
git clone https://github.com/onehungrymind/fem-production-angular.git
cd fem-production-angular
yarn
npm run serve:all
```

The `serve:all` command is a convenience methods that runs the `serve:api` and `serve:web` commands concurrently. You can run each command separately if you need to.

```
"serve:api": "nx run api:serve",
"serve:web": "ng serve --open",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\""
```

The web application will open to [http://localhost:4200](http://localhost:4200) in your browser.

![Angular Production Course Api](apps/dashboard/src/assets/screenshots/api.png)

You can see the API by navigating to [http://localhost:3333/api/](http://localhost:3333/api/) in your browser.

> Note: the above terminal commands are for Mac. Remember to substitute the appropriate commands for your OS.

## Web: Running E2E

Because Cypress ships with Nx, E2E tests can be run with the command below.

```
npm run e2e
```

You can have Cypress watch and restart tests on test file changes with this command.

```
nx run dashboard-e2e:e2e --watch
```

## Docker

To start the application in a docker environment, we set up two Dockerfiles (one for each application, ex. client and api). We compose each of these via the `docker-compose.yaml` file.
The `Dockerfile` is the main file which contains the image for the client application; `Dockerfile.api` is the image for the api.

- To start the applications with docker-compose, use the following command: `docker-compose up --remove-orphans --build`.
  - If you need to just start client or api, append the name of what you need to build (ex. `docker-compose up --remove-orphans --build api` if you just need the api).
- To clean the containers, use the following command: `docker-compose down --rmi local -v --remove-orphans`.

If you need to run the images directly without docker-compose, you will need the following commands:

- First build the image: `docker build --tag fem:1.0 .`
- Once image is built successfully run it with: `docker run --publish 4200:4200 --name fem fem:1.0`

> NOTE: the `-f` flag may be needed when running an image named something other that `Dockerfile`.
