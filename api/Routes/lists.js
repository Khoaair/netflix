const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

// CREATE
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const listSaved = await newList.save();
      res.status(201).json(listSaved);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json('You are not allowed!');
  }
});

module.exports = router;
