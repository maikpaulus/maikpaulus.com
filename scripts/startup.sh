#!/bin/bash

# read .env if available
if [ -f .env ]
then
  export $(cat .env | sed 's/#.*//g' | xargs)
else 
  echo 'Please provide a valide .env file!'
  exit 0
fi

docker-compose -p ${DOCKER_NAME} -f docker-compose.yml up --build -d