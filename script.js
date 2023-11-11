let totalAmount = 0;

function buyItem(itemName, itemPrice, itemImage) {
    totalAmount += itemPrice;
    
    updateTotalAmount();

    displayAddedItem(itemName, itemPrice, itemImage);
}

function updateTotalAmount() {
    document.getElementById('sumcost').innerText = totalAmount + '$';
}



function displayAddedItem(itemName, itemPrice, itemImage) {
    const addedItemDiv = document.createElement('div');
    addedItemDiv.classList.add('added-item');
    addedItemDiv.innerHTML = `
        <p>${itemName}: ${itemPrice}$</p>
        <img class="added-item-image" src="${itemImage}" alt="${itemName}">`;
    document.getElementById('addeditem').appendChild(addedItemDiv);
}


function removeAddedItems() {
    const addedItemContainer = document.getElementById('addeditem');
    addedItemContainer.innerHTML = '';
    totalAmount = 0;
    updateTotalAmount();
}
