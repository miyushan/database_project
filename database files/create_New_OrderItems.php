<?php

    include('db_config.php');

    $postdata = file_get_contents('php://input'); 

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        // $id = $request->id;
        $name = $request->name;
        $price = $request->price;
        $order_id = $request->order_id;

        $sql = "INSERT INTO order_items (Item_Name, Item_Price, Order_id) VALUES ('shakeer', '234.5', '4')";
        // $sql = "INSERT INTO order_items (Item_Name, Item_Price, Order_id) VALUES ('$name', '$price', '$order_id')";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }

    }

    mysqli_close($connect);
?>

