const gitHub = new Github;
const ui = new Ui;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    //getinput text

    const userText = e.target.value;
    if(userText !== ''){
        gitHub.getUser(userText)
            .then((data) => {
                if(data.profileData.message === 'Not Found'){
                        ui.showAlert('User Not Found','alert alert-warning');
                }
                else
                {
                    ui.showProfile(data.profileData);
                }
            });
    }
    else{
        //clear profile
        ui.clearProfile();
    }
    
});