const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendWelcomeMail = (msg) => {
  return sgMail.send(msg).then(
    (result) => {
      console.log("mail sent to user", result);
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
