const img = document.querySelector('img');
      
function randomImage() {
  const x = Math.floor(Math.random() * (window.innerWidth - img.width));
  const y = Math.floor(Math.random() * (window.innerHeight - img.height));
  img.style.top = `${y}px`;
  img.style.left = `${x}px`;
}

setInterval(randomImage, 600);