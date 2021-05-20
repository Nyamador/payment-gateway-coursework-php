<?php
    require_once __DIR__."/../models/User.php";
    require_once __DIR__."/../db/db_config.php";

    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $email =  $_POST['email'];
        $password =  $_POST['password'];
        $userModel = new User(PDOConnection::instance());
        if($userModel->exists($email) != TRUE){
            $userModel->insert(array('email' => $email, 'password' => password_hash($password, PASSWORD_DEFAULT)));
            session_start();
            $_SESSION['email'] = $email;
            $_SESSION['isAuthenticated'] = TRUE;
            header('Location: ../dashboard.php');  
        }else{
            session_destroy();
            header("Location: ../signup.php?error=User Already Exists");
        }
    }
?>