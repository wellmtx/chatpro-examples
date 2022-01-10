<?php

require_once('class/requestCurl.php');

function sendMassiveMessages() 
{
    $manyContacts = array("62981554235", "62981554235");
    $mensagem = "teste";
    $sendMessages = new requestCurl();
    $sendMessages->setUrl("https://v4.chatpro.com.br/chatpro-xbcsytl3hj/api/v1/send_message");
    $sendMessages->setMethod("POST");

    foreach ($manyContacts as $key => $values) 
    {
        $sendMessages->setSend("{ \"message\": \"{$mensagem}\", \"number\": \"{$values}\"}");
        $sendMessages->request();

        sleep(5);

        echo "Mensagem " . $key + 1 . " enviada! </br>";
    }

}

sendMassiveMessages();

?>