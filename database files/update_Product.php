<?php
    include('db_config.php');

    $postdata = file_get_contents('php://input');

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);
        echo $id = $request->id;
        echo $productName = $request->productName;
        echo $totalStockWeight = $request->totalStockWeight;
        echo $pricePerKilogram = $request->pricePerKilogram;

        $sql = "UPDATE product SET `Name`='$productName', `Weight`='$totalStockWeight', `Price`='$pricePerKilogram' WHERE id=$id";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }
    }
    

    mysqli_close($connect);

?>