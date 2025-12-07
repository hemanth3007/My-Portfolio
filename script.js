if (window.Typed) {
  const typedElement = document.getElementById("element");
  if (typedElement) {
    new Typed("#element", {
      strings: ["UI Designer", "Web Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const navLinks = document.querySelectorAll("nav .right ul a");

if (navLinks.length > 0) {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath && linkPath.endsWith(currentPath)) {
      link.style.color = "rgb(139, 139, 229)"; 
      link.style.fontWeight = "600";
    }
  });
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
