/*const shoppingList = ["milk","butter unsalted","eggs","hard cheese","yoghurt","ice-cream"]

let ulListEl = document.getElementById("ulListOne")


let index = 0;

while (index < shoppingList.length) {

    let missingItemsEl = document.createElement("li");
    ulListEl.append(missingItemsEl);
    
    missingItemsEl.textContent = shoppingList[index]

    index++;
}
*/

/*const missingItems = ["apple", "milk", "banana", "cherry", "eggs", "yogurt", "lemons", "grape", "pempek", "kiwi"];


let listGroupEl = document.querySelector(".list-group")
let newListItem = document.createElement("a")
newListItem.classList.add("list-group-item", "list-group-item-action", "list-group-item-secondary");

let listItems = document.querySelectorAll(".list-group-item");

let index = 0;

while (index < listItems.length) {


    listItems[index].textContent = missingItems[index];
    listGroupEl.append(newListItem);
    newListItem.textContent = missingItems[index];

  index++;

}
*/

/*const missingItems = ["apple", "milk", "banana", "cherry", "eggs", "yogurt", "lemons", "grape", "pempek", "kiwi"];

const listGroupEl = document.querySelector(".list-group");
const listItems = document.querySelectorAll(".list-group-item");

let index = 0;

while (index < missingItems.length) {
  const newListItem = document.createElement("a");
  newListItem.classList.add("list-group-item", "list-group-item-action", "list-group-item-secondary");
  newListItem.textContent = missingItems[index];

  listGroupEl.append(newListItem);
  index++;
}*/

const shoppingList = ["milk", "bananas", "apples", "butter unsalted","eggs","hard cheese","yoghurt","ice-cream"]
const colorOptions = ["#698996", "#968c77", "#af7b85", "#8e837a", "#92705f", "#7e8c8d", "#7f90a3", "#6a858d", "#8a6d8f", "#807e6b"];

let listGroupEl = document.querySelector(".list-group");
let listItems = document.querySelectorAll(".list-group-item");

let index = 0;

while (index < shoppingList.length) {

    let missingItemsEl = document.createElement("a");
    missingItemsEl.classList.add("list-group-item", "list-group-item-action", "list-group-item-secondary");
    missingItemsEl.textContent = shoppingList[index];

    

    let randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    //let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    missingItemsEl.style.backgroundColor = randomColor;
    missingItemsEl.style.color = "white";

    listGroupEl.append(missingItemsEl);
    index++;
}

