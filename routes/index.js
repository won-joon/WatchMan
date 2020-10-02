const express = require('express');
const router = express.Router();

//메인 페이지
router.get('/', (req, res, next) => {
    res.render('index');
});



module.exports = router;