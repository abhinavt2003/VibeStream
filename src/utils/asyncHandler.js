const asyncHandler= (requestHandler)=>{  //Promises syntax
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}

//async await syntax 

//Niche wli cheez kaisi likhi gyi hai uska treeka hai ye
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