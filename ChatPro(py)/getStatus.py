import requests

url = 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/status'

headers = {
  'Authorization': "eop82iy1mdf4ohbez2wlmea7n21y4d" ,
  'cache-control': "no-cache"
}

statusResponse = requests.get(url , headers=headers)

connectionStatus = statusResponse.json()

if connectionStatus["connected"]:
  print('Você está CONECTADO!')
else:
  print('Você está DESCONECTADO!')