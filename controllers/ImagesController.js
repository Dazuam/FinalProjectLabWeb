

exports.create = (req, res) => {
    if (!req.file) {
        res.send('No se envío una imagen');
      } else {
        let url = 'http://localhost:3000/images/' + req.file.filename;
        res.send('Se subió la imagen: ' + req.file.path + ' url: ' + url);
      }
  }