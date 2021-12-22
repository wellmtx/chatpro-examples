<?php

$number = $_POST['getNumber'];
$mensagem = $_POST['mensagem'];

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => "https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message" ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_CUSTOMREQUEST => "POST" ,
	CURLOPT_POSTFIELDS => "{ \r\n  \"message\": \"$mensagem\",\r\n  \"number\": \"$number\"\r\n }" ,
	CURLOPT_HTTPHEADER => array (
		"Authorization: [seuToken]",
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
