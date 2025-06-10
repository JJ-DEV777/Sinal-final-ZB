const RegistroService = require('../services/RegistroService');

module.exports = {
  create: async (req, res) => res.json(await RegistroService.createRegistro(req.body)),
  list: async (req, res) => res.json(await RegistroService.getAllRegistros()),
  show: async (req, res) => res.json(await RegistroService.getRegistroById(req.params.id)),
  update: async (req, res) => res.json(await RegistroService.updateRegistro(req.params.id, req.body)),
  remove: async (req, res) => res.json(await RegistroService.deleteRegistro(req.params.id))
};
