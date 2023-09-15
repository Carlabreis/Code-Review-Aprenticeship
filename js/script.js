//CHANGE LIST NAME
const changeNameBtn = document.querySelector(".js-heading-btn");
changeNameBtn.addEventListener("click", () => {
    let listName = prompt("What do you want to name your list?");
    if (listName){
        document.querySelector('h1').innerText = listName;
    }
});

// ADD ITEMS TO THE LIST
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    const itemInput = document.getElementById('input-item');
    if (itemInput.value){
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${itemInput.value}`;
        ul.appendChild(li);
        itemInput.value = "";
    }
});

//CLEAR LIST
const button = document.getElementById("clear-btn");
button.addEventListener("click", ()=> {
    document.querySelector("ul").innerHTML = "";
})






























//CHANGE LIST NAME:
//save the reference to the button in a variable
//add a click event listener to the button
    //prompt the user for a new name and save it in a variable
    // if the user enters a name
        //pass the name into the H1 element

// ADD ITEMS TO THE LIST
//save the reference to the button in a variable
//add click event listener to button
    //save the reference to the item input in a variable
    //if the input field has a value
        //save the reference to the ul in a variable
        //create an li element and save it's reference in a variable
        //assign the item input value into the new li inner html using a template literal
        //append the new li item to ul
        //clear the input value

//CLEAR LIST
//save the reference to the button in a variable
//add a click event listener to the button
    //delete ul inner html