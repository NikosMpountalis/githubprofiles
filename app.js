//Init github
const github = new Github;
//Init UI
const ui = new UI;


// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener 
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // make hhtp call through github
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});