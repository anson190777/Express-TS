import app from './app';
import { APP_PORT } from './utils/secret';

app
  .listen(APP_PORT, () => {
    console.log(`server running on port : ${APP_PORT}`);
  })
  .on('error', (e) => {
      console.error(`ERROR: ${e}`);
  });
