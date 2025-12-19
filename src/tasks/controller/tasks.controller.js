const router = require("express").Router();
const { verifyToken } = require("../../middleware/middleware");

const {
  createTaskService,
  deleteTaskService,
  getTasksService,
  updateTaskService,
} = require("../service");

router.use(verifyToken);

router.get("/", getTasksService);
router.post("/", createTaskService);
router.put("/:id", updateTaskService);
router.delete("/:id", deleteTaskService);

module.exports = router;
