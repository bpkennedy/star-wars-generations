FROM postgres

COPY initdb.sql /tmp/init.sql
COPY initdb.sh /docker-entrypoint-initdb.d/init.sh
RUN chmod 755 /docker-entrypoint-initdb.d/init.sh /tmp/init.sql

EXPOSE 5432
