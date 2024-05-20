import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema(
    {
        videoFile:{
            type: String,       //Cloudinary se aayega
            required: true,
        },
        thumbnail:{
            type: String,       //cloudinary url
            required: true
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,   //cloudinary url
            required: true
        },
        time:{
            type: Number,   //cloudinary url
            required: true
        },
        views:{
            type: Number,
            default: 0
        },
        isPublished:{
            type: Boolean,
            default: true
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"          //Ye model database model me hona jruri hai
        }
    },
    {
        timestamps:true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)      //Mongoose ka aggregate pipeline hai ye , ye hmare project ko advance level p le jaega

export const Video= mongoose.model("Video",videoSchema)