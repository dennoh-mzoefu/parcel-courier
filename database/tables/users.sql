CREATE TABLE Users (
    id varchar(255),
    userName varchar(255),
    email varchar(255) unique,
    phoneNumber varchar(255),
    password varchar(255),
    isAdmin int DEFAULT 0,
    isDeleted int DEFAULT 0
);