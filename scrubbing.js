const video = document.getElementById('scrollVideo');
const section = document.querySelector('.video-section');
const textBox = document.getElementById('videoText');

video.addEventListener('loadedmetadata', () => {
  const duration = video.duration;

  // Set scroll height proportional to video length
  // e.g. 100vh scroll space per 1 second of video
  section.style.height = `${duration * 100}vh`;
});

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const scrollRange = section.offsetHeight - window.innerHeight;

  // clamp to 0–1
  let scrollFraction = Math.min(Math.max(-rect.top / scrollRange, 0), 1);

  video.currentTime = video.duration * scrollFraction;

  if (video.currentTime < video.duration * 0.01) {
    textBox.textContent = "";
  }else if (video.currentTime > video.duration * 0.01 && video.currentTime < video.duration * 0.15) {
    textBox.textContent = "NEVER GONNA GIVE YOU UP";
  } else if (video.currentTime < video.duration * 0.30) {
    textBox.textContent = "NEVER GONNA LET YOU DOWN";
  }else if (video.currentTime < video.duration * 0.45) {
    textBox.textContent = "NEVER GONNA RUN AROUND AND DESERT YOU";
  } else if (video.currentTime < video.duration * 0.60) {
    textBox.textContent = "NEVER GONNA MAKE YOU CRY";
  } else if (video.currentTime < video.duration * 0.75) {
    textBox.textContent = "NEVER GONNA SAY GOODBYE";
  } else if (video.currentTime < video.duration * 0.90) {
    textBox.textContent = "NEVER GONNA TELL A LIE AND HURT YOU";
  } else if (video.currentTime < video.duration * 1) {
    textBox.textContent = "";
  }
});


const scrollToTopBtn = document.getElementById("buttonup");

    // Show/hide button based on scroll position
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to top on button click
    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling
        });
    });