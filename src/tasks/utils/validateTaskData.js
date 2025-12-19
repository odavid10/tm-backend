const validateTaskData = (data) => {
  const { title, status, priority } = data;

  if (!title || !status || !priority) {
    return "Los campos title, status y priority son requeridos.";
  }

  const VALID_STATUS = ["pendiente", "en progreso", "completada"];
  const VALID_PRIORITY = ["baja", "media", "alta"];

  if (!VALID_STATUS.includes(status)) {
    return `Estado no válido. Opciones: ${VALID_STATUS.join(", ")}.`;
  }

  if (!VALID_PRIORITY.includes(priority)) {
    return `Prioridad no válida. Opciones: ${VALID_PRIORITY.join(", ")}.`;
  }

  return null;
};

module.exports = validateTaskData;
