--
-- Create table rentals
--

USE CarRental
GO

CREATE TABLE Rentals
(
	RentalId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	CarId int,
	CustomerId int,
	RentDate DateTime,
	ReturnDate DateTime
)
GO