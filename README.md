<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Appointment Reminders. Powered by Twilio - Node.js/Express

[![Build
Status](https://travis-ci.org/TwilioDevEd/appointment-reminders-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/appointment-reminders-node)

Use Twilio to create automatic appointment reminders for your business users. For a step-by-step tutorial see [twilio docs](https://www.twilio.com/docs/tutorials/walkthrough/appointment-reminders/node/express).

## Local development

First you need to install [Node.js](http://nodejs.org/).

To run the app locally:

1. Clone this repository and `cd` into it

   ```bash
   git clone git@github.com:twilio-labs/sample-appointment-reminders-node.git

   cd sample-appointment-reminders-node
   ```

1. Install dependencies

   ```bash
   npm install
   ```

1. Copy the sample configuration file and edit it to match your configuration

   ```bash
   cp .env.example .env
   ```

   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your
   [Twilio Account Settings](https://www.twilio.com/console).
   You will also need a `TWILIO_PHONE_NUMBER`, which you may find [here](https://www.twilio.com/console/phone-numbers/incoming).

   Run `source .env` to export the environment variables

1. Run the application

   ```bash
   npm start
   ```

   Alternatively you can use this command to start the server in development mode.
   It will reload whenever you change any files.

   ```bash
   npm run dev
   ```

1. Check it out at [http://localhost:3000](http://localhost:3000)

That's it

## Run the tests

You can run the tests locally by typing

```bash
npm test
```

## Meta

- No warranty expressed or implied. Software is as is. Diggity.
- [MIT License](http://www.opensource.org/licenses/mit-license.html)
- Lovingly crafted by Twilio Developer Education.
