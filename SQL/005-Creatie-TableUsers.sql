--
-- Create table users
--

USE CarRental
GO

CREATE TABLE Users
(
	UserId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	FirstName nvarchar(100),
	LastName nvarchar(100),
	Email nvarchar(255),
	PasswordUser nvarchar(20)
)
GO