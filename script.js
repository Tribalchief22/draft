document.addEventListener('DOMContentLoaded', function() {
    const sounds = document.querySelectorAll('.sound');
  
    sounds.forEach(sound => {
      const audio = sound.querySelector('audio');
      sound.addEventListener('click', function() {
        audio.currentTime = 0;
        audio.play();
      });
    });
  });
  