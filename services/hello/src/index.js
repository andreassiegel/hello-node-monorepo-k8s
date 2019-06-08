import express, { Router } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(config.PORT, () => {
  console.log(`Server started on port ${config.PORT}!`);
});

// const SIGNALS = [
//   'SIGHUP',
//   'SIGINT',
//   'SIGQUIT',
//   'SIGILL',
//   'SIGTRAP',
//   'SIGABRT',
//   'SIGBUS',
//   'SIGFPE',
//   'SIGUSR1',
//   'SIGSEGV',
//   'SIGUSR2',
//   'SIGTERM',
// ];

// const terminator = (signal, callback) => {
//   console.log(`Received ${signal} - terminating server...`);
//   if (callback) {
//     callback();
//   }
//   process.exit(0);
// };

// SIGNALS.forEach((signal, index, array) => {
//   process.on(signal, () => terminator(signal, callback));
// });

export default app;
