<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/base.php";

    class Transaction extends BaseModel{

        public function __construct($PDOConnection){
            parent::__construct($PDOConnection, "Transactions");
        }
        
        public function insert($data){
            $sql = "INSERT INTO {$this->table} (user, link, country, amount, public_id, external_id, customer_name, customer_email, customer_mobile, payment_method, status)"."VALUES(?,?,?,?,?,?,?,?,?,?,?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            $prepaparedQuery->execute(array(
                $data['user'],
                $data['link'],
                $data['country'],
                $data['amount'],
                $data['public_id'],
                $data['external_id'],
                $data['customer_name'],
                $data['customer_email'],
                $data['customer_mobile'],
                $data['payment_method'],
                $data['status'],
            ));            
        }

        public function findAll($uid){
            $sql = "SELECT * FROM {$this->table} WHERE user=?";
            $prepaparedQuery = $this->connection->prepare($sql);
            $result = $prepaparedQuery->execute(array(
                $uid
            ))->fetch();
            return $result;
        }

        public function find($id){}
        
        public function update($id, $data){}

        public function delete($id){}


    }
?>