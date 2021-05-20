<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/base.php";


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
        try{
            $sql = "SELECT * FROM {$this->table} WHERE uuid=?";
            $preparedQuery = $this->connection->prepare($sql);
            $preparedQuery->execute(array($id));
            $result = $preparedQuery->fetch();
            return $result;
        }catch (Exception $e){
            echo $e->getMessage().''.''.$e->getCode().''.$e->getLine().''.$e->getFile();
        }
        }

        public function insert($data){
            $sql = "INSERT INTO {$this->table} (uuid, user_id, amount, customer_name, customer_email, customer_mobile, success_url, error_url)"."VALUES(?,?,?,?,?,?,?,?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            if( $prepaparedQuery->execute(array(
                $data['uuid'],
                $data['user_id'],
                $data['amount'],
                $data['customer_name'],
                $data['customer_email'],
                $data['customer_mobile'],
                $data['success_url'],
                $data['error_url'],
            )) ){
                return TRUE;
            }
            else{
                return FALSE;
            }
        }

        public function update($id, $data){

        }

        public function delete($id){

        }
    }

?>