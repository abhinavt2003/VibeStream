// Rather than doing try catch and async await we directly use promises and return the response from database


// Promise.resolve(requestHandler(req, res, next)): This ensures that the requestHandler is executed and wrapped in a promise. If the requestHandler is a function that returns a promise (which is typical for async functions), it will be resolved.
// .catch((err) => next(err)): If the promise is rejected (i.e., if the requestHandler throws an error or returns a rejected promise), the error is caught and passed to the next function. This ensures that the error is handled by Express's error-handling middleware.
const asyncHandler= (requestHandler)=>{  //Promises syntax
    return (req,res,next)=>{                                    //We need to return a high order function coz it returns a function
        Promise.resolve(requestHandler(req,res,next)).       //resolve 
        catch((err)=>next(err))
    }
}

export {asyncHandler}

//async await syntax 

//Niche wli cheez kaisi likhi gyi hai uska treeka hai ye
//Higher order functions 
//Ye function ko as a parameter bhi leta hai aur return bhi krta hai
// const asyncHandler= () => {}
// const asyncHandler= (func) => {() => {}}
// const asyncHandler= (func) => async() => {}


// const asyncHandler= (fn)=> async (req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

//Ye to try catch wla hai ab hme promises se krna hai to kaise krenge