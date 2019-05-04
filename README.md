<h1 align="center">iReporter<h1>

<p align="center">
  <a href="https://circleci.com/gh/devdbrandy/ireporter-frontend">
    <img src="https://circleci.com/gh/devdbrandy/ireporter-frontend.svg?style=svg"></a>
  <a class="badge-align" href="https://www.codacy.com/app/devdbrandy/ireporter-frontend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=devdbrandy/ireporter-frontend&amp;utm_campaign=Badge_Grade">
  <img src="https://api.codacy.com/project/badge/Grade/af41b75a4052458888f44cd39007295a"/></a>
  <a href="https://codeclimate.com/github/devdbrandy/ireporter-frontend/maintainability"><img src="https://api.codeclimate.com/v1/badges/4ea779147d454d8fa543/maintainability" /></a>
  <a href="https://codeclimate.com/github/devdbrandy/iReporter/test_coverage"><img src="https://api.codeclimate.com/v1/badges/4ea779147d454d8fa543/test_coverage" /></a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg"></a>
</p>

## Overview

iReporter app enables users (citizen) to bring any form of corruption to the notice of appropriate authorities and the general public. Visit iReporter live demo: [https://irepot-frontend.herokuapp.com](https://irepot-frontend.herokuapp.com).

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/30989030/56726768-54874180-6747-11e9-9014-6050c2ec003a.gif)

<details>
<summary><code>Demo Users (Try It Out <> Click me! 😋)</code></summary>

| Username  | Password | Access       |
|-----------|----------|--------------|
| `admin`   | `secret` | Admin Access |
| `user123` | `secret` | User Access  |
</details>

<!-- TOC depthFrom:2 -->

- [Overview](#overview)
- [:rocket: Getting Started](#1-rocket-getting-started)
  - [Prerequisites](#11-prerequisites)
  - [Run locally](#12-run-locally)
  - [Building](#13-building)
  - [Running Test](#14-running-test)
- [:pencil: License](#2-pencil-license)

<!-- /TOC -->

## :rocket: Getting Started

### Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download/)

### Run locally

- To run app locally, make sure you have `nodejs` installed.
- Clone repository or clone your own fork

  ```bash
    git clone https://github.com/devdbrandy/ireporter-frontend.git
    cd ireporter-frontendireporter-frontend
    cp .env.example .env
    npm install
  ```

- Configure `.env` environment variable with your credentials
- Run `npm run dev` to spin up the development server (supports Hot Reload)

### Building

`npm run build`

### Running Test

Make a duplicate of `.env.example` and rename to `.env.test`, then configure your test credentials.

Two npm scripts are available to run the test suite:

1. `npm run test:watch` - Watches for any file changes and runs the full test suite (without code coverage)
2. `npm test` - Performs a single full test suite run, including instanbul code coverage reporting. Summary coverage reports are written to stdout, and detailed HTML reports are available in `/coverage/index.html`

## :pencil: License

The iReporter REST API is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
