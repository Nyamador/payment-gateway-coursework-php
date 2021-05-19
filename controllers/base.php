<?php
    abstract class BaseController{
        public $model;
        public $requestMethod;
        public $user_token;

        public function __construct($model, $requestMethod, $user_token) {
                $this->model = $model;
                $this->requestMethod = $requestMethod;
                $this->user_token = $user_token;
        }

        abstract public function handleRequest();
    }
?>