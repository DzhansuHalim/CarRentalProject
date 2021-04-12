--
-- Create Table Colors
--

USE CarRental
GO

CREATE TABLE Colors
(
	ColorId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	ColorName nvarchar(100)
)
GO