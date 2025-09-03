document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(this);
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.disabled = true;
    sendBtn.innerHTML = `Sending...<i class="fas fa-spinner fa-spin"></i> `;

    fetch("sendMail.php", {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "Thank you for contacting me. I’ll get back to you soon."
            });
            document.getElementById("contactForm").reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: data.message
            });
        }
    })
    .catch(() => {
        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Something went wrong. Please try again later."
        });
    })
    .finally(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = `Send Message <i class="fas fa-paper-plane"></i>`;
    });
});