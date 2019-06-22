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