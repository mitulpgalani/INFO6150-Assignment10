const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif' || file.mimetype === 'image/webp') {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 }
});


const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const fullNameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;


const validateInput = (email, fullName, password) => {
    const validationErrors = {};
    if (!emailRegex.test(email)) {
        validationErrors.email = 'Invalid email format';
    }
    if (!fullNameRegex.test(fullName)) {
        validationErrors.fullName = 'Full name can only contain letters, spaces, apostrophes, hyphens, and periods';
    }
    if (!passwordRegex.test(password)) {
        validationErrors.password = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number';
    }
    return validationErrors;
}

module.exports = {
    upload,
    validateInput
};