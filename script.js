// script.js Web Programming Final Project By Harmony Bato

// MEMBERSHIP PAGE - Form Validation
function doSubmit() {

  clearErrors();

  var formIsValid    = true;
  var fullName       = document.RegisterForm.fullName.value;
  var email          = document.RegisterForm.email.value;
  var phone          = document.RegisterForm.phone.value;
  var age            = document.RegisterForm.age.value;
  var fitnessGoals   = document.RegisterForm.fitnessGoals.value;
  var membershipType = document.RegisterForm.membershipType.value;
  var referral       = document.RegisterForm.referral.value;

  // Name Validation
  if (fullName.length === 0) {
    document.getElementById("fullNameError").innerHTML = "Please enter your full name.";
    formIsValid = false;
  }

  // Email Validation
  if (email.length === 0) {
    document.getElementById("emailError").innerHTML = "Please enter your email address.";
    formIsValid = false;
  } else {
    var atIndex  = email.indexOf("@");
    var dotIndex = email.lastIndexOf(".");
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email (example@email.com).";
      formIsValid = false;
    }
  }

  // Phone Validation
  if (phone.length === 0) {
    document.getElementById("phoneError").innerHTML = "Please enter your phone number.";
    formIsValid = false;
  } else if (phone.length !== 12 || phone[3] !== "-" || phone[7] !== "-") {
    document.getElementById("phoneError").innerHTML = "Phone must be in format: 555-867-5309";
    formIsValid = false;
  }

  // Age Validation
  if (age.length === 0) {
    document.getElementById("ageError").innerHTML = "Please enter your age.";
    formIsValid = false;
  } else if (parseInt(age) != age) {
    document.getElementById("ageError").innerHTML = "Please enter a valid whole number for age.";
    formIsValid = false;
  } else if (age < 18) {
    document.getElementById("ageError").innerHTML = "You must be at least 18 years old to register.";
    formIsValid = false;
  } else if (age >= 100) {
    document.getElementById("ageError").innerHTML = "Please enter a valid age under 100.";
    formIsValid = false;
  }

  // Membership Validation
  if (membershipType === "") {
    document.getElementById("membershipError").innerHTML = "Please select a membership type.";
    formIsValid = false;
  }

  // Fitness Goals Validation
  if (fitnessGoals.length === 0) {
    document.getElementById("fitnessGoalsError").innerHTML = "Please tell us about your fitness goals.";
    formIsValid = false;
  }

  // Program Validation
  var programBoxes    = document.getElementsByName("programs");
  var programSelected = false;
  for (var i = 0; i < programBoxes.length; i++) {
    if (programBoxes[i].checked) { programSelected = true; }
  }
  if (!programSelected) {
    document.getElementById("programsError").innerHTML = "Please select at least one program.";
    formIsValid = false;
  }

  // Referral Validation
  if (referral === "") {
    document.getElementById("referralError").innerHTML = "Please tell us how you heard about us.";
    formIsValid = false;
  }

  // Clear the form and confirm submission
  if (formIsValid) {
    doClear();
    alert("Your form has been submitted! We will contact you shortly.");
  }
}

// Clear Form Function
function doClear() {
  document.RegisterForm.fullName.value       = "";
  document.RegisterForm.email.value          = "";
  document.RegisterForm.phone.value          = "";
  document.RegisterForm.age.value            = "";
  document.RegisterForm.membershipType.value = "";
  document.RegisterForm.fitnessGoals.value   = "";
  document.RegisterForm.referral.value       = "";

  var programBoxes = document.getElementsByName("programs");
  for (var i = 0; i < programBoxes.length; i++) {
    programBoxes[i].checked = false;
  }

  clearErrors();
}

// Clear Error Messages
function clearErrors() {
  document.getElementById("fullNameError").innerHTML     = "";
  document.getElementById("emailError").innerHTML        = "";
  document.getElementById("phoneError").innerHTML        = "";
  document.getElementById("ageError").innerHTML          = "";
  document.getElementById("membershipError").innerHTML   = "";
  document.getElementById("fitnessGoalsError").innerHTML = "";
  document.getElementById("programsError").innerHTML        = "";
  document.getElementById("referralError").innerHTML     = "";
}

// FEATURES PAGE - Photo Slideshow
var slideImages   = ["imgs/widepilates.webp", "imgs/wideboxing.jpg", "imgs/wideweights.webp", "imgs/widebath.jpeg"];
var slideCaptions = ["Pilates Studio", "Boxing & MMA Area", "Dumbbell & Strength Zone", "Women's Locker Room & Lounge"];
var slideIndex    = 0;

// Back and Next Button Functions
function doBack() {
  if (slideIndex > 0) {
    slideIndex--;
    updateSlide();
  }
}

function doNext() {
  if (slideIndex < slideImages.length - 1) {
    slideIndex++;
    updateSlide();
  }
}

// Update the slideshow image and caption
function updateSlide() {
  document.getElementById("slideshow-img").src           = slideImages[slideIndex];
  document.getElementById("slideshow-caption").innerHTML = slideCaptions[slideIndex];
}
