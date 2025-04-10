
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider img");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  // Clonar imágenes
  const firstClone = images[0].cloneNode();
  const lastClone = images[images.length - 1].cloneNode();
  slider.appendChild(firstClone);
  slider.insertBefore(lastClone, images[0]);

  const allSlides = document.querySelectorAll(".slider img");
  let currentIndex = 1;
  let autoSlideInterval;

  // Establecer posición inicial
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  function showSlide(index) {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  function checkLoop() {
    const totalSlides = allSlides.length;

    if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = 1;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 500);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = totalSlides - 2;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      }, 500);
    }
  }

  nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    checkLoop();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    checkLoop();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
      checkLoop();
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  startAutoSlide();

