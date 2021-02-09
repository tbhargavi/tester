var Main_div = document.querySelector(".cross-icon-wrapper");
var Diff_div = document.querySelector(".form");
var Btn_incr = document.querySelector(".form-page-clicker");
var Content_elem = document.querySelector(".get-quote-item");
var Style_elem = document.querySelector(".get-quote-color");
var Position_div = document.getElementsByTagName("a");
var Next_div = document.querySelector(".hamburger-button");
var Div_elem= document.getElementById("line1");
var Flatter = document.getElementById("line2");
var nav_menu = document.querySelector(".nav-bar");
var flag = 0;
var Format_elem = document.querySelector(".overlay");
var Overlay1 = document.querySelector(".overlay");
var elem = window.matchMedia("(max-width: 991px)");
myFunction(elem); 
elem.addListener(myFunction);
function myFunction(elem) {
  if (elem.matches) {
    nav_menu.style.height = "0";
    nav_menu.style.opacity = "0";
   Div_elem.style.transform = "translate(-50%, -4px)";
   Flatter.style.transform = "translate(-50%, 8px)";
    nav_menu.style.transition = "none";

Next_div.onclick = function () {
      if (flag == "0") {
        console.log(123);
       Div_elem.style.transform = "translate(-50%, 0px) rotate(45deg)";
        Flatter.style.transform = "translate(-50%, 0px) rotate(-45deg)";
        nav_menu.style.transition = "all 0.2s linear";
        nav_menu.style.height = "360px";
        nav_menu.style.opacity = "1";

        flag = 1;
      } else if (flag == 1) {
        Div_elem.style.transform = "translate(-50%, -4px)";
        Flatter.style.transform = "translate(-50%, 8px)";
        nav_menu.style.opacity = "0";
        nav_menu.style.height = "0";

        flag = 0;
      }
    };
  } else {
    nav_menu.style.height = "auto";
    nav_menu.style.opacity = "1";
  }
}

for (var i = 0; i < Position_div.length; i++) {
  Position_div[i].addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") e.preventDefault();
  });
}

Main_div.onclick = function () {
 Diff_div.style.transform = "translateX(100%)";
  Format_elem.style.display = "none";
  Format_elem.style.opacity = "0";
};
Btn_incr.onclick = function () {
 Diff_div.style.transform = "translateX(0)";
  Format_elem.style.display = "block";
 Format_elem.style.opacity = "1";
};
Content_elem.onclick = function () {
  Diff_div.style.transform = "translateX(0)";
 Format_elem.style.display = "block";
  Format_elem.style.opacity = "1";
};
Style_elem.onclick = function () {
  Diff_div.style.transform = "translateX(0)";
  Format_elem.style.display = "block";
  Format_elem.style.opacity = "1";
};
Overlay1.onclick = function () {
 Format_elem.style.display = "none";
  Format_elem.style.opacity = "0";
  Diff_div.style.transform = "translateX(100%)";
};