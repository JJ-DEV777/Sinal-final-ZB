const express = require('express');
const router = express.Router();

router.use('/usuarios', require('./usuario.routes'));
router.use('/registros', require('./registro.routes'));
router.use('/logg', require('./logg.routes'));
router.use('/backup', require('./backup.routes'));

module.exports = router;
