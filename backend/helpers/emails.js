
import nodemailer from "nodemailer"

export const emailRegister = async (data) => {
    const {email, name, token} = data
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });


    const info = await transport.sendMail({
        from: '"Restaurant Ordering App" <account@roa.com>',
        to: email,
        subject: "Confirm your account",
        text: "Please, Confirm your account in Restaurant Ordering App",
        html: `<p>Hello: ${name} Confirm your account</p>
        <p>Your account is almost already, confirm your account in this link: </p>
        <a href="${process.env.FRONTEND_URL}/confirm/${token}">Confirm your account</a>

        <p>If you didn't create this account, ignore this message</p>
        `
    })
}


export const emailForgotPassword = async (data) => {
    const {email, name, token} = data
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });


    const info = await transport.sendMail({
        from: '"Restaurant Ordering App" <account@roa.com>',
        to: email,
        subject: "Reset your password",
        text: "Reset your password on Restaurant Ordering App",
        html: `<p>Hello: ${name} Reset your password</p>
        <p>Reset your password in this link: </p>
        <a href="${process.env.FRONTEND_URL}/forgot-password/${token}">Reset Password</a>

        <p>If you didn't request that, ignore this message</p>
        `
    })
}

