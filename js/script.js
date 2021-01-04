function scrollSuave() {
   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

   function handleLink(event) {
      event.preventDefault();

      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   }

   linksInternos.forEach((link) => {
      link.addEventListener("click", handleLink);
   });
}
scrollSuave();

function animeScroll() {
   const animeElements = document.querySelectorAll(".js-anime");
   const windowHeight = window.innerHeight * 0.75;

   if (animeElements.length) {
      function handlerScroll() {
         animeElements.forEach((element) => {
            const heightFromTop = element.getBoundingClientRect().top;
            const heightTopVisible = heightFromTop - windowHeight;

            if (heightTopVisible < 0) {
               element.classList.add("ativo");
            }
         });
      }
      handlerScroll();

      window.addEventListener("scroll", handlerScroll);
   }
}
animeScroll();
