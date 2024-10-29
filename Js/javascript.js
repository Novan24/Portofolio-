    document.getElementById("year").textContent = new Date().getFullYear();
    // section 1
      function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;
        document.getElementById('clock').textContent = currentTime;
    }

    // Update jam setiap detik
    setInterval(updateClock, 1000);

    // Panggil fungsi satu kali untuk menampilkan jam saat halaman dimuat
    updateClock();
    
  // Img randomizer
    const totalImages = 13;
    const usedIndexes = new Set();

    function getRandomImage() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * totalImages) + 1;
        } while (usedIndexes.has(randomIndex));
        usedIndexes.add(randomIndex);

        const formattedIndex = String(randomIndex).padStart(2, '0');
        return `img/logo/Img${formattedIndex}.png`;
    }

    document.getElementById('image1').src = getRandomImage();
    document.getElementById('image2').src = getRandomImage();
    document.getElementById('image3').src = getRandomImage();

   // banner randomizer
   const totalBanners = 6; // Jumlah banner B01.png hingga B06.png

    function getRandomBanner() {
        const randomIndex = Math.floor(Math.random() * totalBanners) + 1;
        const formattedIndex = String(randomIndex).padStart(2, '0');
        return `img/banner/B${formattedIndex}.png`;
    }

    // Pasang gambar acak ke elemen img
    document.getElementById('banner').src = getRandomBanner();
    
    // SecAnim
      // Function to detect when elements are in view
  function handleScrollAnimation() {
    const sections = document.querySelectorAll('.SecAnim');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      // Add 'in-view' class if the element is in the viewport
      if (sectionTop < windowHeight - 50) {
        section.classList.add('in-view');
      }
    });
  }

  // Trigger the function on page load and scroll
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);
