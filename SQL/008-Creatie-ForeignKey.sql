--
-- Create references
--

USE CarRental
GO

ALTER TABLE Cars
	ADD CONSTRAINT fk_colorid
		FOREIGN KEY (ColorId) REFERENCES Colors(ColorId)


ALTER TABLE Cars
	ADD CONSTRAINT fk_brandid
		FOREIGN KEY (BrandId) REFERENCES Brands(BrandId)

ALTER TABLE Customers 
	ADD CONSTRAINT fk_userId
		FOREIGN KEY (UserId) REFERENCES Users(UserId)

ALTER TABLE Rentals 
	ADD CONSTRAINT fk_customerid
		FOREIGN KEY (CustomerId) REFERENCES Customers(CustomerId)

ALTER TABLE Rentals 
	ADD CONSTRAINT fk_carid
		FOREIGN KEY (CarId) REFERENCES Cars(CarId)