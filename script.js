document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
// Floating Sidebar
function createFloatingSidebar() {
  const sidebar = document.createElement("div");
  sidebar.className = "floating-sidebar";

  // Social media buttons
  const socials = [
    { icon: "fab fa-facebook-f", tooltip: "Facebook", url: "#" },
    { icon: "fab fa-twitter", tooltip: "Twitter", url: "#" },
    { icon: "fab fa-instagram", tooltip: "Instagram", url: "#" },
    { icon: "fab fa-linkedin-in", tooltip: "LinkedIn", url: "#" },
    { icon: "fab fa-dribbble", tooltip: "Dribbble", url: "#" },
  ];

  socials.forEach((social) => {
    const btn = document.createElement("button");
    btn.className = "sidebar-button";
    btn.innerHTML = `
        <i class="${social.icon}"></i>
        <span class="sidebar-tooltip">${social.tooltip}</span>
      `;
    btn.addEventListener("click", () => {
      window.open(social.url, "_blank");
    });
    sidebar.appendChild(btn);
  });

  // Contact button
  const contactBtn = document.createElement("button");
  contactBtn.className = "sidebar-button contact-btn";
  contactBtn.innerHTML = `
      <i class="fas fa-envelope"></i>
      <span class="sidebar-tooltip">Contact Me</span>
    `;
  contactBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
  sidebar.appendChild(contactBtn);

  document.body.appendChild(sidebar);

  // Animate buttons on page load
  setTimeout(() => {
    const buttons = sidebar.querySelectorAll(".sidebar-button");
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.opacity = "1";
        btn.style.transform = "translateX(0)";
      }, index * 100);
    });
  }, 1000);
}

// Initialize floating sidebar when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Your existing code...

  // Add this line to initialize the sidebar
  createFloatingSidebar();

  // Your existing code...
});
