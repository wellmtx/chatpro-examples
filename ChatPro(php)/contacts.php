<?php

$url = "https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/contacts";
$ch = curl_init($url);

curl_setopt_array($ch, array(
	CURLOPT_RETURNTRANSFER => true ,
	CURLOPT_CUSTOMREQUEST => "GET" ,
	CURLOPT_HTTPHEADER => array (
		"Authorization: eop82iy1mdf4ohbez2wlmea7n21y4d",
		"cache_control: no-cache"
	)
));

$responseContacts = curl_exec($ch);

curl_close($ch);

$dataContacts = json_decode($responseContacts, true);

echo "<style>";
echo "li {";
echo "margin: 15px;";
echo "}";
echo "</style>";

function contacts($dataContacts) {

	$html = "<ul>";

foreach ($dataContacts as $infoProfile) {

if ($infoProfile['Name'] !== '') {	
	$number = preg_replace('/[^0-9]/','',$infoProfile['Jid']);

	$html .= "<li>";

	$html .= $infoProfile['Name'];

	$html .= "<br>";

	$html .= $number;

	$html .="</li>";
}

}

	$html .= "</ul>";

	return $html;

}

echo contacts($dataContacts);

?>