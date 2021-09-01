<?php

    include('db_config.php');

    // header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    // header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

    $sql = "SELECT id, Name, Weight, Price, Posting_Date FROM product";
    $data = mysqli_query($connect, $sql);

    while($row = $data->fetch_assoc()){
        $result[] = $row;
    }   
    echo json_encode($result);
    
    mysqli_close($connect);
    
?>