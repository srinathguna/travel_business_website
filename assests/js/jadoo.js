
const nav = document.getElementById("nav");
const mobNav = document.getElementById("mobile_ham");
const mobMenuClose = document.getElementById("mobile_menu_close");

mobNav.addEventListener("click", () => {
    nav.classList.add("open")
    nav.classList.remove("close")
})

mobMenuClose.addEventListener("click", () => {
  nav.classList.remove("open");
  nav.classList.add("close");
});

//slider
// var content = ["srinath", "gopinath","raghu"]
// for (i = 0; i < content.length;i++){
//     //console.log(content[i]);
//     var divv = document.createElement("div");
//     var para = document.body.appendChild("divv");
//     divv.innerHTML = content[i] 
//  }