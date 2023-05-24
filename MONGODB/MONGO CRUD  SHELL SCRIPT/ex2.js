//connect to the studentsDetail database
var db = connect('127.0.0.1:27017/studentsDetail'),
    allstudentsDetail = null;

//add more documents to the names collection
db.names.insertOne({'name' : 'Peter Campbell'});
db.names.insertOne({'name' : 'Betty Draper'});
db.names.insertOne({'name' : 'Joan Harris'});

//set a reference to all documents in the database
allstudentsDetail = db.names.find();

//iterate the names collection and output each document
while (allstudentsDetail.hasNext()) {
   printjson(allstudentsDetail.next());
}