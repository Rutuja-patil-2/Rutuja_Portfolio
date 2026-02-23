document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || email === "" || message === "") {
      showMessage("Please fill all fields ❌", "error");
      return;
    }

    // Simulate sending
    showMessage("Sending message...", "loading");

    setTimeout(() => {
      showMessage("Message Sent Successfully ✅", "success");

      form.reset(); // clear form
    }, 1500);
  });

  function showMessage(text, type) {
    messageBox.textContent = text;

    messageBox.classList.remove("success", "error", "loading");

    if (type === "success") {
      messageBox.classList.add("success");
    } else if (type === "error") {
      messageBox.classList.add("error");
    } else {
      messageBox.classList.add("loading");
    }
  }

});


// theme
document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("themeToggle");
  const icon = toggleBtn.querySelector("i");

  // Check saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.className = "fa fa-sun-o";
  }

  toggleBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      icon.className = "fa fa-sun-o";
      localStorage.setItem("theme", "dark");
    } else {
      icon.className = "fa fa-moon-o";
      localStorage.setItem("theme", "light");
    }

  });

});

// Resume Download 
document.addEventListener("DOMContentLoaded", function () {
  const resumeBtn = document.getElementById("resume");

  resumeBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "../resume.pdf";   // change path if needed
    link.download = "Rutuja_Patil_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


