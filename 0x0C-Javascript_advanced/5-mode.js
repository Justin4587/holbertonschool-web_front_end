

const changeMode = (size, weight, transform, background, color) => {
  document.body.style.fontSize  = size;
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
}

const main = () => {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let para = document.createElement("p");
  para.textContent = "welcome holberton!";
  document.body.appendChild(para);

  let spookybtn = document.createElement("button");
  spookybtn.innerHTML = "spooky";
  document.body.appendChild(spookybtn);
  spookybtn.onclick = spooky;

  let darkbtn = document.createElement("button");
  darkbtn.innerHTML = "dark mode";
  darkbtn.onclick = darkMode;
  document.body.appendChild(darkbtn);

  let screambtn = document.createElement("button");
  screambtn.innerHTML = "scream mode";
  screambtn.onclick = screamMode;
  document.body.appendChild(screambtn); 

}

main();
