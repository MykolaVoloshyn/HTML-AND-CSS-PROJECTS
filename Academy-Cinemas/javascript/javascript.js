//Initialize Popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

popoverTriggerList.forEach(function (element) {
    let imgSrc = element.getAttribute("data-bs-img");
    let content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: "hover",
    });
});

//Initialize Toast
const toastElList = document.querySelectorAll(".toast");
const toastList = [...toastElList].map((toastEl) => new bootstrap.Toast(toastEl));

//Function to display toast with selected options
function displaySelectedMovieOptions() {
    let movie =
        document.getElementById("movieSelect").options[
            document.getElementById("movieSelect").selectedIndex
        ].text;
    let time =
        document.getElementById("timeSelect").options[
            document.getElementById("timeSelect").selectedIndex
        ].text;
    let quantity = document.getElementById("quantity").value;

    //Passes info about purchased tickets into the toast body
    let toastContent = document.getElementsByClassName("toast-content");
    toastContent[0].textContent = "Purchase confirmed for: " + movie;
    toastContent[1].textContent = "Time: " + time;
    toastContent[2].textContent = "Tickets: " + quantity;

    let toast = new bootstrap.Toast(document.getElementById("toastDisplay"));

    //Displays spinner
    document.getElementsByClassName("custom-spinner")[0].style.display = "inline-block";

    setTimeout(() => {
        document.getElementsByClassName("custom-spinner")[0].style.display = "none";
        toast.show();
    }, 3000);
}

function buyTickets() {
    displaySelectedMovieOptions();
}
