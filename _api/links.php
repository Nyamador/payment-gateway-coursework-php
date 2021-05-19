<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL); 

    require_once __DIR__."/../controllers/LinkController.php";
    
    $headers = getallheaders();
    $linkController = new LinkController($_SERVER['REQUEST_METHOD'], $headers['Authorization']);
    $linkController->handleRequest();

?>