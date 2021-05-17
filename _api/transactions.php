<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL); 

    require_once $_SERVER['DOCUMENT_ROOT']."/controllers/LinkController.php";

    // echo $_SERVER['REQUEST_METHOD'];
    // 1. Call the controller <CONTROLLER>(REQUEST_METHOD, userid)
    $controller = new LinkController($_SERVER['REQUEST_METHOD']);
    $controller->handleRequest();

    $config = array(
        "digest_alg" => "sha512",
        "private_key_bits" => 2048,
        "private_key_type" => OPENSSL_KEYTYPE_RSA,
    );
    $resource = openssl_pkey_new($config);
  
    // Extract private key from the pair
    openssl_pkey_export($resource, $private_key);
  
    // Extract public key from the pair
    $key_details = openssl_pkey_get_details($resource);
    $public_key = $key_details["key"];
  
    $keys = array('private' => $private_key, 'public' => $public_key);
    
    echo "<p>".$keys['public']."</p>"."\n";
    echo "\n";
    echo $keys['private'];    
?>