let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.post('/register', authValidator.store, authController.store);
router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/protected' }));
router.get('/protected', (req, res) => {
  res.send('Usuario logueado con éxito');
});
router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});

router.get('/', PagesController.homepage);

router.get('/Register', authController.register);

router.get('/MyGallery', PagesController.gallery);

router.get('/MyTimeline', PagesController.timeline);

module.exports = router;