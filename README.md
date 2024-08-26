This is the backend part for my responsive CV design

# Getting started

## Available configurations

### Dev configuration
Mounts local directory into the container.

### Prod configuration
Uses a pre-built image.

## Running the configurations

Configure you .env file

To run the dev configuration:
```shell
# Start compose project
docker compose --profile dev up
```

To run the prod configuration:
```shell
# Build your image
docker build -t myimage:latest .

# Set the IMAGE_NAME if non-default
export IMAGE_NAME=myimage:latest

# Start compose project 
docker compose --profile prod up
```
