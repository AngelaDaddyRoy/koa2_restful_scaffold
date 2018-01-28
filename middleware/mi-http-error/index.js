module.exports = () => {
    let fileName = 'other'
    return async (ctx, next) => {
      try {
         await next();
         /**
          * 如果没有更改过 response 的 status，则 koa 默认的 status 是 404 
          */
         if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404);
      } catch (e) {
        let status = parseInt(e.status)
        // 默认错误信息为 error 对象上携带的 message
        const message = e.message
  
        // 对 status 进行处理，指定错误页面文件名 
        if(status >= 400){
          switch(status){
            case 400:
            ctx.body = '错误请求'
            case 404:
            ctx.body = '未找到资源或页面'
            case 500:
            ctx.body = '服务器内部错误'
              break;
            // 其它错误 指定渲染 other 文件
            default:
                ctx.body = '位置错误'
          }
        }
      }
    }
  }