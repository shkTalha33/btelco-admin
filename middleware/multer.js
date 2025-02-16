const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // not good approach to use .originalname can be use .filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload;