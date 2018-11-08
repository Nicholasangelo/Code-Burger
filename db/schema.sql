drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table code_burgers (
id int not null auto_increment primary key,
burger_name varchar(30) not null,
devoured boolean not null,
