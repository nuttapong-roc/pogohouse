DROP DATABASE IF EXISTS Pogohouse;
CREATE DATABASE IF NOT EXISTS `Pogohouse` ;
USE `Pogohouse`;
--
-- Table structure for table User
--

CREATE TABLE User (
  user_id varchar(10) NOT NULL,
  username varchar(20) NOT NULL,
  user_fname varchar(20) NOT NULL,
  user_lname varchar(20) NOT NULL,
  age int  DEFAULT NULL,
  Primary key (user_id)
) ;

--
-- Dumping data for table User
--

INSERT INTO User (user_id, username, user_fname, user_lname) VALUES
('US001', 'strawberryJam', 'Jamey', 'Oliver'),
('US002', 'Nickko1234', 'Branch', 'Nicko'),
('US003', 'MikeyBD', 'Mike', 'Brandon'),
('US004', 'TestThisGave', 'Gavin', 'Testdee'),
('US005', 'Timmy111', 'Tim', 'Hapor'),
('US006', 'WendyBurger', 'Wendy', 'Welling'),
('US007', 'LimeLieLiam', 'Liam', 'Bug'),
('US008', 'QuincySoul', 'Qwinz', 'Hood'),
('US009', 'GamingTime', 'Gaming', 'Wu'),
('US010', 'Arasumsum', 'Arata', 'Nakamuya');

-- --------------------------------------------------------
create table Admin (
    admin_id varchar(10) primary key,
    admin_fname varchar(20),
    admin_lname varchar(20),
    admin_startdate date
);

insert into Admin (admin_id, admin_fname, admin_lname, admin_startdate) 
values	('AMD001', 'Apivich', 'Preedaarkaraphun', '2023-09-13'),
		('AMD002', 'Pawat', 'Sukkasem', '2025-09-14'),
		('AMD003', 'Nuttapong', 'Rochanavibhata', '2022-02-20'),
		('AMD004', 'Attapong', 'Yaemananchai', '2028-04-09');

--

CREATE TABLE Account (
  acc_id varchar(10) NOT NULL,
  location varchar(30) NOT NULL,
  email varchar(30) NOT NULL,
  contact varchar(10) NOT NULL,
  password varchar(20) NOT NULL,
  accountname varchar(20) NOT NULL,
  userid varchar(10) NOT NULL,
  adminid varchar(10) NOT NULL,
  PRIMARY KEY (acc_id),
  Foreign key (userid) references User(user_id),
  Foreign key (adminid) references Admin(admin_id)
) ;



INSERT INTO Account (acc_id, location, email, contact, password, accountname, userid, adminid) VALUES
('PH101', 'Sydney', 'chucklechief@emailgiggle.com',	'0959549287', 'Serrage45', 'JorkerIRL', 'US001', 'AMD004'),
('PH102', 'Bangkok', 'gsticky.rice@gmail.com', '0805649068', 'horrowprimedGreat77',	'LwnZa007',	'US002','AMD001'),
('PH103', 'Rayong',	'kaosoy01@hotmail.com',	'0960263295', 'GaussTB1', 'BirdKonDee',	'US003', 'AMD002'),
('PH104', 'West Virginia', 'williamafton87@gmail.com', '0956719509', 'FrBrowww0', 'BorrowMoney', 'US004', 'AMD003'),
('PH105', 'Stockholm', 'markus.per@govmail.com', '0818082587', '123ASD888', 'Kevin2569', 'US005', 'AMD002'),
('PH106', 'Corolado', 'wendywelling@hotmail.com',	'0850532088',	'12345678ABC',	'Balbazal90', 'US006',	'AMD004'),
('PH107', 'Chiang Mai',	'lbug@gmail.com', '0947891446', 'X1Y2Z3wdym',	'Beam1999',	'US007', 'AMD002'),
('PH108', 'California',	'misterheart.locker@gmail.com', '0949763489', 'pokemonPokemon10',	'DomtaoBoba', 'US008', 'AMD003'),
('PH109', 'Hongkong', 'superidol199@baimail.com', '0830848207', 'SadSad99934', 'SuperIdol',	'US009', 'AMD002'),
('PH110', 'Bangkok', 'teebindai@gmail.com',	'0863555858', 'SoulZadddd55', 'APoDragonW', 'US010', 'AMD004');

-- --------------------------------------------------------
-- Table structure for table Transaction
--

create table Product (
	p_id varchar(15) primary key,
    p_name varchar(30),
    p_type char(2),
    p_price decimal(13,2),
	p_description varchar(1500),
	p_location varchar(30),
	adminid varchar(10),
	categories varchar(1),
    picture1 VARCHAR(255),
    picture2 VARCHAR(255),
    picture3 VARCHAR(255),
    picture4 VARCHAR(255),
    picture5 VARCHAR(255),
    foreign key (adminid) references Admin(admin_id)
);


INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES	('PH_item_001', 'Cat house', 'T', 100000000.00, 
		'Great house with the purple roof, where the rooms inside the house have something quite mysterious about them. The size of each room always differs every time, but it still has a massive size.', 
		'Chaville, France', 'AMD001', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_001/PH_item_001_5.jpg?raw=true');

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES	('PH_item_002', 'Pineapple house undersea', 'H', 3.00, 
		'The normal size of pineapple has many pieces of furniture inside of it, which it places in the sea.', 
		'Bikini Bottom, Pacific Ocean', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_002/PH_item_002_5.jpg?raw=true');
        
INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES	('PH_item_003', 'TownHouse Mr.G', 'T', 2500.00, 
		'Townhouse Japanese Edo style, which has three small rooms inside and looks pretty old.', 
		'Kanazawa, Japan', 'AMD002', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_003/PH_item_003_5.png?raw=true');
		
INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES	('PH_item_004', 'A tower', 'C', 30000000.00, 
		'A tower is the condo that includes high technology in each room, and it has very strong security guards that are able to protect the universe.', 
		'Newyork, USA', 'AMD001', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_004/PH_item_004_5.jpg?raw=true');
		
INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_005', 'Normal house', 'H', 400000.00, 
        'Normal house with modern Japanese style.', 
        'Tokyo, Japan', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_005/PH_item_005_5.jpg?raw=true');

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_006', 'Normal house 2', 'H', 450000.00, 
        'Normal house with modern Japanese style that is bigger.', 
        'Tokyo, Japan', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_006/PH_item_006_5.jpg?raw=true');

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_007', 'Unbelievable house', 'H', 30000000.00, 
        'House in a mystery place where no one knows where it is.', 
        'Unknown', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_007/PH_item_007_5.jpg?raw=true');
		
INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_008', 'Chef House', 'H', 1500000.00, 
        'The house that the chef uses to cook his food to run his restaurant, which has a lot of food inside the kitchen.', 
        'Paris, France', 'AMD003', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_008/PH_item_008_5.png?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_009', 'House After the End of Earth', 'T', 50000000.00, 
        'The house that has everything humans need to use after the end of the earth is coming.', 
        'California, USA', 'AMD004', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_009/PH_item_009_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_010', 'Tree House', 'H', 12000000.00, 
        'The house that was built inside the tree looks like the Yggdrasil that has many pieces of furniture inside.', 
        'Candy Kingdom, Land of Ooo', 'AMD002', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_010/PH_item_010_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_011', 'Plant Save House', 'T', 3000000.00, 
        'The house that has a big garden to plant various types of plants to protect yourself from that "thing"', 
        'Neighborville, USA', 'AMD002', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_011/PH_item_011_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_012', 'Alien from Krr Planet House', 'T', 25000000.00, 
        'The house has aliens from the Krr planet living inside, and they build secret rooms inside the house that use high technology from other planets.', 
        'Moscow, Russia', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_3.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_012/PH_item_012_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_013', 'Kame House', 'H', 1000000.00, 
        'The house is in the middle of nowhere in the sea.', 
        'Nowhere, Pacific Ocean', 'AMD001', 'B',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_4.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_013/PH_item_013_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_014', 'Tomoya\'s Condo', 'C', 500000.00, 
        'Nomal condo that has a very great background story inside.', 
        'Osaka, Japan', 'AMD004', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_014/PH_item_014_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_015', 'Maria Townhouse', 'T', 150000.00, 
        'The townhouses that are inside the big wall Maria where the wall made of 50-meter titans.', 
        'Shikanshina, Paradise', 'AMD003', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_1.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_2.png?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_015/PH_item_015_5.jpg?raw=true'
);

INSERT INTO Product (p_id, p_name, p_type, p_price, p_description, p_location, adminid, categories, picture1, picture2, picture3, picture4, picture5)
VALUES ('PH_item_999', 'Haxxtxd House', 'HT', 2500.00, 
        'The house that has special history over than 130 years that many people believed it was the house that the famous serial killer in the late 18 century \'Jack the Ripper\' died inside.', 
        'London, England', 'AMD004', 'R',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_1.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_2.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_3.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_4.jpg?raw=true',
        'https://github.com/nuttapong-roc/pogohouse/blob/3dcc3da0e7524e27d79cd05fcfe594280e4965c1/house%20pic/PH_item_999/PH_item_999_5.jpg?raw=true'
);

        
create table Transaction (
    trans_id varchar(10),
    trans_date date,
    trans_time time,
    amount decimal(13,2),
    t_type char(1),
    acc_id varchar(10),
    p_id varchar(15),
    foreign key  (acc_id) references Account(acc_id),
    foreign key (p_id) references Product(p_id)
);

insert into Transaction (trans_id, trans_date, trans_time, amount, t_type, acc_id, p_id) 
values	('HT73921', '2024-02-08', '07:42:18', 100000000.00, 'A', 'PH103', 'PH_item_001'),
		('HT48203', '2024-03-02', '11:15:55', 3000000.00, 'C', 'PH102', 'PH_item_011'),
		('HT61547', '2024-03-06', '14:53:21', 30000000.00, 'A', 'PH105', 'PH_item_007'),
		('HT90482', '2024-04-03', '05:27:36', 400000.00, 'A', 'PH103', 'PH_item_005'),
		('HT36715', '2024-04-14', '10:08:47', 25000000.00, 'C', 'PH101', 'PH_item_012'),
		('HT52106', '2024-04-21', '15:36:12', 300000.00, 'C', 'PH108', 'PH_item_003'),
		('HT87654', '2024-05-16', '09:19:28', 50000000.00, 'C', 'PH106', 'PH_item_009'),
		('HT19328', '2024-05-11', '13:47:39', 300000.00, 'A', 'PH110', 'PH_item_004'),
		('HT64092', '2024-05-28', '06:55:03', 150000.00, 'C', 'PH103', 'PH_item_015'),
		('HT40875', '2024-06-25', '16:14:50', 3.00, 'C', 'PH104', 'PH_item_002');
        

        

