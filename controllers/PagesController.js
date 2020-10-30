

exports.homepagelogged = (req, res) => {
    res.render('pages/homepage' , { layout: 'style', user:req.user.email});
}

exports.homepageunlogged = (req, res) => {
    res.render('pages/homepageunlogged' , { layout: 'style'});
}

exports.timeline = (req, res) => {
    res.render('pages/timeline', { layout: 'style'});
}

exports.gallery = (req, res) => {
    res.render('pages/gallery', { layout: 'style'});
}

exports.image = (req, res) => {
    res.render('pages/uploadImg', { layout: 'style'});
}
