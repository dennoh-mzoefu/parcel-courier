CREATE PROCEDURE createParcel @senderId varchar(255),
@parcelId varchar(255),
@receiverPhoneNumber varchar(255),
@receiverEmail varchar(255),
@destination varchar(255),
@startLocation varchar(255),
@parcelType varchar(255),
@weight int,
@price int AS BEGIN
INSERT INTO
    parcels(
        senderId,
        parcelId,
        receiverPhoneNumber,
        receiverEmail,
        destination,
        startLocation,
        parcelType,
        weight,
        price
    )
VALUES
    (
        @senderId,
        @parcelId,
        @receiverPhoneNumber,
        @receiverEmail,
        @destination,
        @startLocation,
        @parcelType,
        @weight,
        @price
    );

END