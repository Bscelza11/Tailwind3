// You can use this function to open an close the navbar menu on small screens when the menu is collapsed
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden');
  document.getElementById(collapseID).classList.toggle('block');
}

function clickboton() {
  var btnMenu = document.getElementById('navbar-default');

  if (btnMenu.style.display == 'block') {
    btnMenu.style.display = 'none';
  } else {
    btnMenu.style.display = 'block';
  }
}
