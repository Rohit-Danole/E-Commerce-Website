let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelector('.btn-dark').innerText = `Cart (${cartCount})`;
}

document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('click', addToCart);
});



function filterItems(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block'; 
    } else {
      item.style.display = 'none'; 
    }
  });
}
filterItems('all');