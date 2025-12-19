const VALID_STATUS = ["pendiente", "en progreso", "completada"];
const VALID_PRIORITY = ["baja", "media", "alta"];

const STATUS = {
  pending: "pendiente",
  inProgress: "en progreso",
  complete: "completada",
};

const PRIORITY = {
  baja: "baja",
  media: "media",
  alta: "alta",
};

module.exports = {
  PRIORITY,
  STATUS,
  VALID_PRIORITY,
  VALID_STATUS,
};
