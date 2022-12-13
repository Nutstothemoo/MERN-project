import express from 'Express';
import { getFeedposts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from '../middleware/auth.js';


const router =express.Router();

// READ

router.get("/", verifyToken, getFeedposts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE

router.patch("/:id/like", verifyToken, likePost)

export default router;




