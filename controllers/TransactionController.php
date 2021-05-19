<?php

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL); 

    require_once __DIR__."/base.php";
    require_once __DIR__."/../models/Link.php";
    require_once __DIR__."/../models/User.php";
    require_once __DIR__."/../models/Transaction.php";
    require_once __DIR__."/../db/db_config.php";
    
    
    class TransactionController extends BaseController{
        public function __construct($requestMethod, $api_key){
            parent::__construct(new LinkModel(PDOConnection::instance()), $requestMethod, $api_key);
        }

        public function handleRequest(){
            header('Content-type: application/json');
            $PDOSocket = PDOConnection::instance();
            $userModel = new User($PDOSocket);
            $linkModel = new LinkModel($PDOSocket);
            $transactionModel = new Transaction($PDOSocket);
            switch($this->requestMethod){
                case 'GET':
                    break;
                case 'POST':
                    if (isset($userData['api_key'])){
                        if (isset($_GET['id'])){
                            $response = $this->model->find($_GET['id']);
                            echo json_encode($response);
                        }
                    }
                    if(!isset($this->user_token)){
                            http_response_code(401);
                            $responseObj = array('error' => true, 'message' => "Unauthorized! Authorization Credentials Not found");
                            echo json_encode($responseObj); 

                    }
                    break;
                case 'POST':
                    $data = json_decode(file_get_contents('php://input'), true);
                    $uniqId = uniqid("");
                    $userData = $userModel->findByToken($this->user_token);
                    $linkData = $linkModel->find($_GET['id']);
                    if(isset($userData['api_key'])){
                        $insertedData = $this->model->insert(array(
                            'user' => $userData['id'],
                            'link' => $linkData['id'],
                            'country' => 'Ghana',
                            'customer_name' => $data["customer_name"],
                            'customer_email' => $data['customer_email'],
                            'customer_mobile' => $data['customer_mobile'],
                            'amount' => $data['amount'],
                            'payment_method' => $data['payment_method']
                        ));
                        if ($insertedData){
                            $responseObj = array('success' => true, 'message' => 'Transaction Created successfully');
                            echo json_encode($responseObj);
                        }else{
                            $responseObj = new \stdClass();
                            $responseObj-> success = false;
                            $responseObj-> message = "Failed to insert data";
                            echo json_encode($responseObj);
                        }
                    }else{
                        http_response_code(401);
                        $responseObj = array('error' => true, 'message' => "Unauthorized. Authorization Credentials Not found");
                        echo json_encode($responseObj);                        
                    }                    
                    break;
                default:
                    header('Content-type: application.json');
                    $responseObj = array('error' => true, 'message' => $this->requestMethod." HTTP method not supported on this entity");
                    echo json_encode($responseObj);
            }
        }


    }

?>