CREATE TABLE parcels (
    senderId varchar(255),
    parcelId varchar(255),
    receiverPhoneNumber varchar(255),
    receiverEmail varchar(255),
    destination varchar(255),
    startLocation varchar(255),
    parcelType varchar(255),
    weight int,
    price int,
    isSent varchar(255) DEFAULT 0,
    isDeleted int DEFAULT 0,
    status int
);