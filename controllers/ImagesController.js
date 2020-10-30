let UploadModel = require('../models/Upload');
const { validationResult } = require('express-validator');



exports.create = (req, res) => {
    if (!req.file) {
        res.send('No se envío una imagen');
      } else {
        let url = 'http://localhost:3000/images/' + req.file.filename;

        res.send('Se subió la imagen: ' + req.file.path + ' url: ' + url);
      }
  }

exports.store = (req, res) => {

  // Identifica si hubieron errores en el request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Si los hubieron entonces regresa a la petición anterior
    req.flash('errors', errors.array());
    return res.redirect('back');
  }
  console.log("Request")
  console.log(req)
  UploadModel.create(req.body, req.file, req.user)
    
    .then((data) => {
      return res.send('Image created');
    })
    .catch((error) => {
      console.log(error);
    });
  // res.send('Registrar usuario');
}