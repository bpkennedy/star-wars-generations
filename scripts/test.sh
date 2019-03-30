#!/bin/bash

docker-compose down
containers=`docker ps -a -q | tail -n +2`
echo $containers
if [ -n "$containers" ]; then
	echo $containers | xargs docker stop
	echo $containers | xargs docker rm
fi

docker-compose -f docker-compose.test.yml up --build | tee output.txt &

sleep 1
until docker ps | grep \\bapi >/dev/null
do
  sleep 1
done
while docker ps | grep \\bapi >/dev/null
do
  sleep 1
done

set +e
docker-compose down
set -e

export api_result=`grep "api exited with code" output.txt | awk '{print $NF}'`
rm output.txt
exit `[[ $api_result -eq 0 ]]` 
