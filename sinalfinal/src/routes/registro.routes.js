const express = require('express');
const router = express.Router();
const RegistroController = require('../controllers/RegistroController');

router.post('/', RegistroController.create);
router.get('/', RegistroController.list);
router.get('/:id', RegistroController.show);
router.put('/:id', RegistroController.update);
router.delete('/:id', RegistroController.remove);

module.exports = router;
