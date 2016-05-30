
var db = require("./models");

var artistProfiles =[
            {
              name: 'Bryson Green',
              actName: 'Bryson Green',
              location: 'Atlanta, Georiga, USA.',
              age: 24,
              genre: 'Rap, Hip-Hop'
            },
            {
              name: 'Troy Mathews',
              actName: 'TroyLLF',
              location: 'San Francisco, California, USA.',
              age: 26,
              genre: 'Rap, Hip-Hop'
            },
            {
              name: 'Marlon Booker, julian Booker, Gary Clark II',
              actName: 'Gold Shades',
              location: 'Atlanta, Georgia, USA.',
              age: 22-22-23,
              genre: 'R&B'
            },
            {
              name: 'Elizabeth Murray',
              actName: 'Zay\'Marie',
              location: 'San Francisco, California, USA.',
              age: 26,
              genre: 'R&B, Soul'
            }
];

  db.Profile.remove({}, function(err, artists){

  db.Profile.create(artistProfiles, function(err, artists){
    if (err) { return console.log('ERROR', err); }
    console.log("all artists:", artists);
    console.log("created", artists.length, "artists");
    process.exit();
  });

 });
