DROP TABLE IF EXISTS `branch`;
CREATE TABLE `branch` (
    `id` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Name` varchar(120) NOT NULL,
    `Address` varchar(255) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `First_Name` varchar(120) NOT NULL,
    `Last_Name` varchar(120) NOT NULL,
    `Gender` varchar(10) NOT NULL,
    `Contact_Number` varchar(10) NOT NULL,
    `Branch_Name` varchar(120) NOT NULL,
    `Password` varchar(150) NOT NULL,
    `Address` varchar(255) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `First_Name` varchar(120) NOT NULL,
    `Last_Name` varchar(120) NOT NULL,
    `Gender` varchar(10) NOT NULL,
    `Salary` int(11) NOT NULL,
    `Contact_Number` varchar(10) NOT NULL,
    `Branch_Name` varchar(120) NOT NULL,
    `Password` varchar(150) NOT NULL,
    `Address` varchar(255) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `delivery_person`;
CREATE TABLE `delivery_person` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `First_Name` varchar(120) NOT NULL,
    `Last_Name` varchar(120) NOT NULL,
    `Gender` varchar(10) NOT NULL,
    `Salary` int(11) NOT NULL,
    `Contact_Number` varchar(10) NOT NULL,
    `Branch_Name` varchar(120) NOT NULL,
    `Password` varchar(150) NOT NULL,
    `Address` varchar(255) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
    `id` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Name` varchar(120) NOT NULL,
    `Weight` double NOT NULL,
    `Price` double NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
    `id` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`Quantity` double NOT NULL,
    `Total_Cost` varchar(120) NOT NULL,
    `Customer_Id` int(6) NOT NULL,
	`Manager_Id` int(6) NOT NULL,
	`Delivery_Person_Id` int(6) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `order_Items`;
CREATE TABLE `order_Items` (
    `id` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Item_Name` varchar(120) NOT NULL,
    `Item_Price` double NOT NULL,
    `Order_id` int(6) NOT NULL,
    `Posting_Date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;