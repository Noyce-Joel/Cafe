import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL ?? 'noyce.joel@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'tarquin.nimrod.mid@gmail.com';

export default async (req, res) => {
    const { email, message, firstName, lastName, regarding } = req.body;
    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: 'Mail from ' + firstName + ' ' + lastName + ' Email: ' + email,
        text: 'Regarding: ' + regarding + '  --  ' + message,
       
    };
    try {
        await sgMail.send(msg);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
};
