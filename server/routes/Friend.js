import express from 'express'
import {postFriend,deleteFriend} from '../controllers/Friend.js'
import auth from '../middlewares/auth.js'
const router=express.Router();


router.patch('/post/:id',auth,postFriend)
router.patch('/delete/:id',auth,deleteFriend)
//router.get('/get/:id',auth,getAllList)
export default router