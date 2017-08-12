/**
 * GET /
 * Donate page.
 */
exports.index = (req, res) => {
  res.render('donate/index', {
    title: 'Donate'
  });
};
