
import re
import requests

code = 'chatpro-xxxxxx'
token = 'token'

url = f'https://v5.chatpro.com.br/{code}/api/v1/contacts'

headers = {
  'Authorization': token ,
  'cache-control': "no-cache"
}

contactsResponse = requests.get(url, headers=headers)

contacts = contactsResponse.json()

def contactsList():
  for contact in contacts:

    if contact["Name"] == '':
      continue
      
    number = re.sub('\D', '' , contact["Jid"])
    print( f'Nome: {contact["Name"]}' )
    print( f'Número: {number}')


contactsList()
