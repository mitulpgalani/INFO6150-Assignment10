const userController = require('../controllers/userController');
const {upload} = require('../services/userService');

const express = require('express');
const router = express.Router();


router.post('/create', upload.none(), userController.createUser);
router.put('/edit', upload.none(), userController.editUser);
router.delete('/delete', upload.none(), userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/login', upload.none(), userController.userLogin);
router.post('/uploadImage', upload.single('image'), userController.imageUpload);

module.exports = router;
