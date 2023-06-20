const images = [
    "Ayaan_Coeur.jpg",
    "AyaanMoon.jpg"
  ];
  
  let currentIndex = 0;
  const slideshowImage = document.getElementById("slideshow-image");
  
  function startSlideshow() {
    setInterval(changeImage, 3000); // Change image every 3 seconds
  }
  
  function changeImage() {
    slideshowImage.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  startSlideshow();
  