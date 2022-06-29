CREATE PROCEDURE updateUser @id varchar(100),
@userName varchar(100),
@phoneNumber varchar(100),
@email varchar(100) AS BEGIN
UPDATE
    users
SET
    userName = @userName,
    phoneNumber = @phoneNumber,
    email = @email
WHERE
    id = @id;

END