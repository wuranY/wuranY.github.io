function onClickMenuMask() {
	hideMenu()
}

function onClickMenu(e) {
	e.stopPropagation()
}

function showMenu() {
	const menuElement = document.querySelector('.page-mobile-menu')
	const menuContainerElement = document.querySelector('.page-mobile-menu-container')
	menuElement.classList.add('page-mobile-menu-show')
	menuElement.style.background = 'rgba(0, 0, 0, 0)'
	menuContainerElement.style.transform = 'scaleX(0)'
	setTimeout(() => {
		menuElement.style.background = 'rgba(0, 0, 0, 0.25)'
		menuContainerElement.style.transform = 'scaleX(1)'
	}, 300)
}

function hideMenu() {
	const menuElement = document.querySelector('.page-mobile-menu')
	const menuContainerElement = document.querySelector('.page-mobile-menu-container')
	menuElement.style.background = 'rgba(0, 0, 0, 0)'
	menuContainerElement.style.transform = 'scaleX(0)'
	setTimeout(() => {
		menuElement.classList.remove('page-mobile-menu-show')
	}, 300)
}

window.onload = function () {
	const menuElement = document.querySelector('.page-mobile-menu')
	const menuContainerElement = document.querySelector('.page-mobile-menu-container')
	menuElement.addEventListener('click', onClickMenuMask)
	menuContainerElement.addEventListener('click', onClickMenu)
}