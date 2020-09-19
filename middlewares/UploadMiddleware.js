const multer = require('multer');
const path = require('path');
const process = require('process');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    let dest = path.join(process.cwd(), '/storage/images');
    cb(null, dest);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
