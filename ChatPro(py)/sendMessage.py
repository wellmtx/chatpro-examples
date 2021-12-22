import requests
sendToNumber = str(input('Número do destinatário: '))

textMessage = str(input('Escreva sua mensagem: '))

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message'

messageLoad = '{ "menssage": "' + textMessage + '" , "number": "' + sendToNumber + '" }'

headers = {
  'Authorization': "[seuToken]" ,
  'cache-control': "no-cache"
}

response = requests.request("POST", url , data=messageLoad, headers=headers)

infoMessage = response.json()

print(infoMessage)
