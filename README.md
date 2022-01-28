
# React Laravel Auth

>A react laravel authentication starter.

## Features

- Register
- Login
- Logout
- Reset password

## API Endpoints

| End Point                                           | Verb |Use                                       |
| ----------------------------------------------------|------|------------------------------------------|
|`/api/register`                                      |POST  |Register a user                           |
|`/api/login`                                         |POST  |Login                                     |
|`/api/user`                                          |GET   |Gets authenticated user details           |
|`/api/logout`                                        |POST  |Logout                	                |
|`/api/forgot`                                        |POST  |Generate token for resetting password   	|
|`/api/reset`                                         |POST  |Reset password               	|

## Installation

- Clone the repository
- cd into the repository
- Copy .env.example to .env
- Set the DB_ environment variables in .env file with a mail server of your choice
- Create a database with the name specified in DB_DATABASE
- ```composer install```
- ```php artisan key:generate```
- ```php artisan migrate```
- cd client
- ```npm install```

## Run
```
# Run client 
npm run dev

# Run backend 
php artisan serve
```


## Built With

* [Laravel](https://laravel.com/) / [Laravel Sanctum](https://laravel.com/docs/8.x/sanctum) - Backend / Authentication System 
* [ReactJS](https://reactjs.org/) / [Typescript](https://www.typescriptlang.org/) - Frontend 




