<?php

    include('db_config.php');

    $postdata = file_get_contents('php://input');
    // header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    // header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        // $id = $request->id;
        $name = $request->name;
        $contactNumber = $request->contactNumber;
        $address = $request->address;

        $sql = "INSERT INTO branch (Name, Contact_Number, Address) VALUES ('$name', '$contactNumber', '$address')";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }

    }

    mysqli_close($connect);
?>

