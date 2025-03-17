const axios = require('axios');

const sendEmail = async (emailData) => {
  const apiKey = '53f399503c03a0f0c540031f39522ab5-us13';
  const serverPrefix = apiKey.split('-')[1];
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/messages/send`;

  const mailchimpData = {
    message: {
      from_email: emailData.from_email,
      subject: 'Nova mensagem de contato',
      text: `Nome: ${emailData.from_name}\nEmail: ${emailData.from_email}\nTelefone: ${emailData.phone}\nMensagem: ${emailData.message}`,
      to: [
        {
          email: 'leonardo.jesus@tramar.com.br',
          type: 'to',
        },
      ],
    },
  };

  try {
    await axios.post(url, mailchimpData, {
      auth: {
        username: 'anystring',
        password: apiKey,
      },
    });
  } catch (error) {
    throw new Error('Failed to send email');
  }
};

module.exports = { sendEmail };
