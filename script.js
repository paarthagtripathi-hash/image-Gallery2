const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80"
];

let currentImage = 0;

function openLightbox(index) {
    currentImage = index;
    document.getElementById("lightbox-img").src = images[currentImage];
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentImage += direction;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightbox-img").src = images[currentImage];
}

function filterImages(category) {

    const allImages = document.querySelectorAll(".image");

    allImages.forEach(image => {

        if (category === "all" || image.classList.contains(category)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }

    });
}

/* Keyboard navigation */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        changeImage(1);
    }

    if (event.key === "ArrowLeft") {
        changeImage(-1);
    }

});