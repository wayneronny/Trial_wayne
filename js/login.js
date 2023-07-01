function l() {
    // Get the values of the form fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
  
    // Create a new object to store the form data
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
  
    // Send the form data to the database
    fetch("http://127.0.0.1:5500/index.html", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }