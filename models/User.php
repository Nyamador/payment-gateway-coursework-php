<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/models/base.php";

    class User extends BaseModel {


        public function __construct($PDOConnection) {
            parent::__construct($PDOConnection, "Users");
        }

        public function exists($email){
            $sql = "SELECT * FROM {$this->table} WHERE email=?";
            $prepaparedQuery = $this->connection->prepare($sql);
            $result = $prepaparedQuery->execute(array($email))->fetch();
            if(isset($result->email)) return true;
            return false;

        }

        public function insert($data){
            $sql = "INSERT INTO {$this->table} (email, password)"."VALUES(?,?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            $prepaparedQuery->execute(array(
                $data['email'],
                $data['password'],
            ));
        }

        public function findAll($uid){}

        public function find($id){}
        
        public function update($id, $data){}

        public function delete($id){}

    }
?>