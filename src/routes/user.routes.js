import { Router } from "express";
import verifyToken from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";
const router = Router();

//only admin can access
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome admin" });
});

// both admin and manager can access
router.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome manager" });
  }
);

// all can access
router.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome user" });
  }
);

export default router;
