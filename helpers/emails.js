import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
   const { email, nombre, token } = datos;

   const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   });

   //Información del email

   const info = await transport.sendMail({
      from: '"Uptask - Administrador de proyectos" <info@uptask.com>',
      to: email,
      subject: "Uptask - Comprueba tu cuenta",
      text: "Comprueba tu cuenta en Uptask",
      html: `
            <p style="font-family: Arial, Helvetica, sans-serif">Hola ${nombre}, comprueba tu cuenta en Uptask</p>
            <p style="font-family: Arial, Helvetica, sans-serif">Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:</p>

            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>

            <p style="font-family: Arial, Helvetica, sans-serif">Si tu no creaste esta cuenta puedes ignorar el mensaje</p>
          
          `,
   });
};
export const emailForgotPassword = async (datos) => {
   const { email, nombre, token } = datos;

   const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   });

   //Información del email

   const info = await transport.sendMail({
      from: '"Uptask - Administrador de proyectos" <info@uptask.com>',
      to: email,
      subject: "Uptask - Restablece tu password",
      text: "Restablece tu password",
      html: `
            <p style="font-family: Arial, Helvetica, sans-serif">Hola ${nombre}, Has solicitado restablecer tu contraseña</p>
            <p style="font-family: Arial, Helvetica, sans-serif">Sigue el siguiente enlace para generar una nueva contraseña</p>
            <a href="${process.env.FRONTEND_URL}/forgot-password/${token}" style="font-family: Arial, Helvetica, sans-serif">Restablecer contraseña</a>

            <p style="font-family: Arial, Helvetica, sans-serif">Si tu no solicitaste este cambio puedes ignorar el mensaje</p>
          
          `,
   });
};
