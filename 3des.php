<?php

function encrypt3Des($data, $key){

    $encData = openssl_encrypt($data, 'DES-EDE3', $key, OPENSSL_RAW_DATA);
    
return base64_encode($encData); 
  
}

function decrypt3Des($ciphertext, $key){
  $decData = openssl_decrypt(base64_decode($ciphertext), 'DES-EDE3', $key, OPENSSL_RAW_DATA);
  return $decData;
}

$data = '{
  "card_number": "2222 4000 7000 0005",
  "cvv": "812",
  "expiry_month": "01",
  "expiry_year": "21",
  "currency": "NGN",
  "amount": "100000",
  "email": "ekene@gmail.com",
  "tx_ref": "MC-3243enewtest-visa-2",
  "redirect_url": "https://webhook.site/3ed41e38-2c79-4c79-b455-97398730866c",
  "type": "card"
}';

$enc = encrypt3Des($data, "df15dd8100e07cba1d432b48a6a21743fe9de497");


$dec =  decrypt3Des($enc, "df15dd8100e07cba1d432b48a6a21743fe9de497");
echo $dec->email;

?>