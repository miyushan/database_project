<?php

    include('db_config.php');

    $postdata = file_get_contents('php://input');

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        $name = $request->productName;
        $weight = $request->totalStockWeight;
        $price = $request->pricePerKilogram;

        $sql = "INSERT INTO product (Name, Weight, Price) VALUES ('$name', '$weight', '$price')";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }

    }

    mysqli_close($connect);
?>

