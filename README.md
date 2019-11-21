<a  href="https://www.twilio.com">
<img  src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg"  alt="Twilio"  width="250"  />
</a>
 
# Appointment Reminders
  
## About  
[![Build
Status](https://travis-ci.org/TwilioDevEd/appointment-reminders-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/appointment-reminders-node)

Appointment reminders allow you to automate the process of reaching out to your customers in advance for an upcoming appointment. In this sample, you'll learn how to use Twilio to create automatic appointment reminders for your business users. Use appointment reminders to reduce no-shows and ensure customers have everything they need in advance of an appointment. Whether you're a dentist, doctor, cable company, or car repair shop, you can use automated appointment reminders to save time and money.

This sample includes the code required to implement an appointment reminder web application and scheduling job.

Implementations in other languages:


| .net| java | python | php |
| :----- | :----- | :----- | :----- |

### How it works
**TODO: UML Diagram**

We can render UML diagrams using [Mermaid](https://mermaidjs.github.io/).

**TODO: Describe how it works**


## Features
* Receive notifications using [Programmable SMS]([https://www.twilio.com/sms](https://www.twilio.com/sms)) .
* User interface to create reminders.
* Small JSON database using [lowdb]([https://github.com/typicode/lowdb](https://github.com/typicode/lowdb)).
* Execute reminders on a schedule using [node-cron](https://github.com/kelektiv/node-cron).

## Set up

### Requirements
-   [Node.js](https://nodejs.org/)
-   A Twilio account -  [sign up](https://www.twilio.com/try-twilio)

### Twilio Account Settings
This application should give you a ready-made starting point for writing your
own appointment reminder application. Before we begin, we need to collect
all the config values we need to run the application:

| Config&nbsp;Value  | Description |
| :-------------  |:------------- |
Account&nbsp;Sid| Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).
Auth&nbsp;Token | Used to authenticate - [just like the above, you'll find this here](https://www.twilio.com/console).
Phone&nbsp;number | A Twilio phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) - you can [get one here](https://www.twilio.com/console/phone-numbers/incoming)

### Local development
  After the above requirements have been met:

1. Clone this repository and `cd` into it

```bash
git clone git@github.com:twilio-labs/sample-appointment-reminders-node.git
cd sample-appointment-reminders-node
``` 
2. Install dependencies
```bash
npm install
```

3. Set your environment variables 
```bash
npx configure-env
``` 
See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Run the application
```bash
npm start
```
Alternatively you can use this command to start the server in development mode. It will reload whenever you change any files.
```bash
npm run dev
```

5. Navigate to [http://localhost:3000](http://localhost:3000)

That's it!

### Tests
You can run the tests locally by typing:

```bash
npm test
```

### Cloud deployment
**TODO**

## Resources
* [Appointment reminders tutorial](https://www.twilio.com/docs/tutorials/walkthrough/appointment-reminders/node/express)
* [Build appointment reminders in Studio (Video)](https://www.youtube.com/watch?v=vl0FbbZBADQ)
* [Appointment reminders glossary][https://www.twilio.com/docs/glossary/appointment-reminders]

## Disclaimer

-  [MIT License](http://www.opensource.org/licenses/mit-license.html)
- No warranty expressed or implied. Software is as is.
