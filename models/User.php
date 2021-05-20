<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/base.php";

    class User extends BaseModel {


        public function __construct($PDOConnection) {
            parent::__construct($PDOConnection, "Users");
        }

        public function find($email){
            $sql = "SELECT * FROM {$this->table} WHERE email=?";
            $preparedQuery = $this->connection->prepare($sql);
            $preparedQuery->execute(array($email));
            $result = $preparedQuery->fetch();
            return $result;            
        }        

        public function findByToken($token){
            $sql = "SELECT * FROM {$this->table} WHERE api_key=?";
            $preparedQuery = $this->connection->prepare($sql);
            $preparedQuery->execute(array($token));
            $result = $preparedQuery->fetch();
            return $result;               
        }

        public function exists($email){
            $data = $this->find($email);
            if (isset($data->email)) {
                return TRUE;
            }else{
                return FALSE;
            }

        }

        public function insert($data){
            $sql = "INSERT INTO {$this->table} (email, password, api_key)"."VALUES(?,?,?)";
            $prepaparedQuery = $this->connection->prepare($sql);
            $prepaparedQuery->execute(array(
                $data['email'],
                $data['password'],
                bin2hex(openssl_random_pseudo_bytes(20)),
            ));
        }

        public function findAll($uid){}
        
        public function update($id, $data){}

        public function delete($id){}

    }
?>