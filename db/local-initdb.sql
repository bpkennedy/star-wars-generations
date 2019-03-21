create user swgapi_test with password 'swgapi_test';
create database swgdb_test owner swgapi_test;
create schema swgdb_test;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA swgdb_test to swgapi_test;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA swgdb_test to swgapi_test;

ALTER DEFAULT PRIVILEGES IN SCHEMA swgdb_test
    GRANT ALL PRIVILEGES ON TABLES TO swgapi_test;
ALTER DEFAULT PRIVILEGES IN SCHEMA swgdb_test
    GRANT ALL PRIVILEGES ON SEQUENCES TO swgapi_test;
