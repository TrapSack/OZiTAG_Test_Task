window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth < 900) {
    document.querySelector(".btn").addEventListener("click", (e) => {
      if (document.querySelector(".menu").style.display === "none") {
        document.querySelector(".menu").style.display = "flex";
      } else {
        document.querySelector(".menu").style.display = "none";
      }
    });

    const list = document.querySelector(".list");

    list.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      const div = e.target.parentNode.querySelector(".list-container");
      if (div.style.display !== "flex") div.style.display = "flex";
      else div.style.display = "none";
    });

    const paragraph = document.querySelectorAll(".list-container");

    paragraph.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target.tagName !== "BUTTON" || !e.target.hasChildNodes()) return;

        const ul = e.target.parentNode.querySelector(".sublist");
        if (ul.style.display !== "flex") ul.style.display = "flex";
        else ul.style.display = "none";
      });
    });
  } else {
    document.querySelector(".menu").style.display = "flex";
  }
});
