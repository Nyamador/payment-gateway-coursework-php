<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/ResponseHeaders.php";

    define("BASE_URL", "http://localhost:8000/api/v1/");
    
    $routesMapper = array(
        "transactions" => BASE_URL."transactions/",
        "otps" => BASE_URL."otps/",
        "links" => BASE_URL.""
    );
    echo json_encode($routesMapper, JSON_PRETTY_PRINT);
?>