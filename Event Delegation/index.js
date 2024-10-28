const itemList = document.getElementById('itemList');
const items = ['item1', 'item2', 'item3'];

items.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    itemList.append(li);
});

itemList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});
