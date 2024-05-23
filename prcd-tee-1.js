  //pre-order btn 
 /* document.getElementById('preOrderBtn').addEventListener('click', () => {
    const selectedSize = document.querySelector('input[name="size"]:checked');
    if (selectedSize) {
        const sizeValue = selectedSize.value;
        window.location.href = `pre-order-tee-1.html?size=${sizeValue}`;
    } else {
        alert('Please select a size');
    }
}); */

//not avail
document.getElementById("preOrderBtn").addEventListener("click", function() {
    alert("Item is not yet available");
});

function showAlerts(event) {
    event.preventDefault(); // Prevents the default action (navigation)
    alert("Coming soon.");
}

//icon slide 
document.addEventListener('DOMContentLoaded', function () {
    const nextPageLink = document.getElementById('next-page');
    const prevPageLink = document.getElementById('prev-page');

    nextPageLink.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Add the slide-out-left class to the container
        document.querySelector('.container').classList.add('slide-out-left');
        
        // After the transition duration, navigate to the next page
        setTimeout(() => {
            window.location.href = nextPageLink.href;
        }, 500); // Duration should match the CSS transition duration
    });

    prevPageLink.addEventListener('click', function (event) {
        event.preventDefault();
        
        // Add the slide-out-right class to the container
        document.querySelector('.container').classList.add('slide-out-right');
        
        // After the transition duration, navigate to the previous page
        setTimeout(() => {
            window.location.href = prevPageLink.href;
        }, 500); // Duration should match the CSS transition duration
    });
});
