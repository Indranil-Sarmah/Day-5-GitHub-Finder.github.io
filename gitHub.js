class Github{
    constructor(){

        var mykey = config.MY_KEY;
        var secretkey = config.SECRET_KEY;
        this.repos_count =5;
        this.repo_sort ='created:asc';

        this.client_id = mykey;
        this.client_secret =secretkey;
    }
    async getUser(user){
        const ProfileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await ProfileResponse.json();
        const repos = await repoResponse.json();
        
        return{
            profileData,
            repos
        }
    }
}