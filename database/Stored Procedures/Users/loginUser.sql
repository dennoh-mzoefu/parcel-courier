CREATE PROCEDURE loginUser @email varchar(50)
 AS BEGIN
SELECT
    *
FROM
    users
WHERE
    email = @email
    
END