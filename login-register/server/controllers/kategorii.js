const Category = require('../models/kategorija');

module.exports = {
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);

      res.send({
        error: false,
        message: `category`,
        category: category
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.messaeg
      });
    }
  },
  AllCategory: async (req, res) => {
    try {
      const category = await Category.find().populate('user');
      res.send({
        error: false,
        message: `Return all category`,
        category: category
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.messaeg
      });
    }
  },

}