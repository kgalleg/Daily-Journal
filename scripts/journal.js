fetch("http://localhost:3000/journalEntries")
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedentries => {
        renderJournalEntries(parsedentries)
        })
        // What should happen when we finally have the array?
  



const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return ` 
    <div class="journalEntries">
                <h1>${journalEntry.dateOfentry}</h1>
                <section>${journalEntry.conceptOfentry}</section>
                <aside>${journalEntry.entryForToday}</aside>
                <aside>${journalEntry.moodForToday}</aside>
            </div>
    `
}
// console.log(makeJournalEntryComponent);




// Now write a function whose reponsibility is to iterate your array of journal entries and add them to the DOM.

// src/scripts/journal.js

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent (
          entries[i]
        )
    }

}

// Invoke the render function
// renderJournalEntries(journalEntries);


