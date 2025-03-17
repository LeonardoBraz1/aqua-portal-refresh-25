
import emailjs from 'emailjs-com';

// Initialize emailjs with your credentials
const SERVICE_ID = 'service_3gldyxp';  // Updated service ID
const TEMPLATE_ID = 'template_47w0y7q';
const USER_ID = 'yP8sGnvYcxXTAQJMP';

interface EmailData {
  to_email: string;
  from_name: string;
  from_email: string;
  phone?: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<any> => {
  try {
    const templateParams = {
      to_email: data.to_email,
      from_name: data.from_name,
      from_email: data.from_email,
      phone: data.phone || 'Não informado',
      message: data.message,
    };

    emailjs.init(USER_ID);
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
