import { Router } from "express";
import { 
    loginUser, 
    logoutUser, 
    registerUser,
    refreshAccessToken, 
    changeCurrentPassword, 
    getCurrentUser,
    updateAccountDetails, 
    updateUserAvatar, 
    updateUserCoverImage, 
    getUserChannelProfile, 
    getWatchHistory } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

//router se router bnaenge

const router = Router()

router.route("/register").post(
    upload.fields([    //Read only multer fields    //upload comes from middleware
        {                           // I m uploading avatar and coverImage in localStorage thru multer for registerUser controller
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

router.route("/login").post(loginUser)


//secured routes
router
.route("/logout").post(verifyJWT, logoutUser)    // verifyJWT is a middleware

router
.route("/refresh-token")
.post(refreshAccessToken)

router
.route("/change-password")
.post(verifyJWT,changeCurrentPassword)

router.route("/current-user").get(verifyJWT,getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails)

router.route("/avatar").patch(verifyJWT, upload.single("avatar"),updateUserAvatar)

router.route("/cover-image").patch(verifyJWT,upload.single("coverImage",updateUserCoverImage))

router.route("/c/:username").get(verifyJWT,getUserChannelProfile)

router.route("/history").get(verifyJWT, getWatchHistory)

export default router