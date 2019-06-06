/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

let journalEntries=[]
const journalEntry1 = {  
    date: "June 3, 2019",
    conceptCovered: "Loops and objects",
    longContent: "Today we went over objects which are containeres for data.",
    mood: "excited"
}
const journalEntry2 = {
    date: "June 3, 2019",
    conceptCovered: "concept covered goes here",
    longContent: "Today we went over objects which are containeres for data.",
    mood: "excited"
}
const journalEntry3 = {
    date: "June 5, 2019",
    conceptCovered: "Loops and objects",
    longContent: "Today we went over other stuff.",
    mood: "mind-blown"
}

journalEntries.push(journalEntry1, journalEntry2, journalEntry3);
// you put the container that the stuff is going into, so here the entries will go into the journalentries array
// make sure to go to the server in the html File, if not ,it will not Work.

console.log(journalEntries);