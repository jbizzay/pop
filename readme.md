## Pop

Pop is a Laravel 4 and AngularJS SPA starter site. There's lots of good stuff sprinkled in. So feel free to poke around, clone the repo, use it to start a new project, and submit feature requests, pull requests, or just browse the code and learn more about the awesome combination that is Laravel and Angular.


## Features

**Current:**
- Full user system and workflow (register/login/confirm/reset/roles/profile)
- Contact form
- Demo pages of all front-end widgets (bootstrap, angular-bootstrap, growl, ui-select, ng-table etc...)
- Limited Admin system
- Modal forms
- Popout menus
- Form validation and error handling
- Backend phpunit tests
- Imagecache


**Planned:**
- Permissions
- Full extensible admin dashboard
- Remove ardent dependency
- Frontend tests
- Add config for pop app
- Demo site
- Better file organization


## Sample Screens

![Components](https://dl.dropboxusercontent.com/s/babjx516akaku9p/pop-screen-components.png?dl=0)
![Profile](https://dl.dropboxusercontent.com/s/9raclfdx5to4jw8/pop-screen-profile.png?dl=0)
![Register Form](https://dl.dropboxusercontent.com/s/pxyp09nfj2u19dl/pop-screen-register.png?dl=0)

## Architecture

In this project, Angular is setup as a SPA (single page app). It handles all the routes, views, anything that happens on the client side, and interacts with the server (laravel) via REST json.

Here's a quick glance of 3rd party libraries used by pop:


### Frontend:

- bootstrap
- angular
- jquery
- jade
- less


### Backend:

- Laravel 4
- Magma
- Ardent
- Confide
- Entrust
- Woodling


### Package management:

- composer
- bower
- npm


### Testing:

- phpunit
- protractor
- jasmine


### Deployment/Build:

- gulp


## Getting started

**Setup**

    $ git clone http://github.com/jbizzay/pop newapp

    $ cd newapp

    $ composer update

    $ bower install

    $ npm install

    $ gulp

Add your machine name to the local environment in bootstrap/start.php

    $ mkdir app/config/local

    $ cp app/config/database.php app/config/local/database.php

Edit your database settings in database.php, create your database

    $ php artisan migrate
    
Take a look at the seeders setup in app/database/seeds. You can add roles and users here that will be created when you run:

    $ php artisan db:seed

If you want to use gulp watch, Setup your virtual host then edit the proxy setting in the browser-sync task in gulpfile.js. Then you can use

    $ gulp watch

You will also want to make these folders writeable by your webserver: /app/storage, /public/files

**Configuration**

Take a look around /app/config, as there are probably some more settings you will want to change. Also, you can start out with a good theme by adding a bootswatch theme to bower.json . Superhero is used by default.


**Testing**

***Integration***

If you need to install and setup protractor, you can follow this [tutorial](http://angular.github.io/protractor/#/tutorial)

Start testing server. Set laravel environment, which correlates to app/config/testing. The database set for the testing environment is testdb.sqlite

    $ LARAVEL_ENV=testing && php artisan serve --port=8787

In a separate terminal, start a Selenium server

    $ webdriver-manager start

In a separate terminal, run through integration tests. This script builds a starting sqlite database that contains all migrations and runs seeder. This way, you can run integration tests against a real database, with a consistent starting point. Edit the test-integration script if you want to call specific tests, or edit options. This will also open a browser with a report of the tests, including screenshots.

    $ cd test

    $ ./test-integration



