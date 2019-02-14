import initializeHitPoints from './functions/initialize-hit-points.js';
import initializeGold from './functions/initialize-gold.js';

const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const signInFormData = new FormData(signInForm);

    const initialHitPoints = initializeHitPoints(signInFormData.get('race'));
    const initialGold = initializeGold(signInFormData.get('race'));

    const userProfile = {
        name: signInFormData.get('user-name'),
        race: signInFormData.get('race'),
        hp: initialHitPoints,
        gold: initialGold
    };

    console.log(userProfile);
});