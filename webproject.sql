DROP DATABASE IF EXISTS Pogohouse;
CREATE DATABASE IF NOT EXISTS `Pogohouse` ;
USE `Pogohouse`;
--
-- Table structure for table User
--


--
-- Dumping data for table User
--



-- --------------------------------------------------------
create table Admin (
    admin_id varchar(10) primary key,
    admin_fname varchar(20),
    admin_lname varchar(20),
    admin_pass varchar(20),
    admin_startdate date
);

insert into Admin
values	('AMD001', 'Apivich', 'Preedaarkaraphun','1112', '2023-09-13'),
		('AMD002', 'Pawat', 'Sukkasem','4444', '2025-09-14'),
		('AMD003', 'Nuttapong', 'Rochanavibhata','4034', '2022-02-20'),
		('AMD004', 'Attapong', 'Yaemananchai','1234', '2028-04-09');

--

CREATE TABLE Account (
  acc_id varchar(10) NOT NULL,
  location varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  contact varchar(10) NOT NULL,
  password varchar(20) NOT NULL,
  accountname varchar(20) NOT NULL,
  adminid varchar(10),
  PRIMARY KEY (acc_id)
) ;

INSERT INTO Account (acc_id, location, email, contact, password, accountname, adminid) VALUES
('PH101', 'Sydney', 'chucklechief@emailgiggle.com',	'0959549287', 'Serrage45', 'JorkerIRL',null),
('PH102', 'Bangkok', 'gsticky.rice@gmail.com', '0805649068', 'horrowprimedGreat77',	'LwnZa007',null),
('PH103', 'Rayong',	'kaosoy01@hotmail.com',	'0960263295', 'GaussTB1', 'BirdKonDee',null),
('PH104', 'West Virginia', 'williamafton87@gmail.com', '0956719509', 'FrBrowww0', 'BorrowMoney',null),
('PH105', 'Stockholm', 'markus.per@govmail.com', '0818082587', '123ASD888', 'Kevin2569',null),
('PH106', 'Corolado', 'wendywelling@hotmail.com',	'0850532088',	'12345678ABC',	'Balbazal90',null),
('PH107', 'Chiang Mai',	'lbug@gmail.com', '0947891446', 'X1Y2Z3wdym',	'Beam1999', null),
('PH108', 'California',	'misterheart.locker@gmail.com', '0949763489', 'pokemonPokemon10',	'DomtaoBoba',null),
('PH109', 'Hongkong', 'superidol199@baimail.com', '0830848207', 'SadSad99934', 'SuperIdol',null),
('PH110', 'Bangkok', 'teebindai@gmail.com',	'0863555858', 'SoulZadddd55', 'APoDragonW',null),
('PH111', 'Bangkok', 'booktepbook@gmail.com','0954954034', '1234','booktepbook', 'AMD003'),
('PH112', 'Bangkok', 'Attapong@gmail.com','0102030405', '1234','Dom', 'AMD004'),
('PH113', 'Bangkok', 'Salmon@gmail.com','0302010504', '1234','Salmon', 'AMD001'),
('PH114', 'Bangkok', 'Pawat@gmail.com','0708090405', '1234','Pame', 'AMD002');

-- --------------------------------------------------------
-- Table structure for table Transaction
--

create table Product (
	p_id varchar(15) primary key,
    p_name varchar(30),
    p_type char(2),
    p_price decimal(13,2),
	p_description varchar(1500),
	p_city varchar(30),
    p_country varchar(30),
	adminid varchar(10),
	categories varchar(1),
    picture1 VARCHAR(255),
    picture2 VARCHAR(255),
    picture3 VARCHAR(255),
    picture4 VARCHAR(255),
    picture5 VARCHAR(255),
    foreign key (adminid) references Admin(admin_id)
);


