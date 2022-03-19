# Pyyne Bank Aggregator
Simple bank aggregator built with Node.js using TypeScript.

[![CircleCI](https://circleci.com/gh/Guilospanck/pyyne-bank-aggregator/tree/main.svg?style=svg)](https://circleci.com/gh/Guilospanck/pyyne-bank-aggregator/tree/main)
[![codecov](https://codecov.io/gh/Guilospanck/pyyne-bank-aggregator/branch/main/graph/badge.svg?token=86L4EII3VH)](https://codecov.io/gh/Guilospanck/pyyne-bank-aggregator)


## Installation
You can install it using Node.js installed in your machine or by using Docker.

### Using local machine
Git clone this repository
```bash
git clone https://github.com/Guilospanck/pyyne-bank-aggregator.git
```
and then <code>cd</code> into it
```bash
cd /pyyne-bank-aggregator
```
Run Yarn to install dependencies
```bash
yarn
```
Then run:
```bash
yarn start:dev
```
To start up the server.

### Using Docker
With [Docker] and [Docker Compose] installed, ```cd``` into the project directory and run:
```bash
sudo docker-compose -f docker-compose.yml up -d --build
```
In order to view the logs once it's built, run:
```bash
sudo docker ps # get the id of the container
sudo docker logs [id]
```

## How to use
Once the server is started, you can test it by sending ```GET``` commands to ```http://localhost:4444/```.
- ```bank/transactions```
  This endpoint will retrieve transactions from banks registered.

- ```bank/balances```
  This endpoint will retrieve balances from banks registered.

Inside the ```/docs``` folder resides the Insomnia .json file if you wanna use it. Just import it in your insomnia and make requests.

You can also make the requests using ```curl```:
```bash
curl localhost:4444/bank/balances
curl localhost:4444/bank/transactions
```

## Running tests
To run tests, you can run the coverage command:
```bash
yarn test-cov
```

## Technologies
- Node.js
- Express
- Clean Code Architecture
- Design Patterns
- Jest
- Pino (for logging)

## Project Structure
I'm using Clean Code Architecture for this project. The reason is because it provides a nicer and better way of changing and maintening the code, besides providing us the best out of design patterns and S.O.L.I.D. principles.

The goal is to have the code at the best readability possible and to have layers detached from each other. We must not be a slave to some library, some outside module or to some other part of our code.

Below we have the architectural names used for this project and their basic explanations.

```bash
.
├── applications
│   ├── errors
│   ├── interfaces
│   └── usecases
├── business
│   ├── dtos
│   ├── entities
│   ├── errors
│   └── usecases
├── infrastructure
│   ├── Bank1
│   ├── Bank2
│   ├── adapters
│   ├── http_server
│   └── repositories
├── interfaces
│   ├── controllers
│   └── middlewares
├── mocks
├── routes
└── shared
    └── utils
```

- ***Applications***: this layer is used for usecases rules. What we mean by that is that here lies all business cases related to the project. If an outsider look at our usecases, they must know what our project does even though they don't undestand it. So, for example, we have inside of <code>User</code> the <b>signin</b> and <b>signup</b> usecases. An outsider will know that the User part of our project lies on getting a user signed in and signed up.

- ***Business***: here we have all things related to our intrinsic company needs. In here we define the I/O structures, the entities for the databases and so on.

- ***Infrastructure***: basically everything related to the outside lies here: a module (like `express, typeorm, logger`) and a database (like `postgres`). This is the part of our application that is using something external.

- ***Interfaces***: this is our front door of the application. All requests will be redirected to this layer before it takes time into the interior of our project. He is the frontman that gives directions for the requests coming.

- ***Mocks***: basically used for testing purposes. Here we'll have dummy mocked requests, objects, functions, classes in order to execute our unit tests.

- ***Routes***: as the name describes, all our endpoints are located here.

- ***Shared***: finally, this is the layer where we have something that can be used throughout the application, something that more than one layer will use.


[Docker]: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04
[Docker Compose]: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04