import requests
from json import dumps

sendToNumber = 'Número de destino'

textMessage = 'Mensagem'

code = 'chatpro-xxxxxx'
token = 'token'

url = f'https://v5.chatpro.com.br/{code}/api/v1/send_message'

payload = {
  "message": textMessage,
  "number": sendToNumber
}

headers = {
  'Authorization': token,
  'Content-Type': "application/json",
  'cache-control': "no-cache"
}

response = requests.request("POST", url, data=dumps(payload), headers=headers)

infoMessage = response.json()

print(infoMessage)
