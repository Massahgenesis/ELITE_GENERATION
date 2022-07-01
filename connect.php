<?php

// connection a la base de donnees
$host = "localhost";
$dbname = "energie-generation";
$username = "root";
$password = "";

$conn = mysqli_connect( $host,
                        $username,
                        $password,
                        $dbname);

if (mysqli_connect_errno()) {
    die("connection error: " .mysqli_connect_error());
}
// else {
//          echo("connection");
//      }

?>