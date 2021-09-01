<?php

    include('db_config.php');

    $postdata = file_get_contents('php://input');

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        $quantity = $request->quantity;
        $cost = $request->cost;
        $customer_id = $request->customerId;
        $manager_id = $request->managerId;
        $delivery_Person_id = $request->deliveryPersonId;

        $sql = "INSERT INTO orders (Quantity, Total_Cost, Customer_Id, Manager_Id, Delivery_Person_Id) VALUES ('$quantity', '$cost', '$customer_id', '$manager_id', '$delivery_Person_id')";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }

    }

    mysqli_close($connect);
?>

