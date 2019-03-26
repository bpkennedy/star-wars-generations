FROM postgres

COPY initdb.sql /tmp/init.sql
COPY initdb.sh /docker-entrypoint-initdb.d/init.sh
COPY pg_hba.conf /tmp
RUN chmod 755 /docker-entrypoint-initdb.d/init.sh /tmp/pg_hba.conf /tmp/init.sql 

EXPOSE 5432
