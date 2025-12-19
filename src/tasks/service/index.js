const { createTaskService } = require("./create-task.service");
const { deleteTaskService } = require("./delete-task.service");
const { getTasksService } = require("./tasks.service");
const { updateTaskService } = require("./update-task.service");

module.exports = {
  createTaskService,
  deleteTaskService,
  getTasksService,
  updateTaskService,
};
