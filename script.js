const names = [ "NITYA SUNDARAM ACADEMY","ନିତ୍ୟ ସୁନ୍ଦରମ୍ ଏକାଡେମୀ"  ];
const dates =  ["ଉତ୍ତରେଶ୍ୱର, ସୋରୋ, ବାଲେଶ୍ୱର" , "UTTARESWAR , SORO , BALASORE"];
const motos = ["ସମ୍ପୂର୍ଣ୍ଣ ଶିକ୍ଷା ଏବଂ ବ୍ୟକ୍ତିତ୍ୱ ବିକାଶ ସଂସ୍ଥା" , "INSTITUTION OF HOLISTIC EDUCATION AND PERSONALITY DEVELOPMENT"];

    let index = 0;
    const namebox = document.getElementById("nameBox");
    const datebox =document.getElementById("placeBox");
    const motoBox = document.getElementById("motoBox");
    
    

function changeText() {
      gsap.to([namebox], {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.inOut",
        stagger:0.1,
        onComplete: () => {
          // update text when hidden
          index = (index + 1) % names.length;
          namebox.textContent = names[index];
          
          // fade in + move up
          gsap.fromTo([namebox, ],
            { opacity: 0, y: -10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut",stagger:0.1 }
          );
        }
      });
    }

    function loop() {
      changeText();
      gsap.delayedCall(5, loop); // call again after 8s
    }

    // start after 8s
    gsap.delayedCall(5, loop);

// Carousel functionality
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = 6;
let currentSlide = 0;
let autoSlideInterval;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('bg-white/80', index === currentSlide);
        dot.classList.toggle('bg-white/40', index !== currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        goToSlide(parseInt(dot.dataset.index));
        resetAutoSlide();
    });
});

// Start auto-slide
startAutoSlide();

