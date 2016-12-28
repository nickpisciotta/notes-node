console.log('Starting notes.js')

const fs = require('fs'); 

var addNote = (title, body) => {
  var notes = []; 
  var note = {
    title, 
    body
  }; 
  var notesString = fs.readFileSync('notes-data.json'); 
  notes = JSON.parse(notesString);
    
  notes.push(note); 
  fs.writeFileSync('notes-data.json', JSON.stringify(notes)); 
}; 

var getAll = () => {
  console.log("Getting all notes"); 
}; 

var getNote = (title) => {
  console.log("Reading Note:", title); 
}

var removeNote = (title) => {
  console.log("Remove Note:", title); 
}

module.exports = {
  addNote, 
  getAll, 
  getNote, 
  removeNote
}; 