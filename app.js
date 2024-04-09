document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".tabs-head-buttons a");
  const githubLink = document.querySelector(".navigation-site-item.github");
  const linkedinLink = document.querySelector(".navigation-site-item.linkedin");

  if (githubLink) {
    githubLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.open("https://github.com/olegklyufinskyy", "_blank");
    });
  }

  if (linkedinLink) {
    linkedinLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.open("https://www.linkedin.com/in/oleg-klyufinskyy/", "_blank");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop =
          targetSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 50, 
          behavior: "smooth", 
        });
      }
    });
  });
});
