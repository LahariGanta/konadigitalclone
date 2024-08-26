let subMenu = document.getElementById("submenu1");
const dummyBlock= document.getElementById("dummy")
function f1(){
    subMenu.style.display="block"
}
function f2(){
    subMenu.style.display="none";
}

dummyBlock.addEventListener("mouseenter" ,f1);
dummyBlock.addEventListener("mouseleave" ,f2)

// ---------------------

let subMenu2 = document.getElementById("submenu2");
const dummyBlock2= document.getElementById("dummy2")
function f3(){
    subMenu2.style.display="block"
}
function f4(){
    subMenu2.style.display="none";
}

dummyBlock2.addEventListener("mouseenter" ,f3);
dummyBlock2.addEventListener("mouseleave" ,f4)
console.log("its working !!")

// ----------------
let subMenu3 = document.getElementById("submenu3");
const dummyBlock3= document.getElementById("dummy3")
function f5(){
    subMenu3.style.display="block"
}
function f6(){
    subMenu3.style.display="none";
}

dummyBlock3.addEventListener("mouseenter" ,f5);
dummyBlock3.addEventListener("mouseleave" ,f6)
