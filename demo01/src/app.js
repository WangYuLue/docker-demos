const Koa = require('koa');
const Router = require('koa-router');
var cors = require('koa2-cors');

const app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = {
    status: true,
    token: 'index'
  }
});

router.get('/hello', (ctx, next) => {
  ctx.body = {
    status: true,
    token: 'hello world'
  }
});


app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)