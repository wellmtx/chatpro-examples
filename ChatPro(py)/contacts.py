
import re
import requests

url = 'https://v4.chatpro.com.br/[EndPoint]/api/v1/contacts'

headers = {
  'Authorization': "[seuToken]" ,
  'cache-control': "no-cache"
}

contactsResponse = requests.get(url, headers=headers)

contacts = contactsResponse.json()

def contactsList():
  for contact in range(len(contacts)):
    if contacts[contact]["Name"] == '':
      continue
    number = re.sub('\D', '' , contacts[contact]["Jid"])
    print( f'Nome: {contacts[contact]["Name"]}' )
    print( f'Número: {number}')


contactsList()
