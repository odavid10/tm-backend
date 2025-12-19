const router = require("express").Router();

const appRoutes = require("../app.routes");
const authRoutes = require("../auth/controller/auth.controller");
const tasksRoutes = require("../tasks/controller/tasks.controller");

router.use(appRoutes);

router.use("/auth", authRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;
