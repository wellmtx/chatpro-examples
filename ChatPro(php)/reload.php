<?php 

require_once("class/requestCurl.php");

function status() 
{
    $getStatus = new requestCurl();
    $getStatus->setUrl("https://v4.chatpro.com.br/[EndPoint]/api/v1/status");
    $getStatus->setMethod("GET");
    $statusConnection = $getStatus->request();
    return $statusConnection["connected"];
}

function reload() 
{
    $reload = new requestCurl();
    $reload->setUrl("https://v4.chatpro.com.br/[EndPoint]/api/v1/reload");
    $reload->setMethod("GET");
    $reload->request();

    echo "Reconectando";
}

status() === true ? "Você já está conectado" : reload();

?>
