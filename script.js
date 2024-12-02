<script>
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Capture form data
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        // Store in localStorage (optional)
        localStorage.setItem("formData", JSON.stringify(data));

        console.log("Form Submitted Data:", data);
        alert("Form submitted successfully!");
    });
</script>
