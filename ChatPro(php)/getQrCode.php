<?php 

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/generate_qrcode?webhook=https%3A%2F%2Fwebhook.site%2Fc08c37b6-a2e1-4dd9-8ef2-d1d2ce0889d2' ,
	CURLOPT_CUSTOMREQUEST => 'GET' ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_HTTPHEADER => array(
		"Authorization: eop82iy1mdf4ohbez2wlmea7n21y4d" ,
		"cache_control: no-cache"
	)
));

$responseQr = curl_exec($ch);

curl_close($ch);

$dataQr = json_decode($responseQr, true);

$imgQr = $dataQr['qr'];

echo "<style>";
echo "img {";
echo "width: 400px;";
echo "</style>";
echo "<img src=$imgQr>";

?>