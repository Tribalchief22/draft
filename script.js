document.addEventListener('DOMContentLoaded', function() {
    let startX = 0;
    let currentSlide = 0;
    const slides = document.querySelectorAll('.image');
  
    function handleTouchStart(event) {
      startX = event.touches[0].clientX;
    }
  
    function handleTouchMove(event) {
      const xDiff = startX - event.touches[0].clientX;
  
      if (xDiff > 50) {
        showSlide(currentSlide + 1);
      } else if (xDiff < -50) {
        showSlide(currentSlide - 1);
      }
    }
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
  
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
  
      currentSlide = slideIndex;
    }
  
    document.querySelector('.gallery').addEventListener('touchstart', handleTouchStart);
    document.querySelector('.gallery').addEventListener('touchmove', handleTouchMove);
  
    // Play audio on image click
    slides.forEach(slide => {
      slide.addEventListener('click', function() {
        const audioFile = this.getAttribute('data-audio');
        const audio = new Audio(audioFile);
        audio.play();
      });
    });
  });
  
