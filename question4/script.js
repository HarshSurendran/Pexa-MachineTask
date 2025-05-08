// Add a new user to the list
const userList = document.querySelector("#user-list ul");
const newUser = document.createElement("li");
newUser.textContent = "David";
userList.appendChild(newUser);

//Remove the first User from the list
const firstUser = userList.querySelector("li");
userList.removeChild(firstUser);