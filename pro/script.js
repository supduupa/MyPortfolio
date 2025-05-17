       function showsidebar(){
            const show = document.querySelector(".sidebar");
            show.style.display = "flex"
        }
        function hidesidebar(){
             const hide = document.querySelector(".sidebar");
            hide.style.display = "none"
        }
let isDarkMode = false;
const btn = document.getElementById("btn");

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.getElementById("body");
    
    if (isDarkMode) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        // btn.innerText = "Dark mode";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "#333";
        // btn.innerText = "Light mode";
    }
}
