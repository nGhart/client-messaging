var axios = require("axios");

function sendMessage(data) {
  var config = {
    method: "post",
    url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config);
}

// function getTextMessageInput(recipient, text) {
//   return JSON.stringify({
//     messaging_product: "whatsapp",
//     preview_url: false,
//     recipient_type: "individual",
//     to: recipient,
//     type: "text",
//     text: {
//       body: text,
//     },
//   });
// }
function getTextMessageInput(recipient) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    preview_url: false,
    recipient_type: "individual",
    to: recipient,
    type: "text",
    text: {
      body: "Welcome to our store",
    },
  });
}

function getTemplatedMessageInput(recipient, good) {
  return JSON.stringify({
    messaging_product: "whatsapp",
    to: recipient,
    type: "template",
    template: {
      name: "cart",
      language: {
        code: "en_US",
      },
      components: [
        {
          type: "header",
          parameters: [
            {
              type: "image",
              image: {
                link: good.img,
              },
            },
          ],
        },
        {
          type: "body",
          parameters: [
            {
              type: "text",
              text: good.title,
            },

            {
              type: "text",
              text: good.price,
            },
            {
              type: "text",
              text: good.category,
            },
          ],
        },
      ],
    },
  });
}

module.exports = {
  sendMessage: sendMessage,
  getTextMessageInput: getTextMessageInput,
  getTemplatedMessageInput: getTemplatedMessageInput,
};
