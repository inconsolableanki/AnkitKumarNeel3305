const Express = require('express')
const bodyParser = require('body-parser')
const routerIndex = require('./routes/index')
const config = require('config')
const gobleErrorHandler = require("./error-handler/global-error-handler")
const cors = require("cors");


let hostConfig = config.get('appConfig.hostConfig')


const PORT = hostConfig.port || 3600;

const app = Express();


app.use(routerIndex)
app.use(bodyParser.json())
app.use(cors)
app.use(gobleErrorHandler)
app.get("/",(req,res,next)=>{
throw err;

//    res.send("HELLO WORLD")
})

app.listen(PORT,()=>{

    console.log("server is running"+ PORT) // these are all use cases. express must follow the order
}) 
