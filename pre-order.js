document.addEventListener('DOMContentLoaded', () => {
    const customSelectWrapper = document.querySelector('.custom-select-wrapper');
    const customSelect = customSelectWrapper.querySelector('.custom-select');
    const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
    const customOptions = customSelect.querySelector('.custom-options');
    const customOptionElements = customOptions.querySelectorAll('.custom-option');

    customSelectTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        customSelect.classList.toggle('open');
    });

    customOptionElements.forEach(option => {
        option.addEventListener('click', () => {
            customSelect.classList.remove('open');
            customSelectTrigger.querySelector('span').textContent = option.textContent;
            customOptionElements.forEach(el => el.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });

    window.addEventListener('resize', () => {
        customSelect.classList.remove('open');
    });
});


//pre order btn
document.addEventListener('DOMContentLoaded', () => {
    // Get the URL parameter for the chosen size
    const urlParams = new URLSearchParams(window.location.search);
    const chosenSize = urlParams.get('size');

    if (chosenSize) {
        const customSelectTrigger = document.querySelector('.custom-select-trigger span');
        const customOptionElements = document.querySelectorAll('.custom-option');

     
        customOptionElements.forEach(option => {
            if (option.getAttribute('data-value') === chosenSize) {
                option.classList.add('selected');
                customSelectTrigger.textContent = option.textContent;
            } else {
                option.classList.remove('selected');
            }
        });
    }
});


function showAlerts(event) {
    event.preventDefault(); // Prevents the default action (navigation)
    alert("Coming soon.");
}
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
