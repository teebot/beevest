/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Tax Deductible Donations EOFY Tax Return'
  });
};
