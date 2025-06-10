const UsuarioService = require("../services/UsuarioService");

module.exports = {
  create: async (req, res) =>
    res.json(await UsuarioService.createUsuario(req.body)),
  list: async (req, res) => res.json(await UsuarioService.getAllUsuarios()),
  show: async (req, res) =>
    res.json(await UsuarioService.getUsuarioById(req.params.id)),
  update: async (req, res) =>
    res.json(await UsuarioService.updateUsuario(req.params.id, req.body)),
  remove: async (req, res) =>
    res.json(await UsuarioService.deleteUsuario(req.params.id)),
};
