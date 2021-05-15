export const ActiveNav = name => {
	let arr = document.querySelectorAll(".nav-link");
    for(let i = 0; i < arr.length; ++i) {
      arr[i].classList.remove("active");
      arr[i].setAttribute("aria-current", "false");
    }
    if(name) {
    	document.getElementById(name).classList.add("active");
    	document.getElementById(name).setAttribute("aria-current", "true");
    }
}