INSERT INTO `branch` (`id`, `Name`, `Contact_Number`, `Address`, `Posting_Date`) VALUES
(1, 'Kochchikade', '0317413429', '48, Pallansena road Kochchikade', '2020-02-01 10:25:39'),
(2, 'Negombo', '0314673226', '251,Sea street Negombo', '2020-02-11 12:32:59'),
(3, 'Nuwara Eliya', '0521472183', '74/14, Beddagana road Nuwara Eliya', '2020-03-10 10:24:41'),
(4, 'Anuradhapura', '0250634208', 'Isuru Products, Jaffna junction Anuradhapura', '2020-03-13 17:16:23'),
(5, 'Chilaw', '0320533329', '123/35, Seda Uyana, Kurunegala road Chilaw', '2020-04-02 13:23:02'),
(6, 'Polonnaruwa', '0270941380', '92/6 New Moor street Polonnaruwa', '2020-04-09 13:39:53'),
(7, 'Ratnapura', '0451824124', '95/1 B Jampettah Ln Ratnapura', '2020-04-20 15:50:01'),
(8, 'Gampaha', '0333399599', '123, Galle Face Court 23 Gampaha', '2020-05-02 09:22:56'),
(9, 'Trincomalee', '0268523719', '15 Main street Trincomalee', '2020-05-22 12:13:16'),
(10, 'Vavuniya', '0240194737', '449 Main street Vavuniya', '2020-05-26 10:33:40'),
(11, 'Jaffna', '0212701621', '70 De Saram road, Jaffna', '2020-06-01 10:48:11'),
(12, 'Mannar', '0239774329', '163 Lower street Mannar', '2020-06-16 16:45:06'),
(13, 'Kalutara', '0340627810', '56, Sumudu Place, Asiri Uyana Kalutara', '2020-06-20 11:08:26'),
(14, 'Puttalam', '0323012247', '232 Baseline road Puttalam', '2020-08-01 14:07:16'),
(15, 'Kegalle', '0351374260', '	452A  Main street Kegalle', '2020-08-03 12:02:56'),
(16, 'Avissawella', '0360348417', '39, Rathnapura road Avissawella', '2020-08-17 13:38:40'),
(17, 'Kurunegala', '0371612671', '41nd Floor, Sarasavi Building, Kurunegala', '2020-08-20 08:29:54'),
(18, 'Matara', '0410912451', 'South Lake Resorts Kathaluwa Ahangama Matara', '2020-08-22 20:18:27'),
(19, 'Hambantota', '0476784284', '72-74 Vauxhall Lane Hambantota', '2020-10-09 14:27:45'),
(20, 'Hatton', '0514638345', 'Tirukovil Kalmunai Hatton', '2020-10-13 16:13:40'),
(21, 'Nawalapitiya', '0540240123', 'Export Processing Zone, Biyagama Nawalapitiya', '2020-10-27 16:46:34'),
(22, 'Badulla', '0559122942', '312 Main street Badulla', '2020-11-16 15:42:32'),
(23, 'Bandarawela', '0571002402', 'Ariyanandaramya Katuwasgoda VG Bandarawela', '2020-11-30 08:44:49'),
(24, 'Ampara', '0631443316', '77 Sir James Pieris Mw Ampara', '2020-12-01 08:51:05'),
(25, 'Batticaloa', '0650023526', '178,Trinco road Batticaloa', '2020-12-18 09:31:09'),
(26, 'Matale', '0667130710', '61 1st Cross street, 11 Matale', '2021-01-16 12:52:46'),
(27, 'Kalmunai', '0671043191', '188 Main street, HR Kalmunai', '2021-02-04 08:53:50'),
(28, 'Kandy', '0814054101', 'No 99 Thalatuoya road, Gurudeniya Kandy', '2021-03-18 15:35:28');

INSERT INTO `customer` (`id`, `First_Name`, `Last_Name`, `Gender`, `Contact_Number`, `Branch_Name`, `Password`, `Address`, `Posting_Date`) VALUES
(1, 'Gihan', 'Priyadarshan', 'Male', '0773154525', 'Nuwara Eliya', 'gihan123', '23 Main road Nuwara Eliya', '2020-12-14 09:05:29'),
(2, 'Buddika', 'Lahiru', 'Male', '0717353672', 'Anuradhapura', 'buddika123', '51 Madawachchiya Anuradhapura', '2020-12-14 11:22:39'),
(3, 'Supuni', 'Rangika', 'Female', '0776378972', 'Puttlam', 'supuni123', '7 Watakawa Dankotuwa', '2020-12-15 16:09:51');


