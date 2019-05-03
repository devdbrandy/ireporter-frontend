# iReporter Frontend App

[![CircleCI](https://circleci.com/gh/devdbrandy/ireporter-frontend.svg?style=svg)](https://circleci.com/gh/devdbrandy/ireporter-frontend) [![Maintainability](https://api.codeclimate.com/v1/badges/4ea779147d454d8fa543/maintainability)](https://codeclimate.com/github/devdbrandy/ireporter-frontend/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4ea779147d454d8fa543/test_coverage)](https://codeclimate.com/github/devdbrandy/ireporter-frontend/test_coverage)

# Overview

iReporter app enables users (citizen) to bring any form of corruption to the notice of appropriate authorities and the general public. Visit iReporter live demo: [https://irepot-frontend.herokuapp.com](https://irepot-frontend.herokuapp.com).

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/30989030/56726768-54874180-6747-11e9-9014-6050c2ec003a.gif)

>Demo Users
>
>| Username  | Password | Access       |
>|-----------|----------|--------------|
>| `admin`   | `secret` | Admin Access |
>| `user123` | `secret` | User Access  |

<!-- TOC depthFrom:2 -->

- [iReporter Frontend App](#ireporter-frontend-app)
- [Overview](#overview)
  - [1. :rocket: Getting Started](#1-rocket-getting-started)
    - [1.1 Prerequisites](#11-prerequisites)
    - [1.2. Run locally](#12-run-locally)
    - [1.3. Building](#13-building)
    - [1.4. Running Test](#14-running-test)
  - [2. :pencil: License](#2-pencil-license)

<!-- /TOC -->

## 1. :rocket: Getting Started

### 1.1 Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 1.2. Run locally

- To run app locally, make sure you have `nodejs`, `postgres` installed.
- Clone repository or clone your own fork

  ```bash
    git clone https://github.com/devdbrandy/ireporter-frontend.git
    cd ireporter-frontendireporter-frontend
    cp .env.example .env
    npm install
  ```

- Create a PostgreSQL database for the project via `pgAdmin` or run the below command on your terminal:

    ```bash
      createdb -h localhost -p 5432 -U postgres ireporter
    ```

- Configure `.env` environment variable with your credentials
- Run migration `npm run migrate`
- (Optional) Seed dummy data `npm run db:seed`
- Two npm scripts are availiable to spin up the app server:
  - `npm run dev` spin up the server without watching for any file changes
  - `npm run watch` watches for any file changes and reloads the server

### 1.3. Building

`npm run build`

### 1.4. Running Test

Test specs are implemented using [*mocha*](https://mochajs.org) + [*chai*](https://chiajs.com) + [*sinon*](https://sinonjs.org).

Make a duplicate of `.env` and rename to `.env.test`, then configure your test credentials.

Two npm scripts are available to run the test suite:

1. `npm run test:watch` - Watches for any file changes and runs the full test suite (without code coverage)
2. `npm test` - Performs a single full test suite run, including instanbul code coverage reporting. Summary coverage reports are written to stdout, and detailed HTML reports are available in `/coverage/index.html`

## 2. :pencil: License

The iReporter REST API is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
