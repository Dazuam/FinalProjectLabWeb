

exports.homepage = (req, res) => {
    res.render('pages/homepage' , { layout: 'style'});
}

exports.timeline = (req, res) => {
    res.render('pages/timeline');
}

exports.gallery = (req, res) => {
    res.render('pages/gallery');
}
