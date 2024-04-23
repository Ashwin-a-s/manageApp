const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
    const value = btn.textContent;
function menubar(){
    if(btn.textContent!='X'){
        btn.textContent = 'X';
        menu.classList.remove("hidden");
    }
    else
    {
        btn.textContent = value;
        menu.classList.add("hidden");
    }
}