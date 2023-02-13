import { navigation } from "/src/data.js";

const navBar = document.querySelector(".nav-bar");
navBar.classList.add("marquee-wrapper");

const loopNav = navigation.forEach((y, i) => {
  const first = document.createElement("h1");
  const navLink = document.createElement("a");
  const url = y.url;
  const title = y.title;
  navLink.href = `${url}`;
  navLink.innerText = `${title}`;
  first.append(navLink);
  navBar.append(first);
  first.className = "marquee-component";
});
