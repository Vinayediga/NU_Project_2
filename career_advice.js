
const Form = document.getElementById('form')
let answers = {}
const profile_element = document.getElementById('profile-name')
const user_name = JSON.parse(localStorage.getItem('user-name'))




if(user_name){
    console.log(user_name);
    
    profile_element.innerText = user_name
}
else{
    profile_element.innerText = ""
}

Form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const subject = document.querySelector('input[name= "subject"]:checked')
    answers.subject = subject ? subject.value: null
    const skill = document.querySelector('input[name= "skill"]:checked')
    answers.skill = skill ? skill.value:null
    const career = document.querySelector('input[name= "career"]:checked')
    answers.career = career?career.value : null
    const environment = document.querySelector('input[name= "environment"]:checked')
    answers.environment = environment ? environment.value : null

    console.log(answers);
    localStorage.setItem('answers',JSON.stringify(answers))
    

})
function toggleNavbar() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('collapse');
}