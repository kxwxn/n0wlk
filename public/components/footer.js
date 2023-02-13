import { footer } from "/src/data.js";

const footerLink = document.querySelector(".footer");
footerLink.classList.add("marquee-wrapper");

const loopEx = footer.forEach((y, i) => {
  const second = document.createElement("h1");
  const exLink = document.createElement("a");
  const url = y.url;
  const title = y.title;
  exLink.href = `${url}`;
  exLink.innerText = `${title}`;
  second.append(exLink);
  footerLink.append(second);
  second.className = "marquee-component";
});
