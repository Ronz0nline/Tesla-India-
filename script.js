
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll(
    '.reveal, .last_text-container, .pages li .model-3, .pages li .page-info'
  );

  function revealOnScroll() {
    let windowHeight = window.innerHeight;

    reveals.forEach(el => {
      let elementTop = el.getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Page 1 animates immediately
});

//vehicles logic
document.addEventListener('DOMContentLoaded', function () {
  const slideContainer = document.getElementById('slide');
  if (slideContainer) {
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    nextBtn.onclick = function () {
      let lists = document.querySelectorAll('#slide .item');
      slideContainer.appendChild(lists[0]);
    };

    prevBtn.onclick = function () {
      let lists = document.querySelectorAll('#slide .item');
      slideContainer.prepend(lists[lists.length - 1]);
    };
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("intro-sound");
  const vehiclesLink = document.querySelector(".vehicles-link a");

  if (vehiclesLink && audio) {
    vehiclesLink.addEventListener("click", (event) => {
      event.preventDefault(); // stop default link action
      audio.currentTime = 0;  // restart if replayed
      audio.play().catch(err => {
        console.log("Audio play blocked:", err);
      });
      // navigate right away after triggering play
      window.location.href = "vehicles.html";
    });
  }
});

