# 这是一个koa2工程脚手架项目，完善中

# 目录结构
-middlleware中的index.js综合了所有中间件：

 - mi-http-error: 错误处理
 - mi-log: 日志
 - mi-rule: 自动读取项目文件，并在app中进行绑定；如`app.controller.home.index`其实指controller/home.js中的index对象。这样是非常方便的，只需要在相应文件夹下写就行了
 - mi-send: 规定返回格式为json
- 