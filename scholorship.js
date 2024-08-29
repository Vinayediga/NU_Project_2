
function toggleNavbar() {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('collapse');
}
  document.addEventListener('DOMContentLoaded', function () {
    

var length=0


const profile_element = document.getElementById('profile-name')
const user_name = JSON.parse(localStorage.getItem('user-name'))




if(user_name){
    console.log(user_name);
    
    profile_element.innerText = user_name
}
else{
    profile_element.innerText = ""
}
 var sch_data = [
    
    
    {
      name: "Tata Student Scholarship",
      eligibility: "Graduate students",
      award: "45,000 cash"
    },
    {
      name: "Infosys Foundation Scholarship",
      eligibility: "Undergraduate and graduate students",
      award: "60,000 cash"
    },
    {
      name: "Wipro Education Grant",
      eligibility: "Engineering students",
      award: "70,000 cash"
    },
    {
      name: "HDFC Bank Scholarship",
      eligibility: "Postgraduate students",
      award: "80,000 cash"
    },
    {
      name: "ICICI Bank Student Aid",
      eligibility: "High school students",
      award: "25,000 cash"
    },
    {
      name: "Reliance Jio Scholarship",
      eligibility: "Science students",
      award: "50,000 cash"
    },
    {
      name: "NTPC Education Fund",
      eligibility: "Technical course students",
      award: "90,000 cash"
    },
    {
      name: "L&T Financial Services Scholarship",
      eligibility: "Management students",
      award: "65,000 cash"
    },
    {
      name: "State Bank of India Scholarship",
      eligibility: "Medical students",
      award: "85,000 cash"
    },
    {
      name: "Indian Oil Scholarship",
      eligibility: "Engineering and technology students",
      award: "55,000 cash"
    },
    {
      name: "Mahindra Scholarship for Education",
      eligibility: "Underprivileged students",
      award: "30,000 cash"
    },
    {
      name: "Hindustan Unilever Scholarship",
      eligibility: "Arts students",
      award: "40,000 cash"
    },
    {
      name: "Bharti Airtel Merit Scholarship",
      eligibility: "Merit students in higher education",
      award: "95,000 cash"
    },
    {
      name: "Cadbury Scholarship Program",
      eligibility: "Commerce students",
      award: "50,000 cash"
    },
    {
      name: "Dr. Reddy’s Foundation Scholarship",
      eligibility: "Postgraduate research students",
      award: "100,000 cash"
    },
    {
      name: "Tata Consultancy Services Scholarship",
      eligibility: "Technology students",
      award: "70,000 cash"
    }
  ];

  length = sch_data.length

  for (let index = 1; index < sch_data.length; index++) {
    
    
    const para_1 = document.getElementById(`${index}-sch-name`)
    const para_2 = document.getElementById(`${index}-sch-eligibility`)
    const para_3 = document.getElementById(`${index}-sch-award`)
    para_1.innerText = sch_data[index].name
    para_2.innerText = sch_data[index].eligibility
    para_3.innerText = sch_data[index].award
    
  }
});
