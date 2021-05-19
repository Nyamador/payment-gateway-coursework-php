<?php
    class PDOConnection{
        private static $pdo;
        private static $host = '127.0.0.1';
        private static $user = 'root';
        private static $dbname = 'gateway';
        private static $password = '';

        public static function instance()
        {
            if (PDOConnection::$pdo === null) {
                self::init();
            }
    
            return self::$pdo;
        }    
        

        private static function init()
        {
            $opt = array(
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => FALSE,
            );
            $dsn = 'mysql:host='.self::$host.';dbname='.self::$dbname.";charset=utf8";
            self::$pdo = new PDO($dsn, self::$user, self::$password, $opt);
        }        
    }
?>