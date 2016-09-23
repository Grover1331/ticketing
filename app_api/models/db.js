var mongoose = require( 'mongoose' );
var gracefulShutdown;
var dbURI = 'mongodb://localhost/HungerPASS';
if (process.env.NODE_ENV === 'production') {
  dbURI = 'mongodb://heroku_1ndjjflw:7595vu530a1onkcsahsebe5sfa@ds017852.mlab.com:17852/heroku_1ndjjflw';
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
  console.log('Mongoose conncetion error: ' + err);
});

mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

require('./restaurants');
