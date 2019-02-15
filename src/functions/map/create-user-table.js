function createUserTable(section, entries) {
    const userTable = document.createElement('table');
    // we don't want to display completed object
    for(let i = 0; i < entries.length; i++) {
        const key = entries[i][0];
        const value = entries[i][1];
        const userEntryRow = document.createElement('tr');
        const userKeyTD = document.createElement('td');
        const userValueTD = document.createElement('td');
        userKeyTD.textContent = key + ': ';
        userValueTD.textContent = value;
        userEntryRow.appendChild(userKeyTD);
        userEntryRow.appendChild(userValueTD);
        userTable.appendChild(userEntryRow);
    }
    section.appendChild(userTable);
}

export default createUserTable;