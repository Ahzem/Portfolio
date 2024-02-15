function openForm() {
    document.getElementsByClassName("feedback__form")[0].style.display = "block";
}

function closeForm() {
    document.getElementsByClassName("feedback__form")[0].style.display = "none";
}


const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { message } = event.target;

  // Use your feedback API endpoint URL
  const endpoint = "https://x1quntseq0.execute-api.eu-north-1.amazonaws.com/default/feedbackForm";
  
  // Convert the feedback message to JSON format
  const body = JSON.stringify({ message: message.value });

  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
        if (response.status === 200) {
            Swal.fire({
            title: "Feedback Sent",
            text: "Thank you for your feedback!",
            icon: "success",
            confirmButtonText: "OK"
            });
            form.reset();
        } else {
            Swal.fire({
            title: "Feedback Not Sent",
            text: "An unknown error occurred.",
            icon: "error",
            confirmButtonText: "OK"
            });
        }
        })
        .catch((error) => {
            Swal.fire({
            title: "Feedback Not Sent",
            text: "An unknown error occurred.",
            icon: "error",
            confirmButtonText: "OK"
            });
        });
});
