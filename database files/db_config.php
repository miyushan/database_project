<?php
    include_once ('core.php');

    $connect = mysqli_connect('localhost', 'miyushan', '1234', 'database_project');
    
    if(!$connect){
        echo ("DataBase could not connect:\t" . mysqli_error());
    }
    

?>