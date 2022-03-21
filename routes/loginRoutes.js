const express = require('express');
const router = express.Router();

// handling routes of login
router.get('/login',(req,res)=>{
    res.render('login')
});
module.exports = router;
// exporting the router