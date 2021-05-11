<?php

    require_once __DIR__."/db/db_config.php";

    abstract class BaseModel{
        protected $connection;
        protected $table;

        public function __construct($PDOConnection, $table)
        {   
            $this->connection = $PDOConnection;
            $this->table = $table;
        }

        public function findAll($uid){}

        public function find($id){}

        public function insert($data){}
        
        public function update($id, $data){}

        public function delete($id){}
    
    }

?>