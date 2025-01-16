function displayUserInfo (){
const username = localStorage.getItem("username") || "Guest";
document.getElementById("wu").textContent = `welcom , ${username}`

}

window.onload = function (){
    displayUserInfo();
    
}