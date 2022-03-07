

/**
 * GET
 * home
 */
exports.homepage = async(req, res) => {
  res.render('index', {title: 'HomePage'})
}