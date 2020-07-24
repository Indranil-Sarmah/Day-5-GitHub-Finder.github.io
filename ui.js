class Ui{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        const mem = user.created_at;
        //console.log(typeof(mem));
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row>
                    <div class="col-md-3 ml-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary p-2 mt-2 ">Public Repos:${user.public_repos}</span>

                        <span class="badge badge-secondary p-2 mt-2">Public Gists:${user.public_gists}</span>

                        <span class="badge badge-success p-2 mt-2">Followers:${user.followers}</span>

                        <span class="badge badge-info p-2 mt-2">Following:${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item text-light"><span class="design">Company:</span> ${user.company}</li>

                            <li class="list-group-item text-light"><span class="design">Website/Blog:</span> ${user.blog}</li>

                            <li class="list-group-item text-light"><span class="design">Location:</span> ${user.location}</li>

                            <li class="list-group-item text-light"><span class="design">Member Since:</span> ${mem.substring(0,10)}</li>
                        </ul>
                    </div>

                </div>
                <h3 class="page-heading mb-3>Latest Repositories</h3>
                <div id="repos"></div>
                <div class="row">
                    <div class="col md-12">
                    <a href ="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View User Profile at GitHub</a>
                    </div>
                </div>
            </div>
          
        `;
    }


    //show repos
    showRepos(repos){
        let output ='';
        repos.forEach(repo => {
            output +=`
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary p-2 mt-2 ">Stars:${repo.stargazers_count}</span>

                            <span class="badge badge-secondary p-2 mt-2">Watchers:${repo.watchers_count}</span>

                            <span class="badge badge-success p-2 mt-2">Forks:${repo.forks_count}</span>

                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('repos').innerHTML=output;
    }
    //alert if nothing is found
    showAlert(message,className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className=className;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');

        container.insertBefore(div,search);
        setTimeout(()=>{
            this.clearAlert();
        },2000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }

    }
    clearProfile(){
        this.profile.innerHTML='';
    }
}