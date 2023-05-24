//connect to the studentsDetail database
var db = connect('127.0.0.1:27017/studentsDetail'),
    allstudentsDetail = null;

    db.names.deleteOne({name:'Firoz'})
/*
//search for the document whose name property is: "Don Draper"
db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Firoz'){
    //remove the record that contains "Dick Whitman"
    db.names.deleteOne({ "_id" : thisDoc._id });
  }; 
});*/

//set a reference to all documents in the database
allstudentsDetail = db.names.find();

//iterate the names collection and output each document
while (allstudentsDetail.hasNext()) {
   printjson(allstudentsDetail.next());
}