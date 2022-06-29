CREATE PROCEDURE deleteParcel @parcelId varchar AS BEGIN
UPDATE
    parcels
SET
    isDeleted = 1
WHERE
    parcelId = @parcelId
    AND isDeleted = 0;

END