#!/usr/bin/env bash

docker ps -a | grep db | awk '{print $1;}' | xargs docker stop
docker ps -a | grep db | awk '{print $1;}' | xargs docker rm
docker run -v `pwd`/db/local-initdb.sql:/docker-entrypoint-initdb.d/init.sql -p '5432:5432' star-wars-generations_db
