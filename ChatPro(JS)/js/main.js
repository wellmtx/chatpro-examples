(function(win, doc) {
	'use strict'

	var message = (function() {
		return {

			init: function init() {
				this.initEvents();
			} ,

			initEvents: function initEvents() {
				this.getStatus();
				this.generateQRCode();
				this.contacts();
				var $sendFileUrl = doc.querySelector('[data-js="sendFile"]')
				var $formSendMessage = doc.querySelector('[data-js="sendMessage"]');
				$formSendMessage.addEventListener('submit', this.sendMessage, false);
				$sendFileUrl.addEventListener('click', this.sendFile, false)
			} ,

			contacts: function contacts() {
				var contacts = new XMLHttpRequest();
				contacts.open('GET' , 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/contacts');
				contacts.setRequestHeader('Authorization', 'eop82iy1mdf4ohbez2wlmea7n21y4d');
				contacts.send();
				console.log('carregando lista de contatos...');
				contacts.onreadystatechange = function() {
					if(contacts.readyState === 4 && contacts.status === 200){
						var data = JSON.parse(contacts.responseText);
						message.createContacts(data);
					}
				}
			} ,

			sendMessage: function sendMessage(e) {
				e.preventDefault();
				var $toNumber = doc.querySelector('[data-js="getNumber"]')
				var $messageText = doc.querySelector('[data-js="mensagem"]')
				var sendTextMessage = '{ "message": "' + $messageText.value + '" ,"number": "' + $toNumber.value + '" }'
				var sendMessage = new XMLHttpRequest();
				sendMessage.open('POST' , 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/send_message');
				sendMessage.setRequestHeader('Authorization', 'eop82iy1mdf4ohbez2wlmea7n21y4d');
				sendMessage.setRequestHeader('Content-Type', 'application/json');
				sendMessage.send(sendTextMessage);
				sendMessage.onreadystatechange = function() {
					if(sendMessage.readyState === 4)
						var dataMessage = JSON.parse(sendMessage.responseText)
						console.log(dataMessage.message)		
				}
			} ,

			sendFile: function sendFile(e) {
				e.preventDefault();
				var $messageText = doc.querySelector('[data-js="mensagem"]')
				var $toNumber = doc.querySelector('[data-js="getNumber"]')
				var $contentFile = doc.querySelector('[data-js="contentUrl"]')
				var sendContentFile = '{ "caption": "' + $messageText.value + '" , "number": "' + $toNumber.value + '" , "url": "' + $contentFile.value + '" }'
				var file = new XMLHttpRequest();
				file.open('POST' , 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/send_message_file_from_url')
				file.setRequestHeader('Authorization', 'eop82iy1mdf4ohbez2wlmea7n21y4d');
				file.setRequestHeader('Content-Type', 'application/json');
				file.send(sendContentFile)
				file.onreadystatechange = function() {
					if(file.readyState === 4)
						var dataFile = JSON.parse(file.responseText);
						console.log(dataFile)
				}
			} ,

			generateQRCode: function generateQRCode() {
				var qrCode = new XMLHttpRequest();
				qrCode.open('GET' , 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/generate_qrcode?webhook=https%3A%2F%2Fwebhook.site%2Fc08c37b6-a2e1-4dd9-8ef2-d1d2ce0889d2')
				qrCode.setRequestHeader('Authorization', 'eop82iy1mdf4ohbez2wlmea7n21y4d');
				qrCode.send();
				qrCode.onreadystatechange = function() {
					if(qrCode.readyState === 4 && qrCode.status ===  200) {
						var dataQrCode = JSON.parse(qrCode.responseText);
						var $qr = dataQrCode.qr
						var $img = doc.createElement('img');
						$img.setAttribute('src' , $qr);

						var $qrCodeImage = doc.querySelector('[data-js="qrCode"]')

						$qrCodeImage.appendChild($img);
					}
				}
			} ,

			getStatus: function getStatus() {
				var getStatus = new XMLHttpRequest();
				getStatus.open('GET' , 'https://v4.chatpro.com.br/chatpro-qpebpshq56/api/v1/status')
				getStatus.setRequestHeader('Authorization', 'eop82iy1mdf4ohbez2wlmea7n21y4d');
				getStatus.send();
				getStatus.onreadystatechange = function() {
					if(getStatus.readyState === 4) {
						var dataStatus = JSON.parse(getStatus.responseText)
						var $span = doc.querySelector('[data-js="status"]')
						$span.textContent = dataStatus.connected === true ? 'CONECTADO' : 'DESCONECTADO'
					}
				}
			} ,

			createContacts: function createContacts(data) {
				data.forEach(function(item, index) {
					if (data[index].Name !== '') {
					var name = data[index].Name;
					var number = data[index].Jid.replace(/\D/g, '');
					var fragment = doc.createDocumentFragment();
					var $li = doc.createElement('li');
					var $label = doc.createElement('label');
					var $label2 = doc.createElement('label');

					$label.textContent = name;
					$label2.textContent = number;

					$li.appendChild($label);
					$li.appendChild($label2);

					var $listContacts = doc.querySelector('[data-js="listContacts"]')

					return $listContacts.appendChild(fragment.appendChild($li));
				}
				})
			}



		}
	})();

	message.init();

})(window, document);