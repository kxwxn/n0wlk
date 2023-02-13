import { job } from "/src/data.js";

const socialMediaLink = document.querySelector(".external-link");
socialMediaLink.classList.add("marquee-wrapper");

const loopFt = job.forEach((y, i) => {
  const third = document.createElement("h1");
  const url = y.url;
  const text = y.text;
  const line = y.line;
  third.innerHTML = line;
  socialMediaLink.append(third);
  const email = document.querySelectorAll(".email")[i];
  email.innerText = `${text}`;
  third.className = "marquee-component";
});
