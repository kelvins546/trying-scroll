  //pre-order btn 
  document.getElementById('preOrderBtn').addEventListener('click', () => {
    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        const sizeValue = selectedSize.value;
        window.location.href = `pre-order-pants-3.html?size=${sizeValue}`;
    } else {
        alert('Please select a size');
    }
});