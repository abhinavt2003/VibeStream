class ApiError extends Error{      // I am using Error class from Node.js Error handling options provided by Node.js . Read documentation
    constructor( 
        statusCode,
        message= "Something went wrong",
        errors= [],
        stack= ""
    ){
        //Now overwrite constructors
        super(message)
        this.statusCode= statusCode
        this.data= null
        this.message= message
        this.success= false
        this.errors= errors

        if(stack){   //Stack ko trace krte hai production me 
            this.stack= stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}


