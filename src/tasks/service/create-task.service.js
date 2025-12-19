const { STATUS_REQUEST } = require("../../common/models");
const { taskRepository } = require("../repository/task.repository");
const { validateTaskData } = require("../utils");

const createTaskService = async (req, res) => {
  try {
    const userId = req.userId;

    const validationError = validateTaskData(req.body);
    if (validationError) {
      return res
        .status(400)
        .send({ status: STATUS_REQUEST.ERROR, message: validationError });
    }

    const newTask = await taskRepository.create(req.body, userId);

    return res.status(201).json({
      status: STATUS_REQUEST.SUCCESS,
      message: "Tarea creada exitosamente.",
      data: newTask,
    });
  } catch (error) {
    console.error("Error en createTaskService:", error);
    return res.status(500).json({
      status: STATUS_REQUEST.ERROR,
      message: "Error al crear la tarea.",
      error: error.message,
    });
  }
};

module.exports = { createTaskService };
