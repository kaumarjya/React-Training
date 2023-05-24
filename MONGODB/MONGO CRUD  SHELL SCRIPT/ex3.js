//connect to the studentsDetail database
var db = connect('127.0.0.1:27017/studentsDetail'),
    allstudentsDetail = null;


//search for the document whose name property is: "Don Draper"
db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Avijit'){
   // console.log(thisDoc)
    //update the record that contains "Donald Draper" and change it to "Dick Whitman"
    db.names.updateOne( { "_id" : thisDoc._id }, {$set:{ "name": "Rahul" }} );
  }; 
});

//set a reference to all documents in the database
allstudentsDetail = db.names.find();

//iterate the names collection and output each document
while (allstudentsDetail.hasNext()) {
   printjson(allstudentsDetail.next());
}