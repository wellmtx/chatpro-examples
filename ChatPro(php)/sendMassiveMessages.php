<?php

require_once('class/requestCurl.php');

$payload = json_encode(array(
    "message" => "Hello World",
    "number" => "1234567890",
));

function sendMassiveMessages() 
{
    $manyContacts = array();
    $mensagem = "teste";
    $sendMessages = new requestCurl();
    $sendMessages->setUrl("https://v5.chatpro.com.br/[EndPoint]/api/v1/send_message");
    $sendMessages->setMethod("POST");

    foreach ($manyContacts as $key => $values) 
    {
        $sendMessages->setSend($payload);
        $sendMessages->request();

        sleep(10);

        echo "Mensagem " . $key + 1 . " enviada! </br>";
    }

}

sendMassiveMessages();

?>
