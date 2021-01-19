
const Koa = require('koa');
 const app = new Koa()
 const Router = require('koa-router');

const router = new Router()

router.get('/',ctx=>{
    console.log(ctx)
    ctx.body = 'HELLO WORLD'
})
 
router.get('/api',ctx=>{
    console.log(ctx)
    ctx.body = 'HELLO KOA'
})

router.get('/async',async (ctx)=>{
    let result = await new Promise((resolve)=>{
        setTimeout(() => {
            resolve('hello worlld 2s later')
        }, 2000);
    })
    ctx.body = result
})

//  app.use(async ctx=>{
//      console.log(ctx.request)
//      ctx.body = 'Hello Koa'

//  })

app.use(router.routes()).use(router.allowedMethods())

 app.listen(3000)