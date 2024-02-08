document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Ich auch!';
});

document.getElementById('no').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Kein Problem!';
});

document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('draggableImage');
    let offsetX, offsetY;

    img.addEventListener('dragstart', function(e) {
        offsetX = e.offsetX;
        offsetY = e.offsetY;
    });

    const box = document.getElementById('drag-box');
    box.addEventListener('dragover', function(e) {
        e.preventDefault(); // This line is necessary to allow the drop event
    });

    box.addEventListener('drop', function(e) {
        e.preventDefault(); // Prevent default action (e.g., opening as link for some elements)

        // Calculate the new position of the image, adjust if necessary to keep within the box
        let x = e.clientX - offsetX - box.offsetLeft + window.scrollX; // Adding window.scrollX for better accuracy
        let y = e.clientY - offsetY - box.offsetTop + window.scrollY; // Adding window.scrollY for better accuracy

        // Set the position of the image
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    });
});
