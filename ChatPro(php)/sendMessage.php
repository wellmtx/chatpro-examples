<?php

$number = $_POST['getNumber'];
$mensagem = $_POST['mensagem'];

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => "https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/send_message" ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_CUSTOMREQUEST => "POST" ,
  	CURLOPT_ENCODING => "",
 	CURLOPT_MAXREDIRS => 10,
  	CURLOPT_TIMEOUT => 30,
  	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
	CURLOPT_POSTFIELDS => "{ \r\n  \"message\": \"$mensagem\",\r\n  \"number\": \"$number\"\r\n }" ,
	CURLOPT_HTTPHEADER => array (
		"Authorization: eop82iy1mdf4ohbez2wlmea7n21y4d",
		"cache_control: no-cache"
	)	
));

$responseMessage = curl_exec($ch);
$err = curl_error($ch);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $responseMessage;
}


?>
