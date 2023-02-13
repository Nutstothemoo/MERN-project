import express from 'Express';
import { getFeedposts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from '../middleware/auth.js';


const router =express.Router();

// READ

router.get("/", getFeedposts);
router.get("/:userId/posts", getUserPosts);

// UPDATE

router.patch("/:id/like", likePost)

export default router;




