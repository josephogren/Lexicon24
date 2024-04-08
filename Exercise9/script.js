document.getElementById('addItemBtn').addEventListener('click', function() {
  var itemInput = document.getElementById('itemInput');
  var itemText = itemInput.value.trim();
  if (itemText !== '') {
    var newItem = document.createElement('li');
    newItem.textContent = itemText;
    newItem.addEventListener('click', toggleItem);
    document.getElementById('itemList').appendChild(newItem);
    itemInput.value = '';
  }
});

function toggleItem() {
  this.classList.toggle('crossed');
}