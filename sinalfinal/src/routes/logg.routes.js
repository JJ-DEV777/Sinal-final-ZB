const express = require('express');
const router = express.Router();
const LoggController = require('../controllers/LoggController');

router.post('/', LoggController.create);
router.get('/', LoggController.list);
router.get('/:id', LoggController.show);
router.put('/:id', LoggController.update);
router.delete('/:id', LoggController.remove);

module.exports = router;
