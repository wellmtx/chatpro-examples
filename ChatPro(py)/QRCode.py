from PIL import Image
import requests
from io import BytesIO

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/generate_qrcode'

headers = {
  'Authorization': "[seuToken]" ,
  'cache-control': "no-cache"
}

responseQrCode = requests.get(url, headers=headers)

infoQr = responseQrCode.json()

imgQr = infoQr['qr']

print(imgQr)
