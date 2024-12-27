import { exec } from 'child_process';

const emails = [
    'vosssanz@gmail.com',
    'rootsnzv@gmail.com'
    // Agrega más correos
];

// Parámetros del correo
const from = 'test@camilosanz.tech';
const subject = 'Asunto del Correo';
const message = 'Este es el cuerpo del mensaje que se enviará a través de swaks.';

const sendEmail = (to) => {
    const cmd = `/swaks --auth --server smtp.mailgun.org --port 587 --au test@camilosanz.tech --ap sanzvoss --from "${from}" --to "${to}" --h-Subject: "${subject}" --h-From: "<${from}>" --body "${message}"`;

    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al enviar a ${to}: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr al enviar a ${to}: ${stderr}`);
            return;
        }
        console.log(`Correo enviado exitosamente a ${to}:\n${stdout}`);
    });
};

emails.forEach((email) => {
    sendEmail(email);
});