(function (win, doc) {
  "use strict";

  var message = (function () {
    return {
      init: function init() {
        this.initEvents();
      },

      initEvents: function initEvents() {
        this.getStatus();
        this.generateQRCode();
        setInterval(function () {
          message.generateQRCode();
        }, 15000);
        this.contacts();
        var $sendFileUrl = doc.querySelector('[data-js="sendFile"]');
        var $formSendMessage = doc.querySelector('[data-js="sendMessage"]');
        $formSendMessage.addEventListener("submit", this.sendMessage, false);
        $sendFileUrl.addEventListener("click", this.sendFile, false);
      },

      contacts: function contacts() {
        this.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/contacts",
          "GET",
          null,
          function (data) {
            message.createContacts(data);
          }
        );
      },

      sendMessage: function sendMessage(e) {
        e.preventDefault();
        var $toNumber = doc.querySelector('[data-js="getNumber"]');
        var $messageText = doc.querySelector('[data-js="mensagem"]');
        var sendTextMessage =
          '{ "message": "' +
          $messageText.value +
          '" ,"number": "' +
          $toNumber.value +
          '" }';

        message.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message",
          "POST",
          sendTextMessage,
          function (data) {
            console.log(data);
          }
        );
      },

      sendFile: function sendFile(e) {
        e.preventDefault();
        var $messageText = doc.querySelector('[data-js="mensagem"]');
        var $toNumber = doc.querySelector('[data-js="getNumber"]');
        var $contentFile = doc.querySelector('[data-js="contentUrl"]');

        var payload = {
          message: $messageText.value,
          number: $toNumber.value,
          url: $contentFile.value,
        };

        message.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/send_message_file_from_url",
          "POST",
          JSON.stringify(payload),
          function (data) {
            console.log(data.message);
          }
        );
      },

      generateQRCode: function generateQRCode() {
        this.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/generate_qrcode",
          "GET",
          null,
          function (data) {
            var qrCode = data.qr;

            var $img = doc.querySelector('[data-js="imageQR"]');
            $img.setAttribute("src", qrCode);

            var $qrCodeImage = doc.querySelector('[data-js="qrCode"]');

            $qrCodeImage.appendChild($img);
          }
        );
      },

      getStatus: function getStatus() {
        this.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/status",
          "GET",
          null,
          function (data) {
            var $span = doc.querySelector('[data-js="status"]');
            $span.textContent =
              data.connected === true ? "CONECTADO" : "DESCONECTADO";
          }
        );
      },

      reload: function reload() {
        this.requestAjax(
          "https://v4.chatpro.com.br/[EndPoint]/api/v1/reload",
          "GET",
          null,
          function (data) {
            console.log(data);
            console.log("tentativa de reconexão!!");
          }
        );
      },

      createContacts: function createContacts(data) {
        data.forEach(function (item, index) {
          if (data[index].Name !== "") {
            var name = data[index].Name;
            var number = data[index].Jid.replace(/\D/g, "");
            var fragment = doc.createDocumentFragment();
            var $li = doc.createElement("li");
            var $label = doc.createElement("label");
            var $label2 = doc.createElement("label");

            $label.textContent = name;
            $label2.textContent = number;

            $li.appendChild($label);
            $li.appendChild($label2);

            var $listContacts = doc.querySelector('[data-js="listContacts"]');

            return $listContacts.appendChild(fragment.appendChild($li));
          }
        });
      },

      requestAjax: function requestAjax(url, method, sendJSON, func) {
        var requestAPI = new XMLHttpRequest();
        requestAPI.open(method, url);
        requestAPI.setRequestHeader("Authorization", "[seuToken]");
        requestAPI.send(sendJSON);
        requestAPI.onreadystatechange = function () {
          if (requestAPI.readyState === 4) {
            var response = JSON.parse(requestAPI.responseText);
            func(response);
          }
        };
      },
    };
  })();

  message.init();
})(window, document);
