const { pgService } = require("../../database/database");
const { STATUS } = require("../models");

class TaskRepository {
  findAllByUserId = async (userId) => {
    const sql = `SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC;`;

    const { rows } = await pgService.query(sql, [userId]);

    return rows;
  };

  create = async (payload, userId) => {
    const { title, description, status = STATUS.pending, priority } = payload;
    const sql = `
      INSERT INTO tasks (title, description, status, priority, user_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

    const { rows } = await pgService.query(sql, [
      title,
      description,
      status,
      priority,
      userId,
    ]);

    return rows[0];
  };

  update = async (id, taskData, userId) => {
    const { title, description, status, priority } = taskData;
    const sql = `
      UPDATE tasks 
      SET title = $1, description = $2, status = $3, priority = $4, updated_at = NOW()
      WHERE id_task = $5 AND user_id = $6
      RETURNING *;
    `;

    const { rows } = await pgService.query(sql, [
      title,
      description,
      status,
      priority,
      id,
      userId,
    ]);

    return rows[0];
  };

  delete = async (id, userId) => {
    const sql = `DELETE FROM tasks WHERE id_task = $1 AND user_id = $2 RETURNING id_task;`;

    const { rowCount } = await pgService.query(sql, [id, userId]);
    return rowCount > 0;
  };
}

const taskRepository = new TaskRepository();

module.exports = { taskRepository };
