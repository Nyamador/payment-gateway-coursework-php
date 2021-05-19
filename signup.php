<?php
    if(isset($_SESSION['isAuthenticated'])){
        header('Location: dashboard.php');
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/tailwind.min.css">
    <title>Sign Up - Coventry Pay</title>
    <style>
        body{margin:0; background-color:#f4fbff;}
    </style>
</head>
<body>
    <main class="h-screen w-full">
            <section class="w-5/12 h-full flex flex-col justify-center m-auto">
                <div class="bg-white rounded-md shadow-sm p-8">
                    <form method="POST" action="/dashboard/signup.php">
                        <h1 class="mb-4 font-bold text-2xl">Sign Up</h1>

                        <!-- Form Errors -->
                        <div class="bg-red-100 p-2 rounded-md mb-2 mt-2">
                                <p class="text-red-500"><?php if(isset($_GET['error'])){ echo $_GET['error'];}?></p>
                        </div>

                        <div class="flex flex-col mb-10">
                            <label for="email" class="mb-4">Email</label>
                            <input type="email" name="email" id="email" class="bg-gray-100 rounded-md p-2 outline-none focus:ring focus:ring-blue-400" placeholder="Email" autocomplete="false" required>
                        </div>

                        <div class="flex flex-col">
                            <label for="password" class="mb-4">Password</label>
                            <input type="password" name="password" id="password" class="bg-gray-100 rounded-md  outline-none  p-2 focus:ring focus:ring-blue-400" placeholder="Password" required>
                        </div>  

                        <button type="submit" value="signup" class="outline-none rounded-md p-2 text-center mt-8 bg-blue-500 text-white w-full">
                            Sign Up
                        </button>                      
                    </form>
                </div>
            </section>
    </main>
</body>
</html>