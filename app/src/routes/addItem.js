const db = require('../persistence');
const { randomUUID: uuid } = require('crypto');

module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
