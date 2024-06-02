const connection = require('../models/db');

module.exports.ping = (req, res) => {
    try {
        res.send('pong');
    }
    catch(e) {
        // Manejo de errores
    }
};