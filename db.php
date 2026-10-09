<?php

$conn = mysqli_connect("localhost", "root", "", " login_db");

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}

echo "Database Connected Successfully";

?>