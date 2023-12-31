const express = require('express');
const router = express.Router()
const users = require('../controllers/user.controller');
const cards = require('../controllers/card.controller');
const readings = require('../controllers/reading.controller');
const auth = require('../middlewares/auth.middleware');



//USERS 
router.post("/users", users.create);
router.post("/login",users.login );
router.get('/detail', auth.isAuthenticated, users.detail)
router.post("/logout", users.logout);

//CARD
router.get("/cards", auth.isAuthenticated, cards.list); 
router.get("/cards/:id", auth.isAuthenticated, cards.detail);
router.post("/cards", cards.create)
//hacer un post del body

//READINGS
router.post("/readings", auth.isAuthenticated, readings.create);
router.get("/readings/:id", auth.isAuthenticated, readings.detail);
router.post('/readings/:id/adviceLove', auth.isAuthenticated, readings.adviceLove)
router.post('/readings/:id/adviceEmoji', auth.isAuthenticated, readings.adviceEmoji)
router.get('/profile', auth.isAuthenticated, readings.list)





module.exports = router;