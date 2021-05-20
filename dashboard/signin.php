<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require_once __DIR__."/../models/User.php";
    require_once __DIR__."/../db/db_config.php";
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $userModel = new User(PDOConnection::instance());   
        if($userModel->exists($_POST["email"]) === TRUE){
            // start a session and append users details to session
            $userData = $userModel->find($_POST["email"]);
            if(password_verify($_POST['password'], $userData->password) === TRUE){
                session_start();
                $_SESSION['email'] = $userData->email;
                $_SESSION['uid'] = $userData->id;
                $_SESSION['isAuthenticated'] = true;
                header("Location: ../dashboard.php");
            }else{
                header("Location: ../signin.php?error=true&detail=Incorrect password&email={$_POST['email']}");
            }
        }else{
            // ask user to login again
            session_destroy();
            header("Location: ../signin.php?error=true&detail=User Does Not Exist");
        };
    }

?>