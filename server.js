require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create a schema for the person
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    favoriteFoods: [{ type: String }],
  });
  
  // Create a person model based on the schema
  const Person = mongoose.model('Person', personSchema);
  
  // Example usage:
  const person = new Person({
    name: 'test',
    age: 26,
    favoriteFoods: ['Pizza', 'sandwich'],
  });
  
  // Save the person to the database
  /*
  person.save()
    .then(() => {
      console.log('Person saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving person:', error);
    });
    */
//  people data
const arrayOfPeople = [
  { name: "mohamed ali", age: 30, favoriteFoods: ["makrouna", "sushi"] },
  { name: "Jane selim", age: 25, favoriteFoods: ["burgers", "ice cream"] },
  { name: "aymen hammemi", age: 35, favoriteFoods: ["steak", "pasta"] }
];
/*
// Create multiple instances using Model.create()
Person.create(arrayOfPeople, function(err, people) {
  if (err) {
    console.error(err);
  } else {
    console.log("People created successfully:", people);
  
  }
});

*/
/*
const nameToSearch = 'mohamed ali'; // The name you want to search for

// Find all people with the given name
Person.find({ name: nameToSearch })
  .then((people) => {
    console.log(people);
    // Process the found people
  })
  .catch((err) => {
    console.error(err);
    // Handle the error appropriately
  });
*/
/*
const query = { name: "jane selim" };

// Use model.findOne() to retrieve the matching document
Person.findOne({query }) .then( (people) => {console.log(people) ;} )
 .catch ((err) => {console.error(err);
 
});
*/
/*
const documentId = "649ff42ee8945c2154a6f6b2"; // Replace with the actual _id value

// Use model.findById() to search by _id
const query = Person.findById(documentId);

// Execute the query and handle the result using Promises
query
  .then(person => {
    if (person) {
      console.log("Person found:", person);
      // ...do your stuff here...
    } else {
      console.log("Person not found.");
    }
  })
  .catch(err => {
    console.error(err);
  });
  */
  exports.findById = async (req, res) => {
    const id = '649ff42ee8945c2154a6f6b2';
  
    try {
      const data = await person.findById(id);
  
      if (data) {
        handleMessage.successResponse(req, res, data);
      } else {
        handleMessage.notFoundResponse(req, res, `Cannot find item with id=${id}.`);
      }
    } catch (err) {
      handleMessage.errorResponse(req, res, err.message);
    }
    console.log(handleMessage);
  };


