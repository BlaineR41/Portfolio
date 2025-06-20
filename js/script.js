/* ========================= typing animation ===========================*/
var typed = new Typed(".typing", {
    strings: ["","Web Designer", "Full Stack JavaScript Developer","Front-End Web Developer", "Visionary"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/* ========================= Contact Form Variables ===========================*/
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var submitSuccess = document.getElementById('submit-success');

/* ========================= Contact Form Functions ===========================*/
function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validateEmail(){
    var email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Please enter a valid email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validateSubject(){
    var subject = document.getElementById('subject').value;
    
    if(subject.length == 0){
        subjectError.innerHTML = 'Subject is required';
        return false;
    }
    subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true
}

function validateMessage(){
    var message = document.getElementById('message').value;
    
    if(subject.length == 0){
        messageError.innerHTML = 'Message is required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true

}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please complete required fields';
        setTimeout(function(){ submitError.style.display = 'none';}, 3000);
        return false;
    }
    submitSuccess.innerHTML = 'Message Sent Successfully';
    return true

}

/* ========================= Contact Form ===========================*/
function sendEmail(){
    Email.send({
        SecureToken : "b7aafc7d-c1ef-4a33-8db9-7572e376552a",
        To : 'blaine@greatdaydesigns.co',
        From : "blaine@greatdaydesigns.co",
        Subject : "New Contact Form Inquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
    })/*.then(
    message => alert("Message Sent Successfully")
    );*/
}

/* ========================= Smooth Scroll ===========================*/
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 2000,
	speedAsDuration: true
});
