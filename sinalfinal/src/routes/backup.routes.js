const express = require('express');
const router = express.Router();
const BackupController = require('../controllers/BackupController');

router.post('/', BackupController.create);
router.get('/', BackupController.list);
router.get('/:id', BackupController.show);
router.put('/:id', BackupController.update);
router.delete('/:id', BackupController.remove);

module.exports = router;
