create user swgapi with password 'swgapi';
create database swgdb owner swgapi;
create schema swgdb;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA swgdb to swgapi;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA swgdb to swgapi;

ALTER DEFAULT PRIVILEGES IN SCHEMA swgdb
    GRANT ALL PRIVILEGES ON TABLES TO swgapi;
ALTER DEFAULT PRIVILEGES IN SCHEMA swgdb
    GRANT ALL PRIVILEGES ON SEQUENCES TO swgapi;
