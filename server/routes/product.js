const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('file');

router.post('/image', (req, res) => {

  upload(req, res, (err) => {
    if (err) {
      return res.json({ success : false, err });
    }
    return res.json({ succeess : true, filePath: res.req.file.path, fileName: res.req.file.filename})
  })


})

module.exports = router;
