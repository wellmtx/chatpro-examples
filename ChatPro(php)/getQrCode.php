<?php 

$ch = curl_init();

curl_setopt_array($ch, array(
	CURLOPT_URL => 'https://v4.chatpro.com.br/[endPoint]/api/v1/generate_qrcode' ,
	CURLOPT_CUSTOMREQUEST => 'GET' ,
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_HTTPHEADER => array(
		"Authorization: [seuToken]" ,
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
