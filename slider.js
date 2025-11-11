<script>
const track = document.getElementById('slider-track');
let x = 0;

function animateSlider() {
  x -= 1; // kaydırma hızı
  if (Math.abs(x) >= track.scrollWidth / 2) {
    x = 0; // sonsuz tekrar
  }
  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animateSlider);
}

animateSlider();
</script>
