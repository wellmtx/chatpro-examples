<?php

require_once('class/requestCurl.php');

function sendMassiveMessages() 
{
    $manyContacts = array();
    $mensagem = "teste";
    $sendMessages = new requestCurl();
    $sendMessages->setUrl("https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message");
    $sendMessages->setMethod("POST");

    foreach ($manyContacts as $key => $values) 
    {
        $sendMessages->setSend("{ \"message\": \"{$mensagem}\", \"number\": \"{$values}\"}");
        $sendMessages->request();

        sleep(10);

        echo "Mensagem " . $key + 1 . " enviada! </br>";
    }

}

sendMassiveMessages();

?>
