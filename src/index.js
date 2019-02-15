import initializeHitPoints from './functions/initialize-hit-points.js';
import initializeGold from './functions/initialize-gold.js';

const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const signInFormData = new FormData(signInForm);

    const userProfile = {
        name: signInFormData.get('user-name'),
        race: signInFormData.get('race'),
        hp: initializeHitPoints(signInFormData.get('race')),
        gold: initializeGold(signInFormData.get('race')),
    };

    const userProfileString = JSON.stringify(userProfile);
    window.localStorage.setItem(userProfile.name, userProfileString);

    const mapURL = 'map.html?name=' + encodeURIComponent(userProfile.name);    
    window.location = mapURL;
});