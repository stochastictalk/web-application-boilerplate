# Simple Web Application Template

![](https://img.shields.io/github/v/release/stochastictalk/web-application-boilerplate?display_name=tag) ![](https://img.shields.io/github/stars/stochastictalk/web-application-boilerplate?style=social)

A template for developing dockerised web applications using React, FastAPI, SQLAlchemy, and Postgres.

### Installation & Use
Clone with `git clone https://github.com/stochastictalk/web-application-boilerplate.git`, then build and run with `docker compose up --build`.

UI is served at `localhost:3000` and API at `localhost:2740`. API autodocumentation courtesy of FastAPI is served at `localhost:2740/docs`.

Edit contents of `/frontend` and `/api` to see changes hotload.

:warning: If running on a device with a non-AMD chip (e.g. a Mac with an Apple M1), run `export DOCKER_DEFAULT_PLATFORM=linux/amd64` before the build step. This environment variable instructs Docker to build and run Docker images using AMD architecture emulation, which is necessary to avoid the SQLAlchemy dependency error `sqlalchemy.exc.OperationalError: (psycopg2.OperationalError) SCRAM authentication requires libpq version 10 or above`.

### Features

* Docker Compose file specifying frontend, API, and database services.
* Frontend: Node 18 server hotloading React application with TypeScript, React Query, and Sass.
* API
    * Hotloading Python 3.10 FastAPI application served with Uvicorn.
    * Documentation auto-generation.
* Database: Postgres.
* Boilerplate code for:
    * GET/POST requests (Frontend ↔ API ↔ Database) using FastAPI and SQLAlchemy.
    * API and database data models using Pydantic and SQLAlchemy.

### Dependencies

* [Docker](https://docs.docker.com/get-docker/)


### Licence

Free for commercial and personal use.


