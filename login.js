// JavaScript for Hospital.com

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Form validation for login
    const loginForm = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    loginForm.addEventListener("submit", function (event) {
      // Prevent form submission
      event.preventDefault();
  
      // Retrieve values
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Validation
      if (!username) {
        alert("Username is required.");
        usernameInput.focus();
        return;
      }
  
      if (!password) {
        alert("Password is required.");
        passwordInput.focus();
        return;
      }
  
      // Simulate login success
      alert(`Welcome, ${username}!`);
      // You can redirect to a dashboard or other page here
      window.location.href = "index.html";
    });
  
    // Add flash animation to the brand name
    const brandName = document.querySelector(".brand-name h2");
    brandName.addEventListener("mouseover", () => {
      brandName.classList.add("animated", "flash");
    });
  
    brandName.addEventListener("mouseout", () => {
      brandName.classList.remove("animated", "flash");
    });
  
    // Add smooth scrolling for footer links
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1); // Remove `#`
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
  