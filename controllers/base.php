<?php
    abstract class BaseController{
        public $model;
        public $requestMethod;
        public $userId;

        public function __construct($model, $requestMethod, $userId) {
                $this->model = $model;
                $this->requestMethod = $requestMethod;
                $this->userID = $userId;
        }

        abstract public function handleRequest();
    }
?>