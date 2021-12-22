import requests

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/status'

headers = {
  'Authorization': "[seuToken]" ,
  'cache-control': "no-cache"
}

statusResponse = requests.get(url , headers=headers)

connectionStatus = statusResponse.json()

if connectionStatus["connected"]:
  print('Você está CONECTADO!')
else:
  print('Você está DESCONECTADO!')
