//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
let btns = document.querySelectorAll("input.modal-button");
//Defines all modals for each recipe
let modals = document.querySelectorAll(".recipe-modal");
//Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close-btn");

//When the user clicks the recipe button, open the modal
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        let modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";

        // setTimeout(() => {
        //     modal.style.display = "none";
        // }, 10000);
    };
}

//When the user clicks on <span> (x), close the modal
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (let index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    };
}

//EMAIL VALIDATION
document.getElementById("contactForm").addEventListener("submit", (event) => {
    //Overrides the default browser refresh when the submit button is pressed
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const validEmailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,4}$/;
    const validationMessage = document.getElementById("validateMsg");

    if (!firstName || !lastName || !phone || !message) {
        validationMessage.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
    } else if (!validEmailPattern.test(email)) {
        validationMessage.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
    } else {
        validationMessage.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById("subscription").checked,
    };

    console.log(JSON.stringify(formData));
});
