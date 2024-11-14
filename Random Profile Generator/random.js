document.getElementById('generate-profile').addEventListener('click',generateUserProfile);

function generateUserProfile(){
    fetch('https://randomuser.me/api/') //fetching through random user api
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        const userProfile = document.getElementById('user-profile');
    
        userProfile.innerHTML = `
            <div class="user-info">
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <img src="${user.picture.large}" alt="User Picture">
            </div>
        `;
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        document.getElementById('user-profile').innerHTML = '<p>Failed to load user profile.</p>';
    });
}