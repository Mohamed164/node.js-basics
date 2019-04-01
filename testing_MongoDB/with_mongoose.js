const mongoose = require('mongoose');

// specifying a schema
var Schema = mongoose.Schema;
var TeamSchema = new Schema({
  name:{
    type: String,
    required: true
  }
});

var EmployeeSchema = new Schema({
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team'
  },

  image:{
    type: String,
    default: 'images/user.png'
  },

  address: {
    lines:{
      type: [String]
    },
    postal:{
      type: String
    }
  }
});

// Schema: a contructor that takes a key-value pair that decribes the data

// updating the remote database
var db = mongoose.connection
var dbURL = 'mongodb://user-test:anQYduGQb7mjHuH@ds239682.mlab.com:39682/heroku_4x4b0l35';

var Team = mongoose.model('Team', TeamSchema);

db.on('error',function (error) {
  console.log('error w/ connection: '+error);
})

mongoose.connect(dbURL, { useNewUrlParser: true },function (err) {
  if (err)
    return console.log('error connecting to the database: '+err);

    console.log('connected!');
    Team.create([{name: 'Product Development'}, {name: 'Dev ops'}, {name: 'accounting'}]);

    Team.save(function (error, data) {
      if (error)
        console.log(error);
      else
        console.dir(data);

      db.close();
      process.exit();
    })
})
