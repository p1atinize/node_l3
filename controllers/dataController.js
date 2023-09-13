const Data = require('../models/data')

const all = async (req, res) => {
    const data = await Data.all();
    res.json(data);
}

const create = async (req, res) => {
    // req.body
}

const update = async (req, res) => {
    //todo
}

const destroy = async (req, res) => {
    //todo
}

module.exports = { all, create, update, destroy }