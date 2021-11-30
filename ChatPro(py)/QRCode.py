from PIL import Image
import requests
from io import BytesIO

url = 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/generate_qrcode?webhook=https%3A%2F%2Fwebhook.site%2Fc08c37b6-a2e1-4dd9-8ef2-d1d2ce0889d2'

headers = {
  'Authorization': "eop82iy1mdf4ohbez2wlmea7n21y4d" ,
  'cache-control': "no-cache"
}

responseQrCode = requests.get(url, headers=headers)

infoQr = responseQrCode.json()

imgQr = infoQr['qr']

print(imgQr)