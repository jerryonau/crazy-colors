const mode=process.env.MODE||process.env.NODE_ENV||"development",config=require("production"===mode?"./prod":"./dev"),nav=require("./modules/nav");module.exports={...config,nav:nav};