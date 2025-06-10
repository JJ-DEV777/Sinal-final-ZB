const BackupService = require('../services/BackupService');

module.exports = {
  create: async (req, res) => res.json(await BackupService.createBackup(req.body)),
  list: async (req, res) => res.json(await BackupService.getAllBackup()),
  show: async (req, res) => res.json(await BackupService.getBackupById(req.params.id)),
  update: async (req, res) => res.json(await BackupService.updateBackup(req.params.id, req.body)),
  remove: async (req, res) => res.json(await BackupService.deleteBackup(req.params.id))
};
