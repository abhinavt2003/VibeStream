class ApiResponse{
    constructor(statusCode,data,message= "Success"){
        this.statusCode= statusCode
        this.data=data
        this.message= message
        this.success= statusCode < 400
    }
}

// server ka statusCode hota hai 
// statusCode Data range
// Infomational responses(100-199)
// Successful responses(200-299)
// Redirection messages(300-399)
// Client error responses(400-499)
// Server erro responses(500-599)

export { ApiResponse }