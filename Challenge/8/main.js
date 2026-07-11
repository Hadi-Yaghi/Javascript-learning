let Header = document.querySelector(".website-head");

Header.style.display = "flex";
  Header.style.backgroundColor = "rgb(255, 255, 255)";
  Header.style.justifyContent = "space-between";
  Header.style.alignItems = "center";
  Header.style.padding = "20px";    

let logo = document.querySelector(".logo");
logo.style.fontWeight = "bold";
logo.style.fontSize = "26px"
logo.style.color="rgb(35,169,110)";

let ul = document.querySelector(".menu");
ul.style.padding="0px"
ul.style.margin="0px"
ul.style.display="flex"
ul.style.listStyle="none";
ul.style.gap="20px";


let content = document.querySelector(".content");

content.style.display = "flex";
content.style.padding = "20px";
content.style.flexWrap = "wrap";
content.style.justifyContent = "flex-start";
content.style.gap = "20px";
content.style.minHeight = "calc(100vh - 142px)";
content.style.boxSizing = "border-box";

let i = 1;

while (i <= 15) {
  let product = document.createElement("div");
  product.className = "product";

  let span = document.createElement("span");
  span.textContent = i;

  let text = document.createTextNode("Product");

  product.appendChild(span);
  product.appendChild(text);
  content.appendChild(product);

  product.style.padding = "20px";
  product.style.backgroundColor = "rgb(255,255,255)";
  product.style.border = "1px solid rgb(221,221,221)";
  product.style.width = "calc((100% - 60px) / 3)";
  product.style.boxSizing = "border-box";
  product.style.textAlign = "center";
  product.style.color = "rgb(136,136,136)";
  product.style.borderRadius = "6px";

  span.style.display = "block";
  span.style.fontSize = "40px";
  span.style.color = "black";
  span.style.fontWeight = "bold";
  span.style.marginBottom = "10px";
  span.style.marginTop = "10px";

  i++;
}

let footer = document.querySelector(".footer");
footer.style.backgroundColor="rgb(35,169,110)";
footer.style.fontSize="26px";
footer.style.textAlign = "center";
footer.style.padding="20px";
footer.style.color="rgb(255,255,255)";
