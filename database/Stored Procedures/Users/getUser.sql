CREATE PROCEDURE getUser @id varchar(255) AS BEGIN
SELECT
    *
FROM
    users
WHERE
    id = @id;

END