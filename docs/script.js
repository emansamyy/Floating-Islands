// You need to add event listeners to the islands and toggle the "clicked" class.
const islands = document.querySelectorAll('.island');

islands.forEach(island => {
  island.addEventListener('click', () => {
    island.classList.toggle('clicked');
  });

  island.addEventListener('mouseenter', () => {
    island.querySelector('.island-text').classList.add('show');
  });

  island.addEventListener('mouseleave', () => {
    island.querySelector('.island-text').classList.remove('show');
  });
});
