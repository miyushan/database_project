INSERT INTO `branch` (`id`, `name`, `Address`, `Posting_Date`) VALUES
(1, 'Kochchikade', '23 Main Road Kochchikade', '2020-11-01 08:05:29'),
(2, 'Negombo', '7/C Main Road Negombo', '2020-11-08 08:15:13'),
(3, 'Nuwara Eliya', '15 Main Street Nuwara Eliya', '2020-11-15 08:03:47');


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


INSERT INTO `product` (`id`, `Name`, `Weight`, `Price`, `Image`, `Posting_Date`) VALUES
(1, 'Carrot', '3', '220.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:25:29'),
(2, 'Big Onions', '14', '120.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:26:02'),
(3, 'Tomatoes', '16', '80.75', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:26:32'),
(4, 'Pumpkin', '12', '80.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:27:03'),
(5, 'Potatoes', '12', '220.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:28:14'),
(6, 'Leeks', '14', '275.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:28:59'),
(7, 'Red Onions', '12', '455.20', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:29:21'),
(8, 'Cabbage', '13', '200.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:30:03'),
(9, 'Brinjals', '21', '275.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:32:13'),
(10, 'Green Chilies', '15', '475.25', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:32:31'),
(11, 'Garlic', '16', '540.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:34:25'),
(12, 'Manioc', '18', '80.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:35:03'),
(13, 'Capsicum', '11', '475.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:35:21'),
(14, 'Sweet Potato', '13', '220.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:36:13'),
(15, 'Ladies Fingers', '19', '90.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:36:58'),
(16, 'Capsicum', '17', '480.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:44:21'),
(17, 'Beetroot', '17', '180.25', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:45:05'),
(18, 'Bitter Gourd', '16', '150.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:45:49'),
(19, 'Lime', '13', '275.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:47:11'),
(20, 'Kekiri', '12', '130.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:48:37'),
(21, 'Broccoli', '13', '2500.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:49:04'),
(22, 'Green Cucumber', '11', '380.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:49:27'),
(23, 'Thalana Batu', '17', '250.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:50:03'),
(24, 'Bell Pepper Green', '12', '920.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:53:11'),
(25, 'Bell Pepper Yellow', '14', '1500.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:54:03'),
(26, 'Thumba Karawila', '18', '550.75', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:54:48'),
(27, 'Onion Leaves', '19', '350.25', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:56:17'),
(28, 'Cauliflower', '21', '400.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:57:19'),
(29, 'Ginger', '12', '425.50', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:58:31'),
(30, 'Dambala', '15', '350.00', 'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', '2020-12-14 08:59:06');


INSERT INTO `product` (`id`, `Name`, `Weight`, `Price`, `Posting_Date`) VALUES
(1, 'Carrot', '3', '220.00', '2020-12-14 08:25:29'),
(2, 'Carro', '3', '220.00', '2020-12-14 08:25:29');

INSERT INTO `product`
SELECT 'Image' 
BulkColumn FROM OPENROWSET(BULK N'E:\CAMPUS\E18_5th_Semester\EC5070- Database Systems\Project\food_ordering_system\src\files\product-images\1_Brinjals.png', SINGLE_BLOB) image;