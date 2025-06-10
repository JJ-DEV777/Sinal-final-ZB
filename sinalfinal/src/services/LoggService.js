const pool = require("../config/database");

const createLogg = async (logg) => {
  const [result] = await pool.query(
    "INSERT INTO logg (descricao_log, observacoes_log, dt_hr_log) VALUES (?, ?, ?)",
    [logg.descricao_log, logg.observacoes_log, logg.dt_hr_log]
  );
  return { id_log: result.insertId, ...logg };
};

const getAllLogg = async () => {
  const [rows] = await pool.query("SELECT * FROM logg");
  return rows;
};

const getLoggById = async (id_log) => {
  const [rows] = await pool.query("SELECT * FROM logg WHERE id_log = ?", [
    id_log,
  ]);
  return rows[0];
};

const updateLogg = async (id_log, logg) => {
  const [result] = await pool.query(
    "UPDATE logg SET descricao_log = ?, observacoes_log = ?, dt_hr_log = ? WHERE id_log = ?",
    [logg.descricao_log, logg.observacoes_log, logg.dt_hr_log, id_log]
  );
  return result.affectedRows;
};

const deleteLogg = async (id_log) => {
  const [result] = await pool.query("DELETE FROM logg WHERE id_log = ?", [
    id_log,
  ]);
  return result.affectedRows;
};

module.exports = {
  createLogg,
  getAllLogg,
  getLoggById,
  updateLogg,
  deleteLogg,
};
