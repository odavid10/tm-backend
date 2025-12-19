const { STATUS_REQUEST } = require("../../common/models");
const { STATUS } = require("../models");
const { taskRepository } = require("../repository/task.repository");

const getTasksService = async (req, res) => {
  try {
    const userId = req.userId;
    const tasks = await taskRepository.findAllByUserId(userId);

    const groupedTasks = {
      complete: [],
      inProgress: [],
      pending: [],
    };

    tasks.forEach((task) => {
      const status = task.status.toLowerCase();

      if (status === STATUS.complete) {
        groupedTasks.complete.push(task);
      } else if (status === STATUS.inProgress) {
        groupedTasks.inProgress.push(task);
      } else {
        groupedTasks.pending.push(task);
      }
    });

    return res.status(200).json({
      status: STATUS_REQUEST.SUCCESS,
      data: groupedTasks,
      count: tasks.length,
    });
  } catch (error) {
    console.error("Error en getTasksService:", error);

    return res.status(500).send({
      status: STATUS_REQUEST.ERROR,
      message: "Error al listar LAS TAREAS.",
      error: error.message,
    });
  }
};

module.exports = { getTasksService };
