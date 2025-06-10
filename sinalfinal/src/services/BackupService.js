const pool = require("../config/database");

const createBackup = async (backup) => {
  const [result] = await pool.query(
    "INSERT INTO backup (dt_hr_back, id_registros, descricao_registros, dt_hr_registros, id_user_reg) VALUES (?, ?, ?, ?, ?)",
    [
      backup.dt_hr_back,
      backup.id_registros,
      backup.descricao_registros,
      backup.dt_hr_registros,
      backup.id_user_reg,
    ]
  );
  return { id_back: result.insertId, ...backup };
};

const getAllBackup = async () => {
  const [rows] = await pool.query("SELECT * FROM backup");
  return rows;
};

const getBackupById = async (id_back) => {
  const [rows] = await pool.query("SELECT * FROM backup WHERE id_back = ?", [
    id_back,
  ]);
  return rows[0];
};

const updateBackup = async (id_back, backup) => {
  const [result] = await pool.query(
    "UPDATE backup SET dt_hr_back = ?, id_registros = ?, descricao_registros = ?, dt_hr_registros = ?, id_user_reg = ? WHERE id_back = ?",
    [
      backup.dt_hr_back,
      backup.id_registros,
      backup.descricao_registros,
      backup.dt_hr_registros,
      backup.id_user_reg,
      id_back,
    ]
  );
  return result.affectedRows;
};

const deleteBackup = async (id_back) => {
  const [result] = await pool.query("DELETE FROM backup WHERE id_back = ?", [
    id_back,
  ]);
  return result.affectedRows;
};

module.exports = {
  createBackup,
  getAllBackup,
  getBackupById,
  updateBackup,
  deleteBackup,
};
