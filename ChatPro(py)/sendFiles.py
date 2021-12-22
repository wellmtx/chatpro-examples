import requests

number = str(input('Qual o número do destinatário ? '))
fileName = str(input('Qual o nome do arquivo ? '))
fileUrl = str(input('Qual o link do arquivo ? '))

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message_file_from_url'

headers = {
  'Authorization': "[seuToken]" ,
  'cache-control': "no-cache"
}

sendData = '{ "caption": "' + fileName + '" , "number": "' + number + '" , "url": "' + fileUrl + '" }'

responseFile = requests.request("POST", url, data=sendData , headers=headers)

print(responseFile)
