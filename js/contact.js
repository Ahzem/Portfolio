const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
// prevent the form submit from refreshing the page
event.preventDefault();

const { name, email, message } = event.target;

    // Use your API endpoint URL you copied from the previous step
const endpoint =
    "https://t1l3clfutj.execute-api.eu-north-1.amazonaws.com/default/sendContactEmail";
// We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
    senderName: name.value,
    senderEmail: email.value,
    message: message.value
});
const requestOptions = {
    method: "POST",
    body
};
    fetch(endpoint, requestOptions)
    .then((response) => {
        if (response.status === 200) {
            Swal.fire({
                title: "Message Sent",
                text: "Thank you for reaching out to me. I will get back to you as soon as possible.",
                icon: "success",
                confirmButtonText: "OK"
            });
            form.reset();
        } else {
            Swal.fire({
                title: "Message Not Sent",
                text: "There was an error sending your message. Please try again later.",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    })
    .catch((error) => {
        Swal.fire({
            title: "Message Not Sent",
            text: "There was an error sending your message. Please try again later.",
            icon: "error",
            confirmButtonText: "OK"
        });
    });
});