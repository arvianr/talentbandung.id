$(document).ready(function(){
  window.sr = ScrollReveal({reset: true});
  sr.reveal('.profile-talent h3', {duration: 2500, origin: 'left'});
  sr.reveal('.profile-talent p', {duration: 2500, origin: 'left',});
  sr.reveal('.logo-talent figure img', {duration: 2500, origin: 'right',});

  sr.reveal('.contact h4', {duration: 2500});
  sr.reveal('.contact-grid', {duration: 2500});

  sr.reveal('.title-events h6', {duration: 2500});
});
