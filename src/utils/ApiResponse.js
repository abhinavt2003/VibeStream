// We dont use core Node.js for req,res , we are using express for that so we have to make our own class for response

class ApiResponse{
    constructor(
        statusCode,
        data,
        message= "Success"
    )
    //Now overwrite
    {
        this.statusCode= statusCode
        this.data=data
        this.message= message
        this.success= statusCode < 400   //Statuscodes should be less than 400
    }
}

// Every company have different statusCodes
// Standard Status codes

// server ka statusCode hota hai 
// statusCode Data range
// Infomational responses(100-199)
// Successful responses(200-299)
// Redirection messages(300-399)
// Client error responses(400-499)
// Server error responses(500-599)

export { ApiResponse }