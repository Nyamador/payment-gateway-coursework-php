<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE,HEAD");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization,X-Requested-With");
    
    // $routesMapper = new \stdClass();
    // $routesMapper->transactions = "http://localhost/transactions/";
    // $routesMapper->name = "https://github.com/Nyamador/payment-gateway-coursework-php";
    $routesMapper = array(
        'transactions' => "http://localhost/transactions/",
        "name" => "https://github.com/Nyamador/payment-gateway-coursework-php"
    );
    echo json_encode($routesMapper, JSON_PRETTY_PRINT);
?>