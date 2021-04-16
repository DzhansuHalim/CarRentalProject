--
-- Create table CarImages
--

USE CarRental
GO

CREATE TABLE CarImages
(
	CarImageId int NOT NULL PRIMARY KEY IDENTITY(1,1),
	CarId int,
	ImagePath nvarchar (255),
	UploadDate DateTime
)
GO