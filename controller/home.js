const HomeService = require('../service/home')
module.exports = {
    index: async(ctx, next) => { 
     const newUser = new  ctx.models.User({userName:"aaa"})
    await newUser.save(function(err,returnObj){
      if (err) return console.error(err);
      ctx.response.body = `<h1>index page ${returnObj.userName}</h1>`
     })
   
    },
    home: async(ctx, next) => {
      await ctx.render('home/home',{
        title:'home'
      })
    },
    homeParams: async(ctx, next) => {
      console.log(ctx.params)
      ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async(ctx, next) => {
      await ctx.render('home/login',{
        btnName:'登录'
      })
    },
    register: async(ctx, next) => {
      let {name,password} = ctx.request.body
      let data = await HomeService.register(name,password)
      ctx.body = data
    }
  }