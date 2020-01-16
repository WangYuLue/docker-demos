const Koa = require('koa');
const Router = require('koa-router');
var cors = require('koa2-cors');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  port: 3306
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query('show databases;', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

function getData() {
  return new Promise((res, rej) => {
    con.query('show databases;', function (error, results, fields) {
      if (error) {
        rej(error);
      };
      res(results)
    });
  })

}

const app = new Koa();
var router = new Router({
  prefix: '/api',
});

router.get('/', (ctx, next) => {
  ctx.body = {
    status: true,
    token: 'index'
  }
});

router.get('/hello', async (ctx, next) => {
  const results = await getData();
  console.log('response')
  ctx.body = {
    status: true,
    token: results
  }
});


app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)