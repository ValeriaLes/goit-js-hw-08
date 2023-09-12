import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
let formData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
const { message, email } = form.elements;





populateInputArea()



form.addEventListener('input', throttle(onFormInput, 500))

function onFormInput (event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
    
}



function populateInputArea () {
 
     if(formData !== "") {
        email.value = formData.email
        message.value = formData.message 
        }
    
        if (email.value === 'undefined' || message.value === 'undefined') {
            email.value = ""
            message.value = ""
        }
    

    
}


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    if (email.value === "" || message.value.trim() === ""){
        const message = "Please fill in all the fields"
        return alert(message)
    }
    console.log(formData)
    event.target.reset()
    localStorage.removeItem("feedback-form-state");

   
}