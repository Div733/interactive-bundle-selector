const bundleBoxes = document.querySelectorAll('.bundle-box');

// Function to handle box selection
bundleBoxes.forEach(box => {
    box.addEventListener('click', function() {
        // Collapse all boxes first
        bundleBoxes.forEach(b => {
            b.classList.remove('expanded');
        });

        // Expand the clicked box
        this.classList.add('expanded');

        // Update the total price based on the clicked box's price
        let price = this.querySelector('.price').textContent;
        document.querySelector('.total-price').textContent = 'Total: ' + price;
    });
});
