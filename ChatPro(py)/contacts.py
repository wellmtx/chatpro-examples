
import re
import requests

url = 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/contacts'

headers = {
  'Authorization': "eop82iy1mdf4ohbez2wlmea7n21y4d" ,
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
