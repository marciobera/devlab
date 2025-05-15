# Docker for development

```bash
docker build -t my-node-image -f Dockerfile.dev .
```

Using `--no-cache will force it to rebuild the image from scratch.

```bash
docker build -t my-node-image -f Dockerfile.dev --no-cache .
```

## Compose config

Helps to visualise the final composed version

```bash
docker compose -f docker-compose.dev.yaml config
```

## Compose override

Works automatically only with docker-compose.yaml

Can work by passing multiple -f args (config helps to visualise the final merged version)
```bash
docker compose -f docker-compose.dev.yaml -f docker-compose.override.yaml config
```

or by exporting the env var:
```bash
export COMPOSE_FILE=docker.compose.dev.yaml:docker.compose.override.yaml
```

## Project name

It's possible to have multiple build versions without rebuiding the same project multiple times.
Using the flag `-p your-project-name` can help with that.

```bash
docker compose -f docker-compose.dev.yaml -p feature-xpto up -d
```

Will create a project name `feature/xpto` where will generate a new build specifically for this version (branch?).
It allows using the `COMPOSE_PROJECT_NAME` env var too if needed.

Obs:
* If the containers are running for another or default project name, it might conflic the exported ports, for example. In this case, do a `down` first and then `up` using the required project name.
* To see the containers running you need to pass the `-p`:
```bash
docker compose -f docker-compose.dev.yaml -p feature-xpto ps
```

## Solving general issues with docker

Restarting Docker:

```bash
sudo service docker restart
```

## Logging as root user

```bash
docker compose -f docker-compose.dev.yaml exec -uroot web1 bash
```

## Setting up docker envs

```bash
#.env
COMPOSE_FILE=docker-compose.dev.yaml:docker-compose.override.yaml
COMPOSE_PROFILES=debug,nginx
DOCKER_PROJECT_NAME=feature-xpto
```

## Copying files into the containers

Copying from container to my local env
```bash
docker compose -f docker-compose.dev.yaml cp nginx:/etc/nginx ./local/nginx
```

Copying from local env to contaienr
```bash
docker compose -f docker-compose.dev.yaml cp ./local/nginx nginx:/etc/nginx
```

## Devcontainer

Way to allow local tools enabled inside the container integrated with the IDE.
