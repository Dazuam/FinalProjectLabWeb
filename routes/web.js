let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
const imagesController = require('../controllers/ImagesController');
const upload = require('../middlewares/UploadMiddleware');
let passport = require('passport');
const db = require('../database/connection');


// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.post('/register', authValidator.store, authController.store);

/*router.get('/upload', authController.upload);
router.post('/upload',authValidator.storeupload, authController.storeupload); */



router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/' }));
router.get('/protected', (req, res) => {
  res.send('Usuario logueado con éxito');
});
router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});

router.get('/', (req, res, next) => {
  if(req.isAuthenticated()) return next();
  
  res.redirect('/homepageunlogged');
  

}, PagesController.homepagelogged);

router.get('/homepageunlogged', PagesController.homepageunlogged);


router.get('/Register', authController.register);

router.get('/MyGallery', PagesController.gallery);

router.get('/MyTimeline', PagesController.timeline);

router.get('/Image', PagesController.image);

router.get('/Logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.post('/images',upload.single("theImage"),imagesController.store);


module.exports = router;