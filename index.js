var hamBurger = document.querySelector(".my-btn");

hamBurger.addEventListener("click", () => {
    var isOpened = hamBurger.getAttribute("aria-expanded");
    var menuList = document.getElementsByTagName("ul")[0];
    var navLinkOne = document.getElementsByTagName("a")[0];
    var navLinkTwo = document.getElementsByTagName("a")[1];
    var navLinkThree = document.getElementsByTagName("a")[2];
    var navLinkFour = document.getElementsByTagName("a")[3];
    var navLinkFive = document.getElementsByTagName("a")[4];

    if (isOpened == "false") {
        hamBurger.setAttribute("aria-expanded", "true");
        menuList.classList.remove("hide");
        navLinkOne.classList.remove("hide-nav-links");
        navLinkTwo.classList.remove("hide-nav-links");
        navLinkThree.classList.remove("hide-nav-links");
        navLinkFour.classList.remove("hide-nav-links");
        navLinkFive.classList.remove("hide-nav-links");

    } else {
        hamBurger.setAttribute("aria-expanded", "false");
        menuList.classList.add("hide");
        navLinkOne.classList.add("hide-nav-links");
        navLinkTwo.classList.add("hide-nav-links");
        navLinkThree.classList.add("hide-nav-links");
        navLinkFour.classList.add("hide-nav-links");
        navLinkFive.classList.add("hide-nav-links");
    }
})