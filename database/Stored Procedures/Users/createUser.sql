CREATE PROCEDURE createUser @id varchar(50),
@userName varchar(50),
@phoneNumber varchar(50),
@email varchar(50),
@password varchar(50) AS BEGIN
INSERT INTO
    users(id, userName, phoneNumber, email, password)
VALUES
(@id, @userName, @phoneNumber, @email, @password);

END