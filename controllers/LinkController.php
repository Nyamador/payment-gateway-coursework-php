<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);  

    require_once __DIR__."/base.php";
    require_once __DIR__."/../models/Link.php";
    require_once __DIR__."/../models/User.php";
    require_once __DIR__."/../db/db_config.php";

    class LinkController extends BaseController{
        public function __construct($requestMethod){
            parent::__construct(new LinkModel(PDOConnection::instance()), $_SERVER['REQUEST_METHOD'], "df15dd8100e07cba1d432b48a6a21743fe9de497");
        }

    

        public function handleRequest(){
            switch($this->requestMethod){
                case 'GET':
                    // get user id from the token
                    header('Content-Type: application/json');
                    $userModel = new User(PDOConnection::instance());
                    $userData = $userModel->findByToken($this->user_token);
                    if (isset($userData['api_key'])){
                        if (isset($_GET['id'])){
                            $response = $this->model->find($_GET['id']);
                            echo json_encode($response);
                        }
                    }
                    break;
                case 'POST':
                    $userModel = new User(PDOConnection::instance());
                    $userData = $userModel->findByToken($this->user_token);
                    $data = json_decode(file_get_contents('php://input'), true);
                    $uniqId = uniqid("");
                    if(isset($userData['api_key'])){
                        $insertedData = $this->model->insert(array(
                            'uuid' => $uniqId,
                            'user_id' => $userData['id'],
                            'customer_name' => $data["customer_name"],
                            'customer_email' => $data['customer_email'],
                            'customer_mobile' => $data['customer_mobile'],
                            'amount' => $data['amount'],
                            'success_url' => $data['success_url'],
                            'error_url' => $data['error_url'],
                        ));
                        header('Content-type: application/json');
                        if ($insertedData){
                            $responseObj = array('success' => true, 'link' => 'http://localhost:8000/pay.php?token=?'.$uniqId);
                            echo json_encode($responseObj);
                        }else{
                            $responseObj = new \stdClass();
                            $responseObj-> success = false;
                            $responseObj-> message = "Failed to insert data";
                            echo json_encode($responseObj);
                        }
                    }
                    break;
            }
        }

    }
?>