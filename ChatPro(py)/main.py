import getStatus

if getStatus.connectionStatus["connected"]:
  print('Se você quer enviar uma mensagem digite "1"')
  print('Se você quer enviar um arquivo digite "2"')
  print('Se você quer ver sua lista de contatos digite "3"')

  resposta = int(input('Qual sua opção ? '))

  if resposta == 1:
    import sendMessage
  elif resposta == 2:
    import sendFiles
  elif resposta == 3:
    import contacts
  else:
    print('Essa opção não existe!!')

else:
  print('Conecte-se usando o QrCode!')
  import QRCode