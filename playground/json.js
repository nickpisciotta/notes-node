// var obj = {
//   name: "Nick"
// }; 

// var stringObj = JSON.stringify(obj); 

// console.log(stringObj); 
// console.log(typeof stringObj); 


// var personString = '{"name": "Nick", "age": 26}';
// var person = JSON.parse(personString);  


const fs = require('fs'); 

var originalNote = {
  title: "Some title", 
  body: "Some body" 
}; 

var originalNoteString = JSON.stringify(originalNote); 

fs.writeFileSync('notes.json', originalNoteString); 

var noteString = fs.readFileSync('notes.json'); 

var note = JSON.parse(noteString); 
console.log(typeof note); 
console.log(note.title); 