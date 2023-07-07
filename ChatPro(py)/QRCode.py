import requests

code = 'chatpro-xxxxxx'
token = 'token'

url = f'https://v5.chatpro.com.br/{code}/api/v1/generate_qrcode'

headers = {
  'Authorization': token ,
  'cache-control': "no-cache"
}

responseQrCode = requests.get(url, headers=headers)

infoQr = responseQrCode.json()

print(infoQr)
