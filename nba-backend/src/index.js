require('dotenv').config();

const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 8000;

app.use((ctx) => {
  ctx.body = 'Hello world!';
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
