const { pgService } = require("../../database/database");

class AuthRepository {
  findByEmail = async (email) => {
    try {
      const sql = `
        SELECT id_user, names, email, password 
        FROM "public"."users" 
        WHERE email = $1;
      `;

      const { rows } = await pgService.query(sql, [email]);

      return rows[0];
    } catch (error) {
      throw error;
    }
  };

  create = async (names, email, hashedPassword) => {
    try {
      const sql = `
        INSERT INTO "public"."users" (names, email, password)
        VALUES ($1, $2, $3)
        RETURNING id_user, names, email, created_at;
      `;
      const params = [names, email, hashedPassword];

      const { rows } = await pgService.query(sql, params);

      return rows[0];
    } catch (error) {
      throw error;
    }
  };
}

const authRepository = new AuthRepository();

module.exports = { authRepository };
