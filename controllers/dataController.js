const getData = (req, res) => {
    res.send('data has been sent by the server')
}

const postData = (req, res) => {
    res.send('data has been sent to the server')
}

const updateData = (req, res) => {
    let id = req.params.id;
    res.send(`data has been updated on id:${id}`)
}
const deleteData = (req, res) => {
    let id = req.params.id;
    res.send(`data has been deleted on id:${id}`)
}

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
}