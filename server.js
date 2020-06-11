const express = require('express');
require('dotenv').config();
const passport = require('passport');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
if (process.env.NODE_ENV === 'production') {
	// set static folder
	app.use(express.static('client/build'));
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
// Add routes, both API and view
app.use(routes);

app.use(passport.initialize());
require('./config/passport')(passport);
// require("./routes/api/users")(router)
// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
