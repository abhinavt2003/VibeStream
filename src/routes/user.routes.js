import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

//router se router bnaenge

const router = Router()

router.route("/register").post(
    upload.fields([    //Read only multer fields
        {
            name: "avatar",
            maxCount: 1,
        },
        {
            name: "coverImage",
            maxCount: 1,
        }
    ]),   
    registerUser
)

export default router