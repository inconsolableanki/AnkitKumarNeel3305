const Express = require('express')

var app = Express();

let middleware=(req,res,next)=>{

    console.log("Middleware is running Successfully ")
    //console.log(req)
    let auth = req.headers['authorization'] // when u open arc then u check hearder option there is type autherization
    console.log("auth is ",auth) // this line with print the token 
    next();
}
app.use('/admin',middleware)


app.get('/user/id',(req,res,next)=>{

    console.log("user id is call")
    res.send("this is user id section")
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

app.listen(3000,()=>{

    console.log("server is running") // these are all use cases. express must follow the order
}) 
