

exports.homepagelogged = (req, res) => {
    res.render('pages/homepage' , { layout: 'style', user:req.user.email});
}

exports.homepageunlogged = (req, res) => {
    res.render('pages/homepageunlogged' , { layout: 'style'});
}

exports.timeline = (req, res) => {
    res.render('pages/timeline', { layout: 'style', user:req.user.email});
}

exports.gallery = (req, res) => {
    console.log(req.user);
    res.render('pages/gallery', { layout: 'style', user:req.user.email, username:req.user.name});
}

exports.image = (req, res) => {
    res.render('pages/uploadImg', { layout: 'style', user:req.user.email});
}
