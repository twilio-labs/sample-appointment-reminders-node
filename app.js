const scheduler = require('./src/scheduler');
const cfg = require('./src/config');
const server = require('./server');

scheduler.start();
server.listen(cfg.port, function() {
  console.log(
    `Starting sample-appointment-reminders at http://localhost:${cfg.port}`
  );
});
