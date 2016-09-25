var mongoose = require('mongoose');
var Restaurants = mongoose.model('Restaurant')

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

/* POST create a new restaurant */
module.exports.restaurantsCreate = function (req, res) {
  Restaurants.create({
    restaurantName: req.body.restaurantName,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    zipcode: req.body.zipcode,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    region: req.body.region,
    price: req.body.price,
    cuisine: req.body.cuisine.toString().split(","),
    features: req.body.features.toString().split(","),
    keywords: req.body.keywords.toString().split(","),
    restrictions: req.body.restrictions,
    partySize: req.body.partySize,
    about: req.body.about,
    imageURL:req.body.imageURL,
    websiteURL: req.body.websiteURL,
    menuURL: req.body.menuURL,
    openingHours: req.body.openingHours,
    discountHours: [{
      days: req.body.daysMon,
      hours: req.body.hoursMon,
      discount: req.body.discountMon
    }, {
      days: req.body.daysTues,
      hours: req.body.hoursTues,
      discount: req.body.discountTues
    }, {
      days: req.body.daysWed,
      hours: req.body.hoursWed,
      discount: req.body.hoursWed
    }, {
      days: req.body.daysThurs,
      hours: req.body.hoursThurs,
      discount: req.body.discountThurs
    }, {
      days: req.body.daysFri,
      hours: req.body.hoursFri,
      discount: req.body.discountFri
    }, {
      days: req.body.daysSat,
      hours: req.body.hoursSat,
      discount: req.body.discountSat
    }, {
      days: req.body.daysSun,
      hours: req.body.hoursSun,
      discount: req.body.discountSun
    }]
  }, function(err, restaurant) {
    if (err) {
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, restaurant);
    }
  });
};

/* GET all restaurnts */
module.exports.restaurants = function (req, res) {
  Restaurants
    .find()
    .exec(function(err, restaurant) {
      if(!restaurant) {
        sendJsonResponse(res, 404, {
          "message": "restaurants not found"
        });
      } else if (err) {
        sendJsonResponse(res, 404, "Lun Te vaj");
        return;
      }
      sendJsonResponse(res, 200, restaurant);
    });
};

/* GET a restaurant by id */
module.exports.restaurantsReadOne = function (req, res) {
  if(req.params && req.params.restaurantid) {
    Restaurants
      .findById(req.params.restaurantid)
      .exec(function(err, restaurant) {
        if(!restaurant) {
          sendJsonResponse(res, 404, {
            "message": "restaurantid not found"
          });
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, restaurant);
      });
  } else {
    sendJsonResponse(res, 404, {
      "message": "No restaurantid in request"
    });
  }
};

/* PUT /api/restaurants/:restaurantsid */
module.exports.restaurantsUpdateOne = function(req, res) {
  if (!req.params.restaurantid) {
    sendJSONresponse(res, 404, {
      "message": "Not found, restaurantid is required"
    });
    return;
  }
  Restaurants
    .findById(req.params.restaurantid)
    .exec(
      function(err, restaurant) {
        if (!restaurant) {
          sendJSONresponse(res, 404, {
            "message": "restaurantid not found"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        restaurant.restaurantName = req.body.restaurantName;
        restaurant.phoneNumber = req.body.phoneNumber;
        restaurant.email = req.body.email;
        restaurant.address = req.body.address;
        restaurant.city = req.body.city;
        restaurant.zipcode = req.body.zipcode;
        restaurant.latitude = req.body.latitude;
        restaurant.longitude = req.body.longitude;
        restaurant.region = req.body.region;
        restaurant.price = req.body.price;
        restaurant.cuisine = req.body.cuisine.toString().split(",");
        restaurant.features = req.body.features.toString().split(",");
        restaurant.keywords = req.body.keywords.toString().split(",");
        restaurant.restrictions = req.body.restrictions;
        restaurant.partySize = req.body.partySize;
        restaurant.about =  req.body.about;
        restaurant.imageURL = req.body.imageURL;
        restaurant.websiteURL = req.body.websiteURL;
        restaurant.openingHours = req.body.openingHours;
        restaurant.discountHours = [{
          days: req.body.daysMon,
          hours: req.body.hoursMon,
          discount: req.body.discountMon,
        }, {
          days: req.body.daysTues,
          hours: req.body.hoursTues,
          discount: req.body.discountTues,
        }, {
          days: req.body.daysWed,
          hours: req.body.hoursWed,
          discount: req.body.hoursWed,
        }, {
          days: req.body.daysThurs,
          hours: req.body.hoursThurs,
          discount: req.body.discountThurs,
        }, {
          days: req.body.daysFri,
          hours: req.body.hoursFri,
          discount: req.body.discountFri,
        }, {
          days: req.body.daysSat,
          hours: req.body.hoursSat,
          discount: req.body.discountSat,
        }, {
          days: req.body.daysSun,
          hours: req.body.hoursSun,
          discount: req.body.discountSun,
        }];
        restaurant.save(function(err, restaurant) {
          if (err) {
            sendJsonResponse(res, 404, err);
          } else {
            sendJsonResponse(res, 200, restaurant);
          }
        });
      }
  );
};

/* DELETE location by id */
/* api/restaurants/:restaurantid */
module.exports.restaurantsDeleteOne = function (req, res) {
  var restaurantid = req.params.restaurantid;
  if (restaurantid) {
    Restaurants
      .findByIdAndRemove(restaurantid)
      .exec(
        function(err, restaurant) {
          if (err) {
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 204, null);
        }
      );
  } else {
    sendJsonResponse(res, 404, {
      "message": "No restaurantid"
    });
  }
};
