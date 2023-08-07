const express = require('express');
const client = require('./src/elastic');
const serverConfig = require('./src/config/server-config');
const errorMiddleware = require('./src/middleware/error-middleware');
const userApiRouter = require('./src/routes/user.routes');
const app = express();
const UserModel = require('./src/elastic/models/user');

const port = 5000;

serverConfig(app);

app.use('/users', userApiRouter);

app.use(errorMiddleware);
app.listen(port, async () => {
  try {
    const res = await client.ping();
    await client.indices.create(UserModel, { ignore: [400] });
    console.log(`Server up on port: ${port}`, res);
  } catch (e) {
    console.log(e);
  }
});
