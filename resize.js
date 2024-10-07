window.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("move");

    textarea.style.position = 'relative';
    const original = textarea.getBoundingClientRect().top;

    textarea.addEventListener("input", function() {
        textarea.style.height = 'auto'; // Reset the height
        const scrollHeight = textarea.scrollHeight;
        const maxHeight = parseInt(window.getComputedStyle(textarea).getPropertyValue('max-height'));
        
        if (scrollHeight <= maxHeight) { // Compare scrollHeight with max-height
            textarea.style.height = scrollHeight + 'px'; // Set the height to the scroll height
        } else {
            textarea.style.height = maxHeight + 'px'; // Set to max height if exceeded
            textarea.style.overflowY = 'scroll'; // Enable vertical scrolling
        }

        const newheight = parseInt(textarea/this.style.height);
        textarea.style.top = `${originalTop - (newHeight - textarea.clientHeight)}px`;
    });
});
