const signInForm = document.getElementById('sign-in');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const signInFormData = new FormData(signInForm);

    // hitPoints = produceHitPoints(signInFormData.get('race'));

    const userProfile = {
        name: signInFormData.get('user-name'),
        race: signInFormData.get('race')
    };

    console.log(userProfile);
});