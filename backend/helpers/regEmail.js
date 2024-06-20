const nodemailer = require("nodemailer");

async function regEmail(email, otp, token, name) {
  const verifyLink = `${process.env.BASE_URL}/token/${token}`;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "addme4et@gmail.com",
      pass: "nbcpbgotfbzjjarw",
    },
  });
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Social Media" <addme4et@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Verify Your Account", // Subject line
    html: `
    <div style="display:flex;justify-content:center;align-items:center">
    <div style="text-align:center">
    <h6 style="font-size:28px;color:#1a2130;margin:0">Thanks for Registration, ${name} !</h6>
    <p style="color:#373a40;margin:10px auto">Please verify your email address to get touch with thousands of friends & familly.</p>
    <p style="color:#ff7f3e">Thank You!</p>
    <div>
    <p style="margin:10px auto">Below is your one time OTP:</p>
    <p style="font-size:30px;letter-spacing:5px;font-weight:800;margin:0">${otp}</p>
    <p style="margin:30px auto">Or</p>
    </div>
    <a href=${verifyLink} style="background-color:#e88d67;color:#fdffe2;padding:10px 15px;border-radius:5px;outline:0;border:0;text-decoration:none;text-transform:uppercase" onMouseOver="this.style.background='#373A40'" onMouseLeave="this.style.background='#E88D67'">Verify Email Now</a>
    <p style="color:#686d76;font-size:12px;margin-top:20px">Note: Please verify within 05 minutes</p>
    <p style="font-style:italic;color:#555555">If you didn't create an account in Social Media, please ignore this message.</p>
    </div>
    </div>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = regEmail;
