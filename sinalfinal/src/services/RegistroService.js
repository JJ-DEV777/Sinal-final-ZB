const pool = require("../config/database");

const createRegistro = async (registro) => {
  const [result] = await pool.query(
    "INSERT INTO registros (descricao_registros, dt_hr_registros, id_user_reg) VALUES (?, ?, ?)",
    [
      registro.descricao_registros,
      registro.dt_hr_registros,
      registro.id_user_reg,
    ]
  );
  return { id_registros: result.insertId, ...registro };
};

const getAllRegistros = async () => {
  const [rows] = await pool.query("SELECT * FROM registros");
  return rows;
};

const getRegistroById = async (id_registros) => {
  const [rows] = await pool.query(
    "SELECT * FROM registros WHERE id_registros = ?",
    [id_registros]
  );
  return rows[0];
};

const updateRegistro = async (id_registros, registro) => {
  const [result] = await pool.query(
    "UPDATE registros SET descricao_registros = ?, dt_hr_registros = ?, id_user_reg = ? WHERE id_registros = ?",
    [
      registro.descricao_registros,
      registro.dt_hr_registros,
      registro.id_user_reg,
      id_registros,
    ]
  );
  return result.affectedRows;
};

const deleteRegistro = async (id_registros) => {
  const [result] = await pool.query(
    "DELETE FROM registros WHERE id_registros = ?",
    [id_registros]
  );
  return result.affectedRows;
};

module.exports = {
  createRegistro,
  getAllRegistros,
  getRegistroById,
  updateRegistro,
  deleteRegistro,
};
