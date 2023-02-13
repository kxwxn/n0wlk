// const currentWindow = document.createElement("h1");
// const cwSize = document.createTextNode(
//     `${window.innerHeight} x ${window.innerWidth}`
//   );

// entry.appendChild(currentWindow);
// currentWindow.appendChild(cwSize);
// currentWindow.className = "cr-window";

// window.addEventListener("resize", (e) => {
//   let cwidth = e.target.innerWidth;
//   let cheight = e.target.innerHeight;
//   currentWindow.className = "cg-window";
//   currentWindow.innerText = `current ${cheight} x ${cwidth}`;
// });

// const newDiv = document.createElement("h2");

// const newDiv2 = document.createElement("h3");
// const newText = document.createTextNode("pink!");

// const newDiv3 = document.createElement("h4");
// const newText2 = document.createTextNode("hola!");

// newDiv.innerText = "hihihi!";

// entry.innerHTML = "<h1>entry point!</h1>";
// entry.appendChild(newDiv);

// newDiv2.appendChild(newText);
// entry.appendChild(newDiv2);

// newDiv3.appendChild(newText2);

// entry.insertBefore(newDiv3, newDiv);
// entry.appendChild(newDiv);
// entry.insertBefore(newDiv, newDiv3);
import { photo } from "/src/data.js";

const entry = document.getElementById("root");
const images = document.createElement("div");
entry.appendChild(images);
images.className = "images";

const pictureAnchor = photo.forEach((a, i) => {
  let url = a.url;
  let frame = document.createElement("a");
  let imgContainer = document.createElement("div");
  frame.href = "";
  imgContainer.className = "img-box";
  let pic = document.createElement("img");
  pic.className = "image";
  let imgSrc = (pic.src = `${url}`);
  frame.append(pic);
  imgContainer.append(frame);
  images.append(imgContainer);
});
