create table person (
    id serial primary key,
    name varchar(255),
    surname varchar(255)
);


create table post(
    id serial primary key,
    title varchar(255),
    content varchar(255),
    user_id integer,
    foreign key (user_id) references person(id)
);