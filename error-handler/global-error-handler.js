globalErrorHandler = (error,req,res,next)=>{

res.status(error.code);
res.status(error.message);
}


module.exports = globalErrorHandler