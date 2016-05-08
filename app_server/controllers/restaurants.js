/* GET 'home' page */
module.exports.homeRestaurantList = function(req, res) {
  res.render('restaurants-list', { title: 'Home'});
};

/* GET 'restaurant detail' page */
module.exports.restaurantInfo = function(req, res) {
  res.render('restaurant-info', { title: 'Restaurant Info'})
}

/* GET 'add new restaurants' page */
module.exports.newRestaurantForm = function(req, res) {
  res.render('add-new-restaurant-form', {title: 'Add New Restaurant'})
}
