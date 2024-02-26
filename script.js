document.addEventListener('DOMContentLoaded', function() {
  const sounds = document.querySelectorAll('.sound');

  sounds.forEach(sound => {
    const audio = sound.querySelector('audio');
    let isPlaying = false;

    sound.addEventListener('click', function() {
      if (!isPlaying) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
      isPlaying = !isPlaying;
    });

    audio.addEventListener('ended', function() {
      isPlaying = false;
    });
  });
});

  
