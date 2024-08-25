// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js';
import { getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTiueVhvlajk26CKDs1_OKn9k5pE451v0",
  authDomain: "db-pr-project.firebaseapp.com",
  projectId: "db-pr-project",
  storageBucket: "db-pr-project.appspot.com",
  messagingSenderId: "966778441923",
  appId: "1:966778441923:web:297eda8a53ed24dc831276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const studentform = document.getElementById('studentForm')
const STD_LOGIN_BTN =  document.getElementById('login-btn');
const MENTOR_FORM = document.getElementById('mentor-reg-btn')
const MENTOR_LOGIN_BTN = document.getElementById('mentor-login-btn')





if(studentform){
studentform.addEventListener('submit', async (event) => {
    event.preventDefault();
    

    const STD_FULL_NAME = document.getElementById('studentName').value;
    const STD_EMAIL = document.getElementById('studentEmail').value;
    const PASSWORD = document.getElementById('studentPassword').value;
    const STD_DOB = document.getElementById('studentDOB').value;
    const STD_EDUCATIONAL_LEVEL = document.getElementById('educationLevel').value;
    const FIELD_OF_INTEREST = document.getElementById('fieldOfInterest').value;
    const STD_LOCATION = document.getElementById('studentLocation').value;
    
   




    const std_data = {
        STD_FULL_NAME:STD_FULL_NAME,
        STD_EMAIL:STD_EMAIL,
        PASSWORD:PASSWORD,
        STD_DOB:STD_DOB,
        STD_EDUCATIONAL_LEVEL:STD_EDUCATIONAL_LEVEL,
        FIELD_OF_INTEREST:FIELD_OF_INTEREST,
        STD_LOCATION:STD_LOCATION
    };
    if (PASSWORD !== "" && STD_EMAIL !== "" && PASSWORD.length >= 6) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, STD_EMAIL, PASSWORD);
            const user = userCredential.user;
            const docRef = await addDoc(collection(db, 'students'), std_data);
            console.log("Document written with ID: ", docRef.id);
            await updateProfile(user, { displayName: STD_FULL_NAME });
            console.log(user);
            

            const user_display_name = user.displayName
            console.log(user_display_name);
            localStorage.setItem('user-name', JSON.stringify(user_display_name));
            window.location.href = "homepage.html"
        } catch (error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
            console.log(errorMessage);
            
        }





    
    }

})
}
else if(STD_LOGIN_BTN){
    const LOGIN_EMAIL =  document.getElementById('loginEmail').value;
    const LOGIN_PASSWORD =  document.getElementById('loginPassword').value;
    const GOOGLE_LOGIN_BTN = document.getElementById('google-login-btn')
   STD_LOGIN_BTN.addEventListener('click' ,async function(e){
   e.preventDefault()
   
   try {
    const userCredential = await signInWithEmailAndPassword(auth, LOGIN_EMAIL, LOGIN_PASSWORD);
    const user = userCredential.user;
    
    // Update UI or perform actions after successful login
    const displayName = user.displayName;
    console.log(displayName);
    localStorage.setItem('user-name', JSON.stringify(displayName));
   
    // Redirect to homepage after successful login
    window.location.href = "homepage.html"
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
})
GOOGLE_LOGIN_BTN.addEventListener('click', ()=> {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; 
        const user = result.user;
        alert(`User logged in: ${JSON.stringify(user)}`);
        const displayName = user.displayName;
        console.log("User's display name:", displayName);
  
        localStorage.setItem('user-name', JSON.stringify(displayName));
        console.log(user);
         window.location.href = "homepage.html"
        
      })
      .catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage)
      
      });
  
    })
}
else if(MENTOR_FORM){
    MENTOR_FORM.addEventListener('click', async (event) => {
        event.preventDefault();
        
    
        const MENTOR_FULL_NAME = document.getElementById('mentorName').value;
        const MENTOR_EMAIL = document.getElementById('mentorEmail').value;
        const MENTOR_PASSWORD = document.getElementById('mentorPassword').value;
        const MENTOR_PROFFESSION = document.getElementById('mentorProfession').value;
        const MENTOR_EXPERIENCE = document.getElementById('mentorExperience').value;
        const MENTOR_FIELD_OF_EXPERTICE = document.getElementById('fieldOfExpertise').value;
        const MENTOR_LOCATION = document.getElementById('mentorLocation').value;
        
       
    
    
    
    
        const mentor_data = {
            MENTOR_FULL_NAME:MENTOR_FULL_NAME,
            MENTOR_EMAIL:MENTOR_EMAIL,
            MENTOR_PASSWORD:MENTOR_PASSWORD,
            MENTOR_PROFFESSION:MENTOR_PROFFESSION,
            MENTOR_EXPERIENCE:MENTOR_EXPERIENCE,
            MENTOR_FIELD_OF_EXPERTICE:MENTOR_FIELD_OF_EXPERTICE,
            MENTOR_LOCATION:MENTOR_LOCATION
        };
        if (MENTOR_PASSWORD !== "" && MENTOR_EMAIL !== "" && MENTOR_PASSWORD.length >= 6) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, MENTOR_EMAIL, MENTOR_PASSWORD);
                const user = userCredential.user;
                const docRef = await addDoc(collection(db, 'mentors'), mentor_data);
                console.log("Document written with ID: ", docRef.id);
                await updateProfile(user, { displayName: MENTOR_FULL_NAME });
                console.log(user);
                
    
                const user_display_name = user.displayName
                console.log(user_display_name);
                localStorage.setItem('user-name', JSON.stringify(user_display_name));
                 window.location.href = "homepage.html"
            } catch (error) {
                
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
                console.log(errorMessage);
                
            }
    
    
    
    
    
        
        }
    
    })
}
else if(MENTOR_LOGIN_BTN){

    const LOGIN_EMAIL =  document.getElementById('loginEmail').value;
    const LOGIN_PASSWORD =  document.getElementById('loginPassword').value;
    const GOOGLE_LOGIN_BTN = document.getElementById('google-login-btn')
   MENTOR_LOGIN_BTN.addEventListener('click' ,async function(e){
   e.preventDefault()
   
   try {
    const userCredential = await signInWithEmailAndPassword(auth, LOGIN_EMAIL, LOGIN_PASSWORD);
    const user = userCredential.user;
    
    // Update UI or perform actions after successful login
    const displayName = user.displayName;
    console.log(displayName);
    localStorage.setItem('user-name', JSON.stringify(displayName));

    // Redirect to homepage after successful login
    window.location.href = "homepage.html"
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
  }
})
GOOGLE_LOGIN_BTN.addEventListener('click', ()=> {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; 
        const user = result.user;
        alert(`User logged in: ${JSON.stringify(user)}`);
        const displayName = user.displayName;
        console.log("User's display name:", displayName);
  
        localStorage.setItem('user-name', JSON.stringify(displayName));
        console.log(user);
        window.location.href = "homepage.html"
        
      })
      .catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(errorMessage)
      
      });
  
    })
}
