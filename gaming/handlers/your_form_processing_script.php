<?php
require_once('connection.php');

$email = $_POST['email'];

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo "Invalid email address. Please try again.";
  exit();
}

$sql = "INSERT INTO subscribers (email) VALUES (?)";
$stmt = mysqli_prepare($conn, $sql);

mysqli_stmt_bind_param($stmt, "s", $email);

if (mysqli_stmt_execute($stmt)) {
  echo "Thank you for subscribing! You will now receive updates from Helix gaming.";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_stmt_close($stmt);

?>
