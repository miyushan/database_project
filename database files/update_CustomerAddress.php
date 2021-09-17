<?php
    include('db_config.php');

    $postdata = file_get_contents('php://input');
	
	echo $postdata;
    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);
		
        echo $id = $request->id;
        echo $Address = $request->Address;

        $sql = "UPDATE customer SET `Address`='$Address' WHERE id=$id";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }
    }
    

    mysqli_close($connect);

?>