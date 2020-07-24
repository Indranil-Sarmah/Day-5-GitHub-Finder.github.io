class Github{
    constructor(){

        var mykey = config.MY_KEY;
        var secretkey = config.SECRET_KEY;

        this.client_id = mykey;
        this.client_secret =secretkey;
    }
    async getUser(user){
        const ProfileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await ProfileResponse.json();
        
        return{
            profileData
        }
    }
}