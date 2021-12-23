const messageDisplayArea = document.querySelector(".message-display");
const itemsList = document.querySelector("ul");
function handleClick(e) {
  console.log("called");
  const targetElement = e.target;
  // only do something if the click event was triggered by a button
  if (!targetElement.classList.contains("btn")) return;
  const itemTitle = targetElement.previousElementSibling.textContent;
  console.log(`You clicked ${itemTitle}`);
}

itemsList.addEventListener("click", handleClick);
