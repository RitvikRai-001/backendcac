// helper file



const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }

}
export {asyncHandler}

// const async=()=>{}
// const async=(func) => ()=>{}


// const asyncHandler=(fn) => async (req,res,next)=>{
//     try{
//         await fn(req,res,next)

//     }
//     catch(error){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }


// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Promise states

// Pending — initial state, not settled.

// Fulfilled — operation finished successfully, promise has a value.

// Rejected — operation failed, promise has a reason (error).