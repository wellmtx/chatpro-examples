import requests
from json import dumps

number = str(input('Qual o número do destinatário ? '))
fileName = str(input('Qual o nome do arquivo ? '))
fileUrl = str(input('Qual o link do arquivo ? '))

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message_file_from_url'

headers = {
  'Authorization': "[seuToken]" ,
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
