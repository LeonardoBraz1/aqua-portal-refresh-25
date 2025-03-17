
import emailjs from 'emailjs-com';

// Initialize emailjs with your credentials
// You'll need to get these from the EmailJS dashboard
const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const USER_ID = 'your_user_id';

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

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      USER_ID
    );
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
