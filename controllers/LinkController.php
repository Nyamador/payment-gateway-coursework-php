<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once $_SERVER['DOCUMENT_ROOT']."/controllers/base.php";

    class LinkController extends BaseController{
        public function __construct($requestMethod){
            parent::__construct("LInks", $requestMethod, "1");
        }

        public function handleRequest(){
            switch($this->requestMethod){
                case 'GET':
                    echo "get";
                    break;
                case 'POST':
                    echo "post";
                    break;
            }
        }

    }
?>