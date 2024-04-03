<?php
    // Set session variables
    session_start();
    $_SESSION["username"] = $_POST['username'];
    $_SESSION["password"] = $_POST['password'];

    // Redirect to a protected page
    header('Location: protectedPage.php');
?>