<?php

include "db.php";

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';
$confirm_password = $_POST['confirm_password'] ?? '';

if ($username == '' || $password == '') {
    die("Username and Password are required.");
}

if ($password !== $confirm_password) {
    die("Password and Confirm Password do not match.");
}

// Check username already exists
$sql = "SELECT id FROM users WHERE username = ?";

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "s", $username);
mysqli_stmt_execute($stmt);

$result = mysqli_stmt_get_result($stmt);

if (mysqli_num_rows($result) > 0) {
    die("Username already exists.");
}

// Password encrypt
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insert user
$sql = "INSERT INTO users (username, password) VALUES (?, ?)";

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ss", $username, $hashed_password);

if (mysqli_stmt_execute($stmt)) {

    echo "Registration Successful!<br><br>";
    echo "<a href='index.html'>Go to Login</a>";

} else {

    echo "Registration Failed: " . mysqli_error($conn);
}

?>