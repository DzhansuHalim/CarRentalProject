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



