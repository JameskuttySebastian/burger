create database burgers_db;
use burgers_db;

create table burgers (
id int auto_increment primary key not null,
burger_name varchar(30) not null,
devoured bool not null default false,
createdAt TIMESTAMP not null DEFAULT CURRENT_TIMESTAMP
);


