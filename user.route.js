const express = require('express');
const user_controller = require('./user.controller');

const router = express.Router();
router.get('/user', user_controller.show);
router.post('/user', user_controller.create);
router.get('/user/:id', user_controller.details);
router.patch('/user/:id', user_controller.update);
router.delete('/user/:id', user_controller.delete);
module.exports = router;
