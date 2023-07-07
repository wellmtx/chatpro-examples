import requests
from json import dumps

number = 'Número de destino'
fileName = 'nome da imagem'
fileUrl = 'https://urlimagem/imagem.png'

code = 'chatpro-xxxxxx'
token = 'token'

url = f'https://v5.chatpro.com.br/{code}/api/v1/send_message_file_from_url'

headers = {
  'Authorization': token,
  'Content-Type': 'application/json',
  'cache-control': "no-cache"
}

payload = {
  "caption": fileName,
  "number": number,
  "url": url,
}

responseFile = requests.request("POST", url, data=dumps(payload) , headers=headers)

print(responseFile)
