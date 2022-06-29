CREATE PROCEDURE updateParcel @parcelId varchar(255),
@receiverPhoneNumber varchar(255),
@receiverEmail varchar(255),
@destination varchar(255),
@startLocation varchar(255),
@parcelType varchar(255),
@weight int,
@price int AS BEGIN
UPDATE
    parcels
SET
    receiverPhoneNumber = @receiverPhoneNumber,
    receiverEmail = @receiverEmail,
    destination = @destination,
    startLocation = @startLocation,
    parcelType = @parcelType,
    weight = @weight,
    price = @price
WHERE
    parcelId = @parcelId;

END