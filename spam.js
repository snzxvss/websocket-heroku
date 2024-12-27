import { exec } from 'child_process';

const emails = [
    'vosssanz@gmail.com',
    'sbor1193@gmail.com',
    'omarvega598@gmail.com',
    'andrespatino0845@gmail.com',
    'jarosrodriguez717@gmail.com',
    'alxs.jcc@gmail.com',
    'breynerriverar@gmail.com',
    'adolfoceraurueta@gmail.com',
    'fabian_gomez_12@hotmail.com',
    'djesusgrs@gmail.com',
    'campojesus156@gmail.com',
    'andresjesusrobles@gmail.com',
    'nunezdylan624@gmail.com',
    'jaiderr565@gmail.com',
    'jonathancantillo2@gmail.com',
    'jeyson.maranona@pca.edu.co',
    'djosue1309@gmail.com'
];

const from = 'dir_psistemas@pca.edu.co';
const subject = 'COLEEE NO ME RESPONDAS ESTE CORREO';
const message = 'Habla mani, te escribo para decirte que te ganaste un petuche, mándate una capturita de este mensaje ahí al grupo ese de WhatsApp y que “PCA (D. SOFTWARE)💥” para reclamarlo\n\nNO ME RESPONDAS EL CORREO PA’🙏';

const sendEmail = (to) => {
    const cmd = `/root/swaks --auth --server smtp.mailgun.org --port 587 --au send@alchoke.systems --ap sanzvoss --from "${from}" --to "${to}" --h-Subject: "${subject}" --h-From: "<${from}>" --body "${message}"`;

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