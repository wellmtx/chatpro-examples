<?php

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => "https://v4.chatpro.com.br/[EndPoint]/api/v1/status" ,
	CURLOPT_CUSTOMREQUEST => "GET" ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_HTTPHEADER => array(
		"Authorization: [seuToken]" ,
		"cache_control: no-cache"
	)
));

$responseStatus = curl_exec($ch);

curl_close($ch);

$dataStatus = json_decode($responseStatus, true);

print_r($dataStatus);

?>