INSERT INTO Product
VALUES	('PH_item_001', 'Cat house', 'T', 100000000.00, 
		'Great house with the purple roof, where the rooms inside the house have something quite mysterious about them. The size of each room always differs every time, but it still has a massive size.', 
		'Berlin','Germany', 'AMD001', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_5.jpg?raw=true');

INSERT INTO Product
VALUES	('PH_item_002', 'Pineapple house undersea', 'H', 3.00, 
		'The normal size of pineapple has many pieces of furniture inside of it, which it places in the sea.', 
		'Pattaya','Thailand', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_5.jpg?raw=true');
        
INSERT INTO Product
VALUES	('PH_item_003', 'TownHouse Mr.G', 'T', 2500.00, 
		'Townhouse Japanese Edo style, which has three small rooms inside and looks pretty old.', 
		'Edo', 'Japan', 'AMD002', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_5.png?raw=true');
		
INSERT INTO Product
VALUES	('PH_item_004', 'A tower', 'C', 30000000.00, 
		'A tower is the condo that includes high technology in each room, and it has very strong security guards that are able to protect the universe.', 
		'Newyork','USA', 'AMD001', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/30c864dc71835c87da832c7603b48a06119aca3a/house%20pic/PH_item_004/PH_item_004_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_5.jpg?raw=true');
		
INSERT INTO Product
VALUES ('PH_item_005', 'Normal house', 'H', 400000.00, 
        'Normal house with modern Japanese style.', 
        'Saitama','Japan', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_5.jpg?raw=true');

INSERT INTO Product
VALUES ('PH_item_006', 'Normal house 2', 'H', 450000.00, 
        'Normal house with modern Japanese style that is bigger.', 
        'Tokyo' ,'Japan', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_5.jpg?raw=true');

INSERT INTO Product
VALUES ('PH_item_007', 'Unbelievable house', 'H', 30000000.00, 
        'House in a mystery place where no one where it places, yet we knew it places in Ohio.', 
        'Ohio','USA', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_5.jpg?raw=true');
		
INSERT INTO Product
VALUES ('PH_item_008', 'Chef House', 'H', 1500000.00, 
        'The house that the chef uses to cook his food to run his restaurant, which has a lot of food inside the kitchen.', 
        'Paris' ,'France', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_5.png?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_009', 'House After the End of Earth', 'T', 50000000.00, 
        'The house that has everything humans need to use after the end of the earth is coming.', 
        'California','USA', 'AMD004', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_010', 'Tree House', 'H', 12000000.00, 
        'The house that was built inside the tree looks like the Yggdrasil that has many pieces of furniture inside.', 
        'Texas','USA', 'AMD002', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_011', 'Plant Save House', 'T', 3000000.00, 
        'The house that has a big garden to plant various types of plants to protect yourself from that "thing"', 
        'Arizona' ,'USA', 'AMD002', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_012', 'Alien from Krr Planet House', 'T', 25000000.00, 
        'The house has aliens from the Krr planet living inside, and they build secret rooms inside the house that use high technology from other planets.', 
        'Tokyo','Japan', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_013', 'Kame House', 'H', 1000000.00, 
        'The house is in the middle of nowhere in the sea.', 
        'Okinawa', 'Japan', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_4.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_014', 'Tomoya\'s Condo', 'C', 500000.00, 
        'Nomal condo that has a very great background story inside.', 
        'Osaka','Japan', 'AMD004', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_015', 'Maria Townhouse', 'T', 150000.00, 
        'The townhouses that are inside the big wall Maria where the wall made of 50-meter titans.', 
        'Tokyo','Japan', 'AMD003', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_5.jpg?raw=true'
);

INSERT INTO Product
VALUES ('PH_item_999', 'Haxxtxd House', 'HT', 2500.00, 
        'The house that has special history over than 130 years that many people believed it was the house that the famous serial killer in the late 18 century \'Jack the Ripper\' died inside.', 
        'London', 'England', 'AMD004', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_5.jpg?raw=true'
);
        

        

