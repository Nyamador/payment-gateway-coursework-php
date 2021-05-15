<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/controllers/base.php";

    class LinkController extends BaseController{
        public function __construct($model, $requestMethod, $userId){
            parent::__construct($model, $requestMethod, $userId);
        }

        public function handleRequest(){
            switch($this->requestMethod){
                case 'GET':
                    break;
                case 'POST':
                    break;
            }
        }

    }
?>