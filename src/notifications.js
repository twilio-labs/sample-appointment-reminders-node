const moment = require('moment');
const twilio = require('twilio');
const { Appointment } = require('./db');
const cfg = require('./config');

const client = twilio(cfg.twilioAccountSid, cfg.twilioAuthToken);

/**
 * Checks if the distance between the current time and the time of the
 * appointment is the same as the specified notification range
 *
 * @param {*} appointment an appointment instance
 * @param {*} currentTime the current time stamp
 * @return {boolean} true if the distance is the same, false otherwise
 */
function requiresNotification(appointment, currentTime) {
  return (
    Math.round(
      moment
        .duration(
          moment(appointment.time)
            .tz(appointment.timeZone)
            .utc()
            .diff(moment(currentTime).utc())
        )
        .asMinutes()
    ) === appointment.notification
  );
}

/**
 * Sends an SMS to the specified phone number in an appointment
 *
 * @param {*} appointment
 */
async function sendNotification(appointment) {
  // Create options to send the message
  const options = {
    to: `+ ${appointment.phoneNumber}`,
    from: cfg.twilioPhoneNumber,
    /* eslint-disable max-len */
    body: `Hi ${appointment.name}. Just a reminder that you have an appointment coming up.`,
    /* eslint-enable max-len */
  };

  // Send the message!
  try {
    client.messages.create(options);
    // Log the last few digits of a phone number
    let masked = appointment.phoneNumber.substr(
      0,
      appointment.phoneNumber.length - 5
    );
    masked += '*****';
    console.log(`Message sent to ${masked}`);
  } catch (err) {
    // Just log it for now
    console.error(err);
  }
}

/**
 * Searches for all notifications that are due in this minute and triggers
 * notifications for them
 *
 * @param {Date} currentTime the current time to base the notifications on
 */
async function checkAndSendNecessaryNotifications(currentTime) {
  const appointments = await Appointment.find();

  const appointmentsRequiringNotification = appointments.filter(appointment => {
    return requiresNotification(appointment, currentTime);
  });

  console.log(
    `Sending ${appointmentsRequiringNotification.length} notifications`
  );

  // Sending all notifications.
  // We'll not wait for success/failure before finishing this function.
  // They are queued in the background.
  appointmentsRequiringNotification.forEach(sendNotification);
}

module.exports = {
  checkAndSendNecessaryNotifications,
};
