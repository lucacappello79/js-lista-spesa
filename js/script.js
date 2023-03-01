const shoppingList = ["milk","butter unsalted","eggs","hard cheese","yoghurt","ice-cream"]

let ulListEl = document.getElementById("ulListOne")


let index = 0;

while (index < shoppingList.length) {

    let missingItemsEl = document.createElement("li");
    ulListEl.append(missingItemsEl);
    
    missingItemsEl.textContent = shoppingList[index]

    index++;
}
