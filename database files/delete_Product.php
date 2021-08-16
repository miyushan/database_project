<?php
    include('db_config.php');

    $id = $_GET['id'];

    $sql = "DELETE FROM product WHERE id=$id";


    if(mysqli_query($connect, $sql)){
        http_response_code(201);
    }else{
        http_response_code(422);
    }

    mysqli_close($connect);

?>