
window.addEventListener("scroll", e=>{
	document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})