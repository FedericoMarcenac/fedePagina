// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const header = document.querySelector('.headerGeneral');
  
    toggleButton.addEventListener('click', function() {
      header.classList.toggle('background-change');
    });
  });
  