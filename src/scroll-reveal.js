window.sr = ScrollReveal({ reset: true});

sr.reveal('#button, .logo', {
    duration: 2000,
    rotate: {x:0, y: 80, z:0}
});
 
 
 ScrollReveal().reveal('.headline', { duration: 4000 });
 ScrollReveal().reveal('.widget', { interval: 500 });

 ScrollReveal().reveal('.banner', { duration: 2000, 
    origin: 'right', 
    distance: '200px',
    delay: 200 });

ScrollReveal().reveal('.banner-2', { duration: 2000, 
    origin: 'left', 
    distance: '200px',
    delay: 200 });

ScrollReveal().reveal('.bott', { duration: 2000, 
    origin: 'bottom', 
    distance: '200px',
    delay: 200 });

ScrollReveal().reveal('.topp', { duration: 2000, 
    origin: 'top', 
    distance: '200px',
    delay: 600 });
