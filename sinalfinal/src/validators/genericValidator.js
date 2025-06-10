const { body } = require("express-validator");

const usuarioValidation = () => [
  body("nome_user").isString().notEmpty(),
  body("email_user").isEmail(),
  body("senha_user").isString().notEmpty(),
  body("telefone_user").isString().notEmpty(),
];

module.exports = { usuarioValidation };
