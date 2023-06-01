import { Router } from 'express';
import { getFeedposts, getUserPosts, likePost} from "../controllers/posts.js";


const router = Router();

// READ

router.get("/", getFeedposts);
router.get("/:userId/posts", getUserPosts);

// UPDATE

router.patch("/:id/like", likePost)

export default router;




