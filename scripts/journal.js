/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

let journalEntries=[
{  
    dateOfentry: "June 3, 2019",
    conceptOfentry: "Loops and objects",
    entryForToday: "Today we went over objects which are containeres for data.",
    moodForToday: "excited"
},
 {
    dateOfentry: "June 4, 2019",
    conceptOfentry: "concept covered goes here",
    entryForToday: "Today we went over objects which are containeres for data.",
    moodForToday: "excited"
},
 {
    dateOfentry: "June 5, 2019",
    conceptOfentry: "Loops and objects",
    entryForToday: "Today we went over other stuff.",
    moodForToday: "mind-blown"
}]

// journalEntries.push(journalEntry1, journalEntry2, journalEntry3);
// you put the container that the stuff is going into, so here the entries will go into the journalentries array
// make sure to go to the server in the html File, if not ,it will not Work.

console.log(journalEntries);


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
renderJournalEntries(journalEntries);

