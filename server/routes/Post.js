import express from 'express'
import mongoose from 'mongoose'
import {PostData} from '../controllers/Post.js'
import { getAllPosts , votePosts} from '../controllers/Post.js';
//import {getAllQuestions , deleteQuestion , voteQuestion} from '../controllers/Questions.js'
//import auth from '../middlewares/auth.js'
const router=express.Router();

router.post('/data',PostData)
router.get('/get',getAllPosts)
router.patch('/vote/:id',votePosts)
//router.delete('/delete/:id',auth,deleteQuestion);
//router.patch('/vote/:id',auth,voteQuestion)
export default router;