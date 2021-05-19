<?php

    require_once __DIR__."/../db/db_config.php";

    abstract class BaseModel{
        protected $connection;
        protected $table;

        public function __construct($PDOConnection, $table)
        {   
            $this->connection = $PDOConnection;
            $this->table = $table;
        }

        abstract public function findAll($uid);

        abstract public function find($id);

        abstract public function insert($data);
        
        abstract public function update($id, $data);

        abstract public function delete($id);
    
    }

?>