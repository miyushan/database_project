<?php
    include('db_config.php');

    $postdata = file_get_contents('php://input');
	
	echo $postdata;
    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);
		
        echo $id = $request->id;
        echo $First_Name = $request->First_Name;
        echo $Last_Name = $request->Last_Name;
        echo $Gender = $request->Gender;
        echo $Salary = $request->Salary;
        echo $Contact_Number = $request->Contact_Number;
        echo $Branch_Name = $request->Branch_Name;
        echo $Password = $request->Password;
        echo $Address = $request->Address;

        $sql = "UPDATE manager SET `First_Name`='$First_Name', `Last_Name`='$Last_Name', `Gender`='$Gender', `Salary`='$Salary', `Contact_Number`='$Contact_Number', `Branch_Name`='$Branch_Name', `Password`='$Password', `Address`='$Address' WHERE id=$id";

        if(mysqli_query($connect, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }
    }
    

    mysqli_close($connect);

?>