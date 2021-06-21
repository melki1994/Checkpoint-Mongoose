//Installing and setting up Mongoose:
const mongoose = require('mongoose');
const Person = require('./person');

// Connecting to DB:
const uri = "mongodb+srv://Takwa:takwa54321@cluster0.s6gbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => {
    console.log("connected to database")
  })
  .catch(err => console.log(err));

// //creating and a person record based on Person modal
// //then saving the record
// const newPerson = require ('./person')
// const person = newPerson({
//     name: "Takwa Melki",
//     age: 27,
//     favoriteFoods: ["Pizza", "Noddles"]
// })
// person.save(function (err, data) {
//     try {
//         console.log("person saved")
//     } catch (error) {
//         console.log(error)
//     }
// })

// //creating an array of people
// const arrayOfPeople = [{
//     name: "Nidhal",
//     age: 33,
//     favoriteFoods: ["burritos", "Pizza", "Sandwich"]
// }, {
//     name: "Mariem",
//     age: 24,
//     favoriteFoods: ["Salad", "Pasta", "Caesar Salad"]
// }, {
//     name: "Ahmed",
//     age: 29,
//     favoriteFoods: ["Hamburger","roast chicken","burritos"]
//     }]


// //creating many records using model.create()
//      const people = newPerson.create(arrayOfPeople,function (err, data) {
//       try {
//           console.log("person saved")
//       } catch (error) {
//           console.log(error)
//       }
//   });

//   //searching through the database
//     Person.find({name: "Nidhal"},(err,data)=>{
//         if (err) throw (err)
//         console.log(data)});

//     //searching for a single matching document from the database with a favoriteFoods including Pizza
//     Person.findOne({favoriteFoods: { $in: ["Pizza"]}},(err,data)=>{
//         if (err) throw (err)
//         console.log(data)});    

//     //finding the only person having this id:60ccfaa9441ac02f90fbeca4
//      Person.findById({_id: "60ccfaa9441ac02f90fbeca4"},(err,data)=>{
//         if (err) throw (err)
//         console.log(data)});    

//     // finding a person by id then adding "hamburger" to the person's favoriteFoods then  
// //saving the change
// Person.findByIdAndUpdate({_id: "60ccfaa9441ac02f90fbeca4"}, {$push: {favoriteFoods:"hamburger"}},
// (function (err, data) {
//     try {
//         console.log("person saved")
//     } catch (error) {
//         console.log(error)
//     }
// }) )

//     //Perform New Updates on a Document Using model.findOneAndUpdate()
//     Person.findOneAndUpdate({name: "Mariem"},{$set: {age: 20}}, {new: true},
//     (function (err, data) {
//         try {
//             console.log("person saved")
//         } catch (error) {
//             console.log(error)
//         }
//     }))

//     //Delete One Document Using model.findByIdAndRemove
//     Person.findByIdAndRemove({_id: "60ccfaa9441ac02f90fbeca4"},(err,data)=>{
//         if (err)throw err
//         console.log(data)
//         })

//         //MongoDB and Mongoose - Delete Many Documents with model.remove()
//         Person.remove({name: "Mary"}, (err, date) => {
//             try {
//                 console.log("person removed")
//             } catch (error) {
//                 console.log(error)
//             }
//         })

//         //Chain Search Query Helpers to Narrow Search Results
        Person.find({favoriteFood:{$in:["burritos"]}}).sort({ name: "asc" })
              .limit(2)
              .select("-age")
              .exec((err, data) => {
                try {
                    console.log(data)
                } 
                catch {
                    console.log(err)
                }
            })