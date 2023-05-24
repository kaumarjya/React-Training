//create the studentsDetail database and connect to it
var db = connect('127.0.0.1:27017/studentsDetail'),
    allstudentsDetail = null;

//create the names collection and add one document to it
db.names.insertMany(
    [
    
    {'name' : 'Firoz','grad':'BCA'},
    {'name' : 'Avijit','grad':'BCA'},
    {'fname':'Sumit'}
]);

//set a reference to all documents in the database
allstudentsDetail = db.names.find();

//iterate the names collection and output each document
while (allstudentsDetail.hasNext()) {
   printjson(allstudentsDetail.next());
};


