import mongoose,{Schema} from "mongoose";

const subscriptionSchema= new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,        //one who is susbcribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,       //one to whom a subscriber is subscribing
        ref: "User"
    }
},{timestamps:true})


export const Subscription= mongoose.model("Subscription",subscriptionSchema)



// An aggregation pipeline consists of one or more stages that process documents:
// Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
// The documents that are output from a stage are passed to the next stage.
// An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.
// db.orders.aggregate( [
//     // Stage 1: Filter pizza order documents by pizza size
//     {
//        $match: { size: "medium" }
//     },
//     // Stage 2: Group remaining documents by pizza name and calculate total quantity
//     {
//        $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
//     }
//  ] )