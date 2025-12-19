const { STATUS_REQUEST } = require("../../common/models");
const { taskRepository } = require("../repository/task.repository");
const { validateTaskData } = require("../utils");

const updateTaskService = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const validationError = validateTaskData(req.body);
    if (validationError) {
      return res
        .status(400)
        .send({ status: STATUS_REQUEST.ERROR, message: validationError });
    }

    const updatedTask = await taskRepository.update(id, req.body, userId);

    if (!updatedTask) {
      return res.status(404).json({
        status: STATUS_REQUEST.ERROR,
        message: "Tarea no encontrada o no tienes permiso para editarla",
      });
    }

    return res.status(200).json({
      status: STATUS_REQUEST.SUCCESS,
      message: "Tarea actualizada exitosamente.",
      data: updatedTask,
    });
  } catch (error) {
    console.error(
      `Error en updateTaskService para ID ${req.params.id}:`,
      error
    );
    return res.status(500).send({
      status: STATUS_REQUEST.ERROR,
      message: "Error al actualizar la tarea.",
      error: error.message,
    });
  }
};

module.exports = { updateTaskService };
