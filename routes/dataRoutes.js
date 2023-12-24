// require express to get the router
const express = require('express');
const { getData, postData, updateData, deleteData } = require('../controllers/dataController');
// get the router from the express
const router = express.Router();

// make a get request to the server

router.get('/', getData)

// make a post request to the server
router.post('/', postData)


// make a put/update request to the server

router.put('/update-data/:id', updateData)

// make the request to the server to delete the data

router.delete('/delete-data/:id', deleteData)


module.exports = router