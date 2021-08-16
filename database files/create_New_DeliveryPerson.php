<?php

    include('db_config.php');

    $postdata = file_get_contents('php://input');
    // header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    // header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $gender = $request->gender;
        $salary = $request->salary;
        $contactNumber = $request->contactNumber;
        $branchName = $request->branchName;
        $password = $request->password;


        $sql = "INSERT INTO delivery_person (First_Name, Last_Name, Gender, Salary, Contact_Number, Branch_Name, Password) VALUES ('$firstName', '$lastName', '$gender', '$salary', '$contactNumber', '$branchName', '$password')";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }

    }

    mysqli_close($connect);
?>

