window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if(window.scrollY > 10){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Inisialisasi Slick Carousel setelah document ready
$(document).ready(function(){
  // Fungsi untuk mengacak array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Pengaturan umum untuk semua slider
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button class="slide-arrow prev-arrow slick-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0l-117.8-116c-4.6-4.7-4.6-12.3.1-17z"></path></svg></button>',
    nextArrow: '<button class="slide-arrow next-arrow slick-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"></path></svg></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: { 
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 600,
        settings: { 
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000
        }
      }
    ]
  };

  // Inisialisasi semua slider dengan pengaturan yang sama
  $('.sliderku').each(function() {
    $(this).slick(sliderSettings);
  });
});

// Modal slider logic
window.sliderData = [
    [
        'foto/prewed1.jpeg',
        'foto/prewed2.jpeg',
        'foto/prewed3.jpeg',
        'foto/prewed4.jpeg',
        'foto/prewed5.jpeg'
    ],
    [
        'foto2/portrait1.jpg',
        'foto2/portrait2.jpg',
        'foto2/portrait4.jpg',
        'foto2/portrait3.jpg',
        'foto2/portrait5.jpg'
    ],
    [
        'foto3/IMG_0509.jpg',
        'foto3/IMG_0526.jpg',
        'foto3/IMG_0671.jpg',
        'foto3/IMG_0400.jpg',
        'foto3/IMG_0729.jpg',
        'foto3/IMG_0564.jpg',
        'foto3/IMG_0468.jpg',
        'foto3/IMG_0665.jpg'
    ],
    [
        'foto4/1.jpg',
        'foto4/2.jpg',
        'foto4/3.jpg',
        'foto4/4.jpg',
        'foto4/5.jpg',
        'foto4/6.jpg',
        'foto4/7.jpg',
        'foto4/8.jpg'
    ]
];
window.openModalSlider = function(imgIdx, sliderIdx) {
    const modal = document.getElementById('modalSlider');
    const modalSlider = modal.querySelector('.modal-slider');
    if ($(modalSlider).hasClass('slick-initialized')) {
        $(modalSlider).slick('unslick');
    }
    modalSlider.innerHTML = '';
    setTimeout(function() {
        window.sliderData[sliderIdx].forEach(src => {
            console.log('append img', src);
            const div = document.createElement('div');
            const img = document.createElement('img');
            img.src = src;
            img.style.width = '100%';
            img.style.height = 'auto';
            div.appendChild(img);
            modalSlider.appendChild(div);
        });
        modal.style.display = 'flex';
        $(modalSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            arrows: true,
            dots: true,
            initialSlide: imgIdx
        });
        document.body.style.overflow = 'hidden';
    }, 50);
}
window.closeModalSlider = function() {
    const modal = document.getElementById('modalSlider');
    const modalSlider = modal.querySelector('.modal-slider');
    if ($(modalSlider).hasClass('slick-initialized')) {
        $(modalSlider).slick('unslick');
    }
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
window.onclick = function(event) {
    const modal = document.getElementById('modalSlider');
    if (event.target === modal) window.closeModalSlider();
}