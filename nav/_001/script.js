const menuList = document.getElementById("menuList");
const show = document.querySelector(".nav-item");

    menuList.style.maxHeight = "0px";

    function togglemenu() {
      if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "170px";
        // menuList.style.display = "block";
        
      } else {
        menuList.style.maxHeight = "0px";
        // menuList.style.display = "none";
      }
    }