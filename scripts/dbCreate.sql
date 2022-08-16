CREATE TABLE Parameters (
    Id INT NOT NULL AUTO_INCREMENT,
    Code VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Value VARCHAR(255) NOT NULL,
    Status INT DEFAULT 1 NOT NULL ,
    
    CONSTRAINT PK_Parameters PRIMARY KEY (Id),
    CONSTRAINT UC_Parameter_Code UNIQUE (Code)
);

CREATE TABLE Cities (
    Id INT NOT NULL AUTO_INCREMENT,
    CityName VARCHAR(255) NOT NULL,
    Status INT DEFAULT 1 NOT NULL ,
    
    CONSTRAINT PK_City PRIMARY KEY (Id),
    CONSTRAINT UC_Cities_Name UNIQUE (CityName)
);

CREATE TABLE Types (
    Id INT NOT NULL AUTO_INCREMENT,
    TypeName VARCHAR(255) NOT NULL,
    TypeDescription VARCHAR(255) NOT NULL,
    Status INT DEFAULT 1 NOT NULL ,
    
    CONSTRAINT PK_Type PRIMARY KEY (Id),
    CONSTRAINT UC_Type_Name UNIQUE (TypeName)
);

CREATE TABLE Restrictions (
    Id INT NOT NULL AUTO_INCREMENT,
    RestrictionName VARCHAR(255) NOT NULL,
    RestrictionValues VARCHAR(255) NOT NULL,
    CityId INT NOT NULL,
    TypeId INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    StartTime TIME NOT NULL,
    EndTime TIME NOT NULL,
    DayApply INT NOT NULL,
    Holidays TINYINT DEFAULT 0 NOT NULL,
    Status INT DEFAULT 1 NOT NULL ,
    
    CONSTRAINT PK_Restriction PRIMARY KEY (Id),
    CONSTRAINT FK_Restrictions_Types FOREIGN KEY (TypeId) REFERENCES Types(Id),
    CONSTRAINT FK_Restrictions_Cities FOREIGN KEY (CityId) REFERENCES Cities(Id)
);



//mock Restrictions
/*
INSERT INTO `Restrictions` (`RestrictionName`, `RestrictionValues`, `TypeId`, `CityId`, `StartDate`, `EndDate`, `StartTime`, `EndTime`, `DayApply`)
VALUES ('2022JUN_PARTICULARES', '5 y 6', 1, 1, '20220701', '20220930', '06:00:00', '20:00:00', 5);
*/
