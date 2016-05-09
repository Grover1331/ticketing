/* GET 'home' page */
module.exports.homeRestaurantList = function(req, res) {
  res.render('restaurants-list', {
    title: 'HungerPASS - Find places to dine at the best discounts!',
    pageHeader: {
      title: 'HungerPASS',
      strapline: 'Find places to dine at the best discounts!'
    },
    sidebar: 'HungerPASS helps you find restaraunts to dine at with the best discounts!',
    restaurants: [{
      restaurantName: 'Akbar Restaurant',
      address: '2 South Street',
      city: 'Garden City',
      zipcode: '11530',
      cuisines: ['Indian']
    },
    {
      restaurantName: 'Akbar Restaurant',
      address: '2 South Street',
      city: 'Garden City',
      zipcode: '11530',
      cuisines: ['Indian']
    },
    {
      restaurantName: 'Akbar Restaurant',
      address: '2 South Street',
      city: 'Garden City',
      zipcode: '11530',
      cuisines: ['Indian']
    }]
  });
};

/* GET 'restaurant detail' page */
module.exports.restaurantInfo = function(req, res) {
  res.render('restaurant-info', { title: 'Restaurant Info'} )
}

/* GET 'add new restaurants' page */
module.exports.newRestaurantForm = function(req, res) {
  res.render('add-new-restaurant-form', {title: 'Add New Restaurant'})
}
