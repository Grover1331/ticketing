var express = require('express');
var router = express.Router();
var ctrlRestaurants = require('../controllers/restaurants');
;

// restaurants
router.get('/restaurants', ctrlRestaurants.restaurants);
router.post('/restaurants', ctrlRestaurants.restaurantsCreate);
router.get('/restaurants/:restaurantid', ctrlRestaurants.restaurantsReadOne);
router.put('/restaurants/:restaurantid', ctrlRestaurants.restaurantsUpdateOne);
router.delete('/restaurants/:restaurantid', ctrlRestaurants.restaurantsDeleteOne);

module.exports = router;
