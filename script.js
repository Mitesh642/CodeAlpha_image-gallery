const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeBtn = document.querySelector("#close");

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentIndex = 0;

function showImage(index) {
    lightboxImage.src = gallery[index].src;
    lightbox.classList.add('active');
    currentIndex = index;
}

function nextImage(){
    currentIndex = (currentIndex + 1) % gallery.length;
    showImage(currentIndex);
}

function prevImage(){
    currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    showImage(currentIndex);
}

function close(){
    lightbox.classList.remove('active'); 
}

gallery.forEach((img, i) => {
    img.addEventListener('click', () => showImage(i)); 
});

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
closeBtn.addEventListener('click', close);
lightbox.addEventListener('click', (e)=>{
    if (e.target===lightbox) close();
});


let startX = 0;
let endX = 0;

lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, false);

lightbox.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) { 
        nextImage();
    } else if (endX - startX > 50) { 
        prevImage();
    }
}, false);
