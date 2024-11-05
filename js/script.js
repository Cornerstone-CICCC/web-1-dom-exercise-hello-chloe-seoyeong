// YOUR CODE HERE
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const output1 = document.querySelector("#output1");
const output2 = document.querySelector("#output2");
const output3 = document.querySelector("#output3");
const output4 = document.querySelector("#output4");
const output5 = document.querySelector("#output5");

btn1.addEventListener("click", (e) => {
  output1.style.color = "red";
})

btn2.addEventListener("click", (e) => {
  const newText = document.createElement("span");
  newText.textContent = "Hello word";
  
  output2.append(newText);
})

btn3.addEventListener("click", (e) => {
  output3.querySelector("p").classList.remove("small-text");
})

btn4.addEventListener("click", (e) => {
  const pTags = output4.querySelectorAll("p");

  pTags.forEach((pTag) => {
    pTag.style.color = "red";
  })
})

btn5.addEventListener("click", (e) => {
  const message = output5.querySelector("#message").value;
  console.log(message);
})