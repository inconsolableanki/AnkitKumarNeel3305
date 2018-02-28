const Express = require('express')
const bodyParser = require('body-parser')
const routerIndex = require('./routes/index')




const app = Express();


app.use(routerIndex)
app.use(bodyParser.json())
app.get("/",(req,res,next)=>{

    res.send("HELLO WORLD")
})

app.listen(3000,()=>{

    console.log("server is running") // these are all use cases. express must follow the order
}) 
