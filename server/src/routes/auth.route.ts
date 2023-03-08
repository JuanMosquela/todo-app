import router from ".";
import { login, register } from "../controllers/auth.controller";

router.post("/register", register);
router.post("/login", login);

export default router;
