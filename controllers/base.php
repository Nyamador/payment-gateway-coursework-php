<?php
    abstract class BaseController{
        private $model;
        private $requestMethod;
        private $userId;

        public function __construct($model, $requestMethod, $userId) {
                $this->model = $model;
                $this->requestMethod = $requestMethod;
                $this->userID = $userId;
        }

        abstract public function handleRequest();
    }
?>