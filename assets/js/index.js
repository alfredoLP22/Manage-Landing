document.addEventListener("DOMContentLoaded",()=>{
    let $open_menu = document.querySelector(".open-menu"),
    $close_menu = document.querySelector(".close-menu"),
    $nav_links = document.querySelector(".nav-links"),
    $nav_links_content = document.querySelector(".nav-links-content"),
    close_nav = true;

    $open_menu.addEventListener("click",()=>{
        if(!$nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.add("nav-links-open");
            $open_menu.style.display = "none";
            $close_menu.style.display = "block";
        }
    });
    $close_menu.addEventListener("click",()=>{
        if($nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.remove("nav-links-open");
            $open_menu.style.display = "block";
            $close_menu.style.display = "none";
        }
    });
    $nav_links.addEventListener("click",()=>{
        if(close_nav && $nav_links.classList.contains("nav-links-open")){
            $nav_links.classList.remove("nav-links-open");
            $open_menu.style.display = "block";
            $close_menu.style.display = "none";
        }
        close_nav = true;
    });
    $nav_links_content.addEventListener("click",()=>{
        close_nav = false;
    })
});