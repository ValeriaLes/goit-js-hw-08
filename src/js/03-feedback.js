import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input[type="email"]')
const messageInput = document.querySelector('textarea')
const formData = {}

populateInputArea()

form.addEventListener('input', onFormInput)

function onFormInput (event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    
}

function populateInputArea () {
    const savedFormData = JSON.parse(localStorage.getItem("feedback-form-state"))
    
    if(savedFormData) {

        emailInput.value = savedFormData.email;
        messageInput.value = savedFormData.message
        }
}


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData)
    event.target.reset()
    localStorage.removeItem("feedback-form-state");

}