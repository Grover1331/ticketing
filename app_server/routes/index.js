var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/restaurants');
var ctrlOthers = require('../controllers/others');

/* Restaurant Pages */
router.get('/', ctrlMain.homeRestaurantList);
router.get('/restaurant', ctrlMain.restaurantInfo);
router.get('/restaurant/new', ctrlMain.newRestaurantForm);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
