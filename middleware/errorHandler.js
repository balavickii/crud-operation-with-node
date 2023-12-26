
const {constants}=require("../constants")


const errorHandler= (err,req,res,next) => { 
    const statusCode=res.statusCode ? res.statusCode : 500

   switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({
        Title:"Validation Failed",
        message:err.message,
        stackTrace: err.stack
    })
        break;
    case constants.NOT_FOUND:
        res.json({
            Title:"Not found",
            message:err.message,
            stackTrace: err.stack
        })
        break;

        case constants.UNAUTHORIZED:
            res.json({
                Title:"Un Authorized",
                message:err.message,
                stackTrace: err.stack
            })
            break;   

        case constants.FORBIDDEN:
            res.json({
            Title:"For bidden",
            message:err.message,
            stackTrace: err.stack
        })
        break; 

        case constants.SERVER_ERROR:
            res.json({
            Title:"server error",
            message:err.message,
            stackTrace: err.stack
        })
        break; 
    default:
        console.log("Everthing is fine")
        break;
   } 
    
}


module.exports=errorHandler