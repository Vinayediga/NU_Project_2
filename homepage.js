// JavaScript for sidebar toggle

const profile_element = document.getElementById('profile-name')
const user_name = JSON.parse(localStorage.getItem('user-name'))




if(user_name){
    console.log(user_name);
    
    profile_element.innerText = user_name
}
else{
    profile_element.innerText = ""
}