const Express = require('express')

var app = Express();

app.listen(3000,()=>{

    console.log("server is running") // these are all use cases. express must follow the order
}) 

app.get('/',(req,res,next)=>{

    res.send("ankit is running express")
})
app.put('/',(req,res,next)=>{

    res.send("put is wroking perfectly")
})

app.post('/',(req,res,next)=>{

    res.send("post is working perfectly")

})

app.delete('/',(req,res,next)=>{
    res.send("delete is working perfectly")
})