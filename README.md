[![DeepScan grade](https://deepscan.io/api/teams/2725/projects/4006/branches/33635/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=2725&pid=4006&bid=33635)

# JS shop front

Front (React) part of JS-shop application

## Getting Started

Witho those instructions You will be able to install and run project locally on Your ouw machine.

### Prerequisites

Before You install project You need to have installed on Your machine:

###### Eas way
`git`, to fetch project, and `docker` to run project

###### Hard way
`git` to fetch project, `node`, `npm` or `yarn` to start project.

### Installing
Create .env variables
```
cp .env.dist .env
```
##### with Docker

```
docker-compose build
```
```
docker-compose up -d
```
Note that `-d` flag will run project in background. For development purpose and to catch incoming errors I suggest to not use this flag

After project will be builded, `yarn install` and `yarn start` will be running automatically from docker configuration files.

## Running the tests

@TODO

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Docker](https://www.docker.com/) - Allow to run application in containers

## Contributing

Please read [CONTRIBUTING.md]


## Authors

* **Michał Pietrasz** - [Codeminer84](https://github.com/CodeMiner84)(https://michalpietrasz.pl)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details