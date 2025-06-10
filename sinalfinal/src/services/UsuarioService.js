const pool = require("../config/database");

const createUsuario = async (usuario) => {
  const [result] = await pool.query(
    "INSERT INTO usuarios (nome_user, email_user, senha_user, telefone_user) VALUES (?, ?, ?, ?)",
    [
      usuario.nome_user,
      usuario.email_user,
      usuario.senha_user,
      usuario.telefone_user,
    ]
  );
  return { id_user: result.insertId, ...usuario };
};

const getAllUsuarios = async () => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  return rows;
};

const getUsuarioById = async (id_user) => {
  const [rows] = await pool.query("SELECT * FROM usuarios WHERE id_user = ?", [
    id_user,
  ]);
  return rows[0];
};

const updateUsuario = async (id_user, usuario) => {
  const [result] = await pool.query(
    "UPDATE usuarios SET nome_user = ?, email_user = ?, senha_user = ?, telefone_user = ? WHERE id_user = ?",
    [
      usuario.nome_user,
      usuario.email_user,
      usuario.senha_user,
      usuario.telefone_user,
      id_user,
    ]
  );
  return result.affectedRows;
};

const deleteUsuario = async (id_user) => {
  const [result] = await pool.query("DELETE FROM usuarios WHERE id_user = ?", [
    id_user,
  ]);
  return result.affectedRows;
};

module.exports = {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};
