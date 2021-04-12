--
-- Create Table Brands
--

USE CarRental
GO

CREATE TABLE Brands
(
	BrandId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	BrandName nvarchar(100)
)
GO