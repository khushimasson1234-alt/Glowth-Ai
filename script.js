// Smooth reveal animation
const items = document.querySelectorAll(".card, .feature, .glass-card, .price-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: 0.2});

items.forEach(item => {
  item.style.opacity = 0;
  item.style.transform = "translateY(40px)";
  item.style.transition = "all 0.6s ease";
  observer.observe(item);
});
