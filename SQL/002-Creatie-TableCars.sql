--
-- Create table patient
--

USE CarRental
GO

CREATE TABLE Cars
(
	CarId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	BrandId int,
	ColorId int,
	ModelYear int,
	DailyPrice float(53),
	DescriptionCar nvarchar(100)	
)
GO