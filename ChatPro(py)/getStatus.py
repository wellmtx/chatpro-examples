import requests

code = 'chatpro-xxxxxx'
token = 'token'

url = f'https://v5.chatpro.com.br/{code}/api/v1/status'

headers = {
  'Authorization': token ,
  'cache-control': "no-cache"
}

statusResponse = requests.get(url , headers=headers)

connectionStatus = statusResponse.json()

print(connectionStatus)

if connectionStatus["connected"]:
  print('Você está CONECTADO!')
else:
  print('Você está DESCONECTADO!')
