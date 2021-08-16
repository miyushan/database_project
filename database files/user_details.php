<?php

	include('core.php');
	
    $postdata = file_get_contents('php://input');

    if(isset($postdata) && !empty($postdata)){

        $request = json_decode($postdata);

        print_r($request);

        $firstName = $request->firstName;
        $lastName = $request->lastName;
        $gender = $request->gender;
        $contactNumber = $request->contactNumber;
        $branchName = $request->branchName;
        $password = $request->password;
		
		$arr = array('firstName'=>$firstName, 'lastName'=>$lastName);
		echo json_encode($arr);
		
    }

?>

