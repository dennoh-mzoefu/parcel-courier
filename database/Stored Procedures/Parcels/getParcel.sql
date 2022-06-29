CREATE PROCEDURE getParcel @parcelId varchar AS BEGIN
SELECT
    *
FROM
    parcels
WHERE
    isDeleted = 0
    and parcelId = @parcelId;

END