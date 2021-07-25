<?php

    $connection = mysqli_connect("localhost", "root", "tcp");
    $db = mysqli_select_db($connection, "database_project");

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    
?>