INSERT INTO `manager` (`id`, `First_Name`, `Last_Name`, `Gender`, `Salary`, `Contact_Number`, `Branch_Name`, `Password`, `Address`, `Posting_Date`) VALUES
(1, 'Nadeesha', 'Madurange', 'Male', '75000', '0753457456', 'Nuwara Eliya', 'nadeesha123', '58 Main road Kothmale', '2020-12-14 09:05:29'),
(2, 'Sisila', 'Jayamal', 'Male', '70000', '0714567564', 'Anuradhapura', 'sisila123', '3 Galkulama Anuradhapura', '2020-12-14 11:22:39'),
(3, 'Dinuka', 'Madushan', 'Male', '74000', '0772435642', 'Puttlam', 'dinuka123', '15 Main Road Chilaw', '2020-12-15 16:09:51');


INSERT INTO `delivery_person` (`id`, `First_Name`, `Last_Name`, `Gender`, `Salary`, `Contact_Number`, `Branch_Name`, `Password`, `Address`, `Posting_Date`) VALUES
(1, 'Dinesh', 'Chandrika', 'Male', '55000', '0713546733', 'Nuwara Eliya', 'dinesh123', '23 Main road Kothmale', '2020-12-14 09:05:29'),
(2, 'Thilina', 'Sanjaya', 'Male', '58000', '0726678674', 'Anuradhapura', 'thilina123', '23 Galkulama Anuradhapura', '2020-12-14 11:22:39'),
(3, 'Deshan', 'Lakshitha', 'Male', '57000', '0772368653', 'Puttlam', 'deshani123', '7 Main Road Dankotuwa', '2020-12-15 16:09:51');


INSERT INTO `product` (`id`, `Name`, `Weight`, `Price`, `Posting_Date`) VALUES
(1, 'Carrot', '3', '220.00', '2020-12-14 08:25:29'),
(2, 'Big Onions', '14', '120.50' , '2020-12-14 08:26:02'),
(3, 'Tomatoes', '16', '80.75' , '2020-12-14 08:26:32'),
(4, 'Pumpkin', '12', '80.50' , '2020-12-14 08:27:03'),
(5, 'Potatoes', '12', '220.00' , '2020-12-14 08:28:14'),
(6, 'Leeks', '14', '275.50' , '2020-12-14 08:28:59'),
(7, 'Red Onions', '12', '455.20' , '2020-12-14 08:29:21'),
(8, 'Cabbage', '13', '200.50' , '2020-12-14 08:30:03'),
(9, 'Brinjals', '21', '275.50' , '2020-12-14 08:32:13'),
(10, 'Green Chilies', '15', '475.25' , '2020-12-14 08:32:31'),
(11, 'Garlic', '16', '540.00' , '2020-12-14 08:34:25'),
(12, 'Manioc', '18', '80.50' , '2020-12-14 08:35:03'),
(13, 'Capsicum', '11', '475.50' , '2020-12-14 08:35:21'),
(14, 'Sweet Potato', '13', '220.00' , '2020-12-14 08:36:13'),
(15, 'Ladies Fingers', '19', '90.00' , '2020-12-14 08:36:58'),
(16, 'Capsicum', '17', '480.50' , '2020-12-14 08:44:21'),
(17, 'Beetroot', '17', '180.25' , '2020-12-14 08:45:05'),
(18, 'Bitter Gourd', '16', '150.00' , '2020-12-14 08:45:49'),
(19, 'Lime', '13', '275.50' , '2020-12-14 08:47:11'),
(20, 'Kekiri', '12', '130.00' , '2020-12-14 08:48:37'),
(21, 'Broccoli', '13', '2500.00' , '2020-12-14 08:49:04'),
(22, 'Green Cucumber', '11', '380.50' , '2020-12-14 08:49:27'),
(23, 'Thalana Batu', '17', '250.00' , '2020-12-14 08:50:03'),
(24, 'Bell Pepper Green', '12', '920.50' , '2020-12-14 08:53:11'),
(25, 'Bell Pepper Yellow', '14', '1500.00' , '2020-12-14 08:54:03'),
(26, 'Thumba Karawila', '18', '550.75' , '2020-12-14 08:54:48'),
(27, 'Onion Leaves', '19', '350.25' , '2020-12-14 08:56:17'),
(28, 'Cauliflower', '21', '400.00' , '2020-12-14 08:57:19'),
(29, 'Ginger', '12', '425.50' , '2020-12-14 08:58:31'),
(30, 'Dambala', '15', '350.00' , '2020-12-14 08:59:06');

INSERT INTO `orders` (`id`, `Quantity`, `Total_Cost`, `Customer_Id`, `Manager_Id`, `Delivery_Person_Id`, `Posting_Date`) VALUES
(1, 25.2, 464.50, 4, 1, 3, '2020-12-14 08:25:29'),
(2, 12.6, 324.50, 2, 6, 2, '2020-12-14 08:25:29'),
(3, 9.26, 534.50, 3, 5, 2, '2020-12-14 10:32:15'),
(4, 12.6, 324.50, 2, 6, 2, '2020-12-14 08:25:29'),
(5, 9.26, 534.50, 3, 5, 2, '2020-12-14 10:32:15');
