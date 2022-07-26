<?php
$payload = json_encode(array(
'caption' => 'nome do arquivo',
'number' => 'DDDNumero',
'url' => 'URL'
))

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => 'https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message_file_from_url' ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_CUSTOMREQUEST => "POST" ,
	CURLOPT_POSTFIELDS => $payload ,
	CURLOPT_HTTPHEADER => array (
		"Authorization: [seuToken]",
		"Content-Type: application/json",
		"cache_control: no-cache"
	))
);

$responseFile = curl_exec($ch);

curl_close($ch);

$dataFile = json_decode($responseFile, true);

print_r($dataFile['message']);

?>
