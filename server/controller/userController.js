const sgMail = require("../libs/sendGrid");
const userValidators = require("../validators/userValidator");
const userServices = require("../services/userServices");

module.exports.registerNewUser = async (req, res, next) => {
  try {
    // const user = {
    //   userEmail: req.body.userEmail,
    // };
    console.log(req.body);

    // validate user input
    // await userValidators.validateUserRegister(user);

    // // check if user with specified email already exists in the mailing list already
    // const isUserRegistered = await userServices.isUserRegistered({
    //   table: "users",
    //   selectColumn: "user_id",
    //   filterColumn: "user_email",
    //   filterColumnValue: user.userEmail,
    // });
    // console.log({ isUserRegistered });
    // // save user details in db
    // const userSavedDetails = await userServices.saveUserDetails(user);
    // console.log({ userSavedDetails });

    // // send welcome mail to user using sendGrid
    // const msg = {
    //   to: user.userEmail,
    //   from: process.env.EMAIL, // Use the email address or domain you verified above
    //   subject: "Sending with Twilio SendGrid is Fun",
    //   text: "and easy to do anywhere, even with Node.js",
    //   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    // };

    // sgMail.sendWelcomeMail(msg);

    console.log("done");
  } catch (err) {
    console.log(err);
  }
};
