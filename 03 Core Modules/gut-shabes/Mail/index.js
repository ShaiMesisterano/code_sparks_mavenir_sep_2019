const username = require('./username');
const password = require('./password');

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

class Mail {
    constructor(service, port, userName, password, to, subject, cc) {
        this.className = "Mail";
        this.options = {
            user: {
                service,
                port,
                name: userName,
                pass: password
            },
            mail: {
                from: userName,
                to,
                cc,
                subject
            }
        }
    }

    send(body) {
        nodemailer.createTestAccount((err, account) => {
            const { from, to, cc, subject} = this.options.mail;
            const {service, port, name, pass} = this.options.user;
            let transporter = nodemailer.createTransport(
                smtpTransport({
                    host: service,
                    port: port,
                    auth: {
                        user: name,
                        pass: pass
                    }
                })
            );
            let mailOptions = {
                from,
                to,
                cc,
                subject,
                text: body,
                html: body
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) console.log(`${this.className}: ${JSON.stringify(error)}`);
                console.log(`
                    ${this.className}: Message Sent: ${info.messageId}\nPreview URL: ${nodemailer.getTestMessageUrl(info)}
                `);

                return info.messageId;
            })
        })
    }
}

module.exports = {
    Mail,
    username,
    password
};