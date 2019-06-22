// fetch("http://localhost:3000/journalEntries")
//     .then(entries => entries.json())  // Parse as JSON
//     .then(parsedentries => {
//         renderJournalEntries(parsedentries)
//         })
   

        /*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)


   API.getJournalEntries () 
        .then(parsedentries =>{
            renderJournalEntries(parsedentries)
        })
   
   
   
   
   
   
   // What should happen when we finally have the array?
  




// console.log(makeJournalEntryComponent);




// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

// src/scripts/journal.js

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/


// Invoke the render function
// renderJournalEntries(journalEntries);


