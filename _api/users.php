<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once $_SERVER['DOCUMENT_ROOT']."/ResponseHeaders.php";

    $obj = new \stdClass();
    $obj->name = "asdsad";
    $obj->age = "23";
    echo json_encode($obj);

?>