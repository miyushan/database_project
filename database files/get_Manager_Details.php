<?php

    include('db_config.php');
    
    // header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    // header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 


    $sql = "SELECT id, First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password, Address, Posting_Date FROM manager";
    $data = mysqli_query($connect, $sql);

    while($row = $data->fetch_assoc()){
        $result[] = $row;
    }   
    echo json_encode($result);
    
    mysqli_close($connect);
    
?>