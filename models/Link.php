<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/models/base.php";


    class LinkModel extends BaseModel {

        public function __construct($PDOConnection) {
            parent::__construct($PDOConnection, "Links");
        }

        public function findAll($uid){
            $sql = "SELECT * FROM {$this->table}";
            $prepaparedQuery = $this->connection->prepare($sql);
            $result = $prepaparedQuery->execute(array($uid))->fetch();
            return $result;
        }

        public function find($id){
            $sql = "SELECT * FROM {$this->table} WHERE uuid={$id}"."VALUES(?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            $result = $prepaparedQuery->execute(array($id))->fetch();
            return $result;
        }

        public function insert($data){
            $sql = "INSERT INTO {$this->table} (uuid, user_id, amount, customer_name, customer_email, customer_mobile, success_url, error_url)"."VALUES(?,?,?,?,?,?,?,?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            $prepaparedQuery->execute(array(
                $data['uuid'],
                $data['user_id'],
                $data['customer_name'],
                $data['customer_email'],
                $data['customer_mobile'],
                $data['success_url'],
                $data['error_url'],
            ));
        }

        public function update($id, $data){

        }

        public function delete($id){

        }
    }

?>