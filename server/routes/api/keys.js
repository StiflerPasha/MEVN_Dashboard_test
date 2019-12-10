const { getVPNKeys } = require('../../handlers/keysHandler');

const express = require('express');
const router = express.Router();

// Get Keys
router.get('/', async (req, res) => {
  const posts = await getVPNKeys();
  console.log('Fetch Keys');
  res.send(posts);
});

module.exports = router;
