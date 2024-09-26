document.getElementById("vendor-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const weddingDate = document.getElementById("weddingDate").value;
    const guestCount = document.getElementById("guestCount").value;
    const vendorType = document.getElementById("vendorType").value;
    const servicesRequired = document.getElementById("servicesRequired").value;

    // Display a success message (You can replace this with actual submission logic)
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = `Thank you, ${firstName}! Your request for a ${vendorType} has been submitted.`;
    messageDiv.classList.remove("hidden");

    // Optionally, reset the form
    this.reset();
});
