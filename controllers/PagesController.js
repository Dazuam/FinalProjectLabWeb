
let ProductModel = require('../models/Upload');

exports.homepagelogged = (req, res) => {
   
    ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let images = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { layout: 'style', user:req.user.email, images: images });
    });
    
}

exports.homepageunlogged = (req, res) => {
    ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let images = data;
      // Enviamos los datos a la vista
      res.render('pages/homepageunlogged', { layout: 'style', images: images });
    });
}

exports.timeline = (req, res) => {

    ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let images = data;
      // Enviamos los datos a la vista
      res.render('pages/timeline', { layout: 'style', images: images });
    });

    
}

exports.gallery = (req, res) => {
    ProductModel.findByUser(req.user)
    .then((data) => {
      // Guardamos los productos en una variable
      let images = data;
       console.log(images)
      // Enviamos los datos a la vista
      res.render('pages/gallery', { layout: 'style', images: images });
    });
}

exports.image = (req, res) => {
    res.render('pages/uploadImg', { layout: 'style'});
}
