import requests
sendToNumber = str(input('Número do destinatário: '))

textMessage = str(input('Escreva sua mensagem: '))

url = 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/send_message'

messageLoad = '{ "menssage": "' + textMessage + '" , "number": "' + sendToNumber + '" }'

headers = {
  'Authorization': "eop82iy1mdf4ohbez2wlmea7n21y4d" ,
  'cache-control': "no-cache"
}

response = requests.request("POST", url , data=messageLoad, headers=headers)

infoMessage = response.json()

print(infoMessage)