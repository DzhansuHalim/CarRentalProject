--
-- Create table customers
--

USE CarRental
GO

CREATE TABLE Customers
(
	CustomerId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	UserId int,
	CompanyName nvarchar(150)
)
GO