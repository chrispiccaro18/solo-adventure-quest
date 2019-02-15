import createUserTable from '../functions/map/create-user-table.js';

const userSection = document.getElementById('user-section');

const searchParams = new URLSearchParams(window.location.search);
const nameToFind = searchParams.get('name');
const userProfileString = window.localStorage.getItem(nameToFind);
const userProfile = JSON.parse(userProfileString);

const userEntries = Object.entries(userProfile);
createUserTable(userSection, userEntries);