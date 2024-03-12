const getUser = (req, res) => {
    res.json({
        status: 'OK',
        msg: 'Todos ok'
    })
}

module.exports = { getUser };