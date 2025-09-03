document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // stop normal form submit

        const formData = new FormData(form);

        try {
            const response = await fetch("sendMail.php", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.status === "success") {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thanks, I will reply soon.",
                    confirmButtonColor: "#3085d6"
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: result.message,
                    confirmButtonColor: "#d33"
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Server Error",
                text: "Something went wrong. Please try again later.",
                confirmButtonColor: "#d33"
            });
        }
    });
});
