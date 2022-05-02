// dom select selements

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// set initial of menu

let showMenu = false;

menuBtn.addEventListener("click", togglemenu);

function togglemenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(function (item) {
      item.classList.add("show");
    });

    // set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
}

window.onload = function () {
  var text = "Software developer: JAVA, Spring Boot, Angular, full stack and more...";
  var cont = 0;
  var cursor = document.getElementById("cursor");
  var textElement = document.getElementById("text");

  if (cursor) {
    cursor.classList.add("hidden-cursor");
    toggleCursor();
    setTimeout(function () {
      print();
    }, 500);
  }

  var contaim = "";
  function print() {
    if (cont < text.length) {
      contaim += text[cont];
      textElement.innerText = contaim;
      cont++;
      setTimeout(() => {
        print();
      }, 200);
    } else {
      clearMessage();
    }
  }

  function clearMessage() {
    contaim = "";
    cont = 0;
    setTimeout(function () {
      print();
    }, 10000);
  }

  function toggleCursor() {
    setTimeout(function () {
      hideCursor();
    }, 500);

    setTimeout(function () {
      showCursor();
    }, 1000);

    setTimeout(function () {
      toggleCursor();
    }, 1200);
  }

  function hideCursor() {
    cursor.classList.add("hidden-cursor");
  }

  function showCursor() {
    cursor.classList.remove("hidden-cursor");
  }
};
