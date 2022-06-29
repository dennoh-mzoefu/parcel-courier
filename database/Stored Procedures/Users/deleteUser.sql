CREATE PROCEDURE deleteUser @id varchar AS BEGIN
UPDATE
    users
SET
    isDeleted = 1
WHERE
    id = @id
    AND isDeleted = 0;

END