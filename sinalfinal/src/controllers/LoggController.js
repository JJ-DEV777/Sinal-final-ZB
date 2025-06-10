const LoggService = require('../services/LoggService');

module.exports = {
  create: async (req, res) => res.json(await LoggService.createLogg(req.body)),
  list: async (req, res) => res.json(await LoggService.getAllLogg()),
  show: async (req, res) => res.json(await LoggService.getLoggById(req.params.id)),
  update: async (req, res) => res.json(await LoggService.updateLogg(req.params.id, req.body)),
  remove: async (req, res) => res.json(await LoggService.deleteLogg(req.params.id))
};
