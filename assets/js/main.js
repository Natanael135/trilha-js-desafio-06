document.addEventListener('DOMContentLoaded', function () {
  function switchTheme() {
    document.body.classList.toggle('dark-theme');
  }

  const button = document.querySelector('button');
  button.addEventListener('click', switchTheme);
});
