// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/Limelight-Management-Group/express_self_api/README.md", // CHANGE ME
    base_url: "https://peaceful-chamber-32620.herokuapp.com/", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "SuperCeo characteristics" }, // CHANGE ME
      {method: "POST", path: "/api/artists", description: "Build a Limelight Profile"} // CHANGE ME
    ]
  })
});

app.get('/api/artists', function album_index(req, res){
db.Album.find({}, function(err, artists) {
res.json(artists);
})
})

app.post('/api/artists', function profileCreate(req, res){
  console.log("going well");  // this is getting called from app.js
db.Profile.create(req.body, function(err, artists) {
res.json(artists);
})
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
