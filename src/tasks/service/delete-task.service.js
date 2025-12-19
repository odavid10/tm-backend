const { STATUS_REQUEST } = require("../../common/models");
const { taskRepository } = require("../repository/task.repository");

const deleteTaskService = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const deleted = await taskRepository.delete(id, userId);

    if (!deleted) {
      return res.status(404).json({
        status: STATUS_REQUEST.ERROR,
        message: "Tarea no encontrada o no tienes permiso para eliminarla",
      });
    }

    return res.status(200).send({
      status: STATUS_REQUEST.SUCCESS,
      message: "Tarea eliminada exitosamente.",
    });
  } catch (error) {
    console.error(
      `Error en deleteTaskService para ID ${req.params.id}:`,
      error
    );
    return res.status(500).json({
      status: STATUS_REQUEST.ERROR,
      message: "Error al eliminar la tarea.",
      error: error.message,
    });
  }
};

module.exports = { deleteTaskService };
