<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    
    session_start();
    require_once __DIR__."/models/User.php";
    require_once __DIR__."/db/db_config.php";
    
    if(!isset($_SESSION['isAuthenticated'])){
        header('Location: signin.php');
    }
    $userModel = new User(PDOConnection::instance());
    $userData = $userModel->find($_SESSION['email']);

    // Configuration settings for the key
    
    
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
        <section class="w-5/12 h-full m-auto flex flex-col justify-center">
                <div class="bg-white shadow-sm rounded-sm p-8">
                    <div class="flex flex-row mb-4 items-center">
                        <h1 class="font-bold text-xs">API CREDENTIALS</h1>
                        <div class="ml-auto">
                                <a href="/logout.php" class="p-2 border border-black rounded-md text-xs font-bold">
                                    Logout
                                </a>
                        </div>
                    </div>

                    <hr class="mb-8">


                    <div>
                        <p class="font-bold text-xs mb-2">API KEY</p>
                        <div class="bg-gray-100 rounded-md p-2 mb-4">
                                <p class="apiKey"><?php echo $userData['api_key']; ?>
                            </p>
                        </div>

                        <div class="flex flex-row items-center">
                            <div id="copy" class="w-3/12 p-2 rounded-lg shadow-lg text-center uppercase cursor-pointer">
                                Copy Key
                            </div>

                            <div class="ml-auto text-green-300 text-sm hidden" id="success-text">
                                API KEY COPIED SUCCESSFULLY!
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    </main>
    
    <script>
        const copyBtn = document.querySelector('#copy');
        const apiKey = document.querySelector(".apiKey");
        const successText = document.querySelector("#success-text");

        function copyApiKeyToClipBoard(){
           navigator.clipboard.writeText(apiKey.innerText)
        .then(() => console.log("Done copying"));
        }

        function handleAPIKeyCopy(){
            copyApiKeyToClipBoard();
            successText.classList.replace("hidden", "block");
            setTimeout(() => {
                successText.classList.replace("block", "hidden");
            }, 3000);
        }

        copyBtn.addEventListener('click', handleAPIKeyCopy);

    </script>
</body>
</html>