//select the container
const container = document.querySelector("#container");

//create a div element and assign it to a variable named content
const content = document.createElement("div");
//add the class content to the div
content.classList.add("content")
//add the textcontent
content.textContent = "This is the glorious text-content!";

//append the new element to the div

container.appendChild(content);

//add a p element with red text that says "Hey I'm red!"
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.setAttribute("style", "color: red");
container.appendChild(para);

//add a h3 element with blue text that says "I;m a blue h3!"
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.setAttribute("style", "color: blue");
container.appendChild(h3);

//add a div with a black border and pink background color
const secondDiv = document.createElement("div");

//add a h1 element that says I'm in a div to the new div
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
secondDiv.appendChild(h1);

//add a p element that says ME TOO! and append it to the new div
const p = document.createElement("p");
p.textContent = "ME TOO!";
secondDiv.appendChild(p);

//append the div to the container
container.appendChild(secondDiv);

// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});


