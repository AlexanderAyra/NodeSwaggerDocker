const getUser = (req, res) => {
    res.json({
        status: 'OK',
        msg: 'Todos ok'
    })
}

const postUser = (req, res) => {
    res.json({
        status: 'OK',
        user: req.body,
        msg: 'Todos ok'
    })
}

module.exports = {
    getUser,
    postUser
};