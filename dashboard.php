<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    if(!isset($_SESSION['isAuthenticated'])){
        // header('Location: signin.php');
    }

    // Configuration settings for the key
    echo "cu_pay".bin2hex(openssl_random_pseudo_bytes(20));
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/tailwind.min.css">
    <title>Dashboard - Coventry Pay</title>
    <style>
        body{margin:0; background-color:#f4fbff;}
    </style>    
</head>
<body>

    <main class="w-full h-screen">
        <section class="w-5/12 m-auto">
                <div class="bg-white shadow-sm rounded-sm p-8">
                    <div class="flex flex-row mb-4">
                        <h1 class="font-bold text-xs">API CREDENTIALS</h1>
                        <div class="ml-auto">
                                <a href="" class="p-2 border border-black rounded-md text-xs font-bold">
                                    Logout
                                </a>
                        </div>
                    </div>

                    <hr>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum aliquid autem ducimus. Maxime similique repudiandae, quod dolorem assumenda deleniti!</p>
                </div>
        </section>
    </main>
    
</body>
</html>