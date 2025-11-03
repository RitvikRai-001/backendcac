import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
const router=Router()
import { upload } from "../middlewares/multer.js";

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }

    ]),
    registerUser)
// router.route("/login").post(loginUser)

export default router









// Feature	Named Export	Default Export
// Syntax	export { something }	export default something
// Number allowed per file	Many	Only one
// Import name fixed?	Yes (or alias)	No — you choose the name
// Use case	Multiple utilities, functions	Single main export (router, config, class